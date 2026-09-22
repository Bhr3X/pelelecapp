const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const vm=require('node:vm');const ctx={window:{},document:{addEventListener(){}}};vm.createContext(ctx);for(const f of ['data','forensic','app'])vm.runInContext(fs.readFileSync(`js/${f}.js`,'utf8'),ctx);const d=ctx.window.PELELEC_DATA;
test('cada item validado tem fontes específicas; pendências são explícitas',()=>{const ids=new Set();for(const c of d.contacts)for(const m of c.messages){assert(!ids.has(m.id));ids.add(m.id);assert(m.date);assert(m.editorialType);assert(!m.isDeleted&&!m.recoveredText&&!m.imageUrl);if(m.editorialType!=='pending'){assert(m.sources.length);for(const id of m.sources)assert.match(d.sources[id].url,/^https:\/\/.+\/.+/);}}});
test('retratos possuem origem e licença; não há imagens genéricas',()=>{for(const c of d.contacts)if(c.photoUrl){assert(c.photo.source);assert(c.photo.licenseUrl);assert(c.photo.credit);}assert(!JSON.stringify(d).includes('unsplash'));});
test('perícia começa ativa e citações ficam limitadas por fonte',()=>{assert.equal(ctx.window.ForensicManager.isForensicModeActive,true);const words={};for(const c of d.contacts)for(const m of c.messages)if(m.editorialType==='quote'){const id=m.sources[0];words[id]=(words[id]||0)+m.text.split(/\s+/).length;}for(const n of Object.values(words))assert(n<=25);});
test('renderização escapa texto e desativar perícia não modifica dados',()=>{const app=ctx.window.PelelecApp;const msg={text:'<img src=x onerror=alert(1)>',editorialType:'summary',sources:['doria']};const before=JSON.stringify(d);assert(app.renderMessageBody(msg).includes('&lt;img'));ctx.window.ForensicManager.isForensicModeActive=false;assert(!app.renderMessageBody(msg).includes('openItemSource'));assert.equal(JSON.stringify(d),before);app.sendMessage();assert.equal(JSON.stringify(d),before);});
test('Moraes tem contraponto e nenhuma resposta literal atribuída a ele',()=>{const c=d.contacts.find(c=>c.id==='stf_alexandre');assert(c.contextSummary.includes('contest'));assert(c.messages.every(m=>m.editorialType!=='quote'||m.speaker==='Daniel Vorcaro'));});
test('tema claro é padrão e botão corresponde ao estado inicial',()=>{const html=fs.readFileSync('index.html','utf8');assert.match(html,/<body data-theme="light">/);assert.match(html,/id="themeToggleBtn"[^>]*>☀️/);});
test('referências do dossiê resolvem no inventário e exclusões não têm texto recuperado',()=>{const inventory=JSON.parse(fs.readFileSync('docs/dossier-index.json'));const refs=new Set(inventory.records.flatMap(r=>r.refs));for(const c of d.contacts)for(const m of c.messages){for(const ref of m.researchRefs||[])assert(refs.has(ref),ref);if(m.deletionEvidence){assert(m.sources.includes('dos_anexo4'));assert(!m.recoveredText);assert(m.text.includes('não aparece'));}if(m.mediaLink){assert.match(m.mediaLink,/^https:\/\//);assert(m.rightsNote);}}});
test('encaminhamento não cria conversa direta com Gonet',()=>{assert(!d.contacts.some(c=>c.id==='gonet'));const c=d.contacts.find(c=>c.id==='ciro_soares');assert(c.messages.some(m=>m.id==='ds-cs8'&&m.editorialType==='summary'));assert(c.responseSources.includes('dos_gonet_resp'));});

test('divulgação só entra depois dos contatos, fora de buscas e filtros',()=>{
  const app=ctx.window.PelelecApp;
  const list={innerHTML:'',insertAdjacentHTML(position,html){assert.equal(position,'beforeend');this.innerHTML+=html;}};
  ctx.document.getElementById=()=>list;
  app.activeCategory='all';app.searchQuery='';app.renderContacts();
  assert(list.innerHTML.lastIndexOf('brasilia_survivors')>list.innerHTML.lastIndexOf('camilla_ramos'));
  assert(!d.contacts.some(c=>c.id===app.promotion.id));
  app.searchQuery='Martha'.toLowerCase();app.renderContacts();assert(!list.innerHTML.includes('promo-contact'));
  app.searchQuery='';app.activeCategory='intimate';app.renderContacts();assert(!list.innerHTML.includes('promo-contact'));
  app.activeCategory='all';
  assert(!fs.readFileSync('index.html','utf8').includes('gamePromoBanner'));
  for(const file of ['characters.png','gameplay.png'])assert(fs.statSync(`assets/promo/${file}`).size>10000);
  assert(app.renderPromotion().includes('JOGAR AGORA'));
});
