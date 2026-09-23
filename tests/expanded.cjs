const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('fs');const vm=require('vm');
const ctx={window:{},document:{addEventListener(){}}};vm.createContext(ctx);for(const f of ['data','forensic','app'])vm.runInContext(fs.readFileSync(`js/${f}.js`,'utf8'),ctx);const d=ctx.window.PELELEC_DATA;
test('all eligible supplied records are preserved with sources and verification',()=>{
 const input=JSON.parse(fs.readFileSync('data/research-snapshot.json'));const records=d.contacts.flatMap(c=>c.messages).filter(m=>m.researchId);const extra=JSON.parse(fs.readFileSync('data/additional-records.json'));assert.equal(records.length,1145+extra.records.length);
 for(const chat of input.chats)for(const original of chat.messages){const m=records.find(m=>m.researchId===original.id);assert(m,original.id);assert.equal(m.text,original.text);assert.deepEqual(Array.from(m.sources),original.src.map(id=>'research_'+id));assert(m.verification);assert(!m.time||original.p==='minute');assert.notEqual(m.confidence,'low');}
});
test('third-party and group attribution does not create false direct chats',()=>{
 const c=d.contacts.find(c=>c.id==='augusto_lima__wagner');assert(c.thirdParty);assert(c.messages.every(m=>m.sender==='them'));assert(!d.contacts.some(c=>c.id==='gonet'));
 const group=d.contacts.find(c=>c.id==='bacen_operacoes');assert(group.isGroup);assert(group.messages.filter(m=>m.researchId&&m.kind!=='event').every(m=>m.speaker));
});
test('evidence is never translated or interpreted as markup, sources always remain available',()=>{
 const m=d.contacts.flatMap(c=>c.messages).find(m=>m.researchId==='A1-m12');assert(m);const before=JSON.stringify(m);ctx.window.ForensicManager.isForensicModeActive=false;const html=ctx.window.PelelecApp.renderMessageBody(m);assert(html.includes('data-no-translate'));assert(html.includes('openItemSource'));assert(html.includes('Recuperada pela PF'));assert(html.includes('Conferência parcial'));assert.equal(JSON.stringify(m),before);
 const unsafe={...m,text:'<script>alert(1)</script>'};assert(!ctx.window.PelelecApp.renderMessageBody(unsafe).includes('<script>'));
});
test('publication payload has no private identifiers, invalid references or low-confidence entries',()=>{
 const input=JSON.parse(fs.readFileSync('data/research-snapshot.json'));
 const pii=[/(?<!\d)(?:\+?55[\s.-]?)?\(?\d{2}\)?[\s.-]?9?\d{4}[-\s]?\d{4}(?!\d)/,/\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/,/\b[\w.+-]+@[\w-]+\.[\w.-]+\b/];
 const scan=(v,key='')=>{if(typeof v==='string'&&['text','ctx','label','summary','quote','relation','note'].includes(key)){for(const re of pii)assert(!re.test(v),key);}else if(Array.isArray(v))v.forEach(x=>scan(x,key));else if(v&&typeof v==='object'){assert.notEqual(v.conf,'low');for(const [k,x]of Object.entries(v))scan(x,k);}};assert.throws(()=>scan({text:"teste@example.com"}));scan(input);scan(JSON.parse(fs.readFileSync('data/additional-records.json')));
 for(const c of d.contacts)for(const m of c.messages){for(const id of m.sources||[])assert(d.sources[id]);for(const v of m.variants||[])for(const id of v.sources)assert(d.sources[id]);assert.doesNotThrow(()=>ctx.window.PelelecApp.renderMessageBody(m));}
});

test('additional transcripts retain their checked text, attribution and figure provenance',()=>{
 const extra=JSON.parse(fs.readFileSync('data/additional-records.json'));const all=d.contacts.flatMap(c=>c.messages);const ids=new Set();
 for(const {chatId,message:m} of extra.records){assert(!ids.has(m.id));ids.add(m.id);const c=d.contacts.find(c=>c.id===chatId);assert(c,chatId);const out=c.messages.find(x=>x.researchId===m.id);assert(out,m.id);assert.equal(out.text,m.text);assert.equal(out.date,m.d);assert.equal(out.sender,m.from==='vorcaro'?'me':'them');assert.equal(out.verification.status,'imagem_documento');assert.equal(out.documentRef,m.doc);assert.match(m.doc,/página \d+, figura \d+/);assert.equal(new Date(m.t).toISOString().slice(0,10),m.d);assert(out.context);assert(!out.recoveredByPF);assert(!all.some(x=>x.researchId!==m.id&&x.text===m.text&&x.speaker===out.speaker&&x.date===out.date));}
 assert.equal(d.archiveMeta.additionalRecords,extra.records.length);
});
