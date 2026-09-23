const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
function setup(saved, unavailable=false) {
  const nodes=[];
  let ready;
  const storage=new Map(saved ? [['pelelec-language',saved]] : []);
  const ctx={window:{},NodeFilter:{SHOW_TEXT:4},MutationObserver:class {observe(){} disconnect(){}},localStorage:{getItem(k){if(unavailable)throw Error();return storage.get(k);},setItem(k,v){if(unavailable)throw Error();storage.set(k,v);}},document:{body:{},documentElement:{},title:'',addEventListener(_,fn){ready=fn;},querySelectorAll(){return [];},createTreeWalker(){let i=0;return {currentNode:null,nextNode(){this.currentNode=nodes[i++];return !!this.currentNode;}};}}};
  vm.createContext(ctx);
  for(const file of ['data','i18n'])vm.runInContext(fs.readFileSync(`js/${file}.js`,'utf8'),ctx);
  return {ctx,nodes,storage,ready,locale:ctx.window.PelelecI18n};
}
test('Portuguese default, saved English and blocked storage work',()=>{
  for(const [saved,blocked,expected] of [[null,false,'pt'],['en',false,'en'],['invalid',false,'pt'],['en',true,'pt']]){
    const app=setup(saved,blocked);app.ready();assert.equal(app.locale.locale,expected);
    app.locale.setLanguage('en');assert.equal(app.ctx.document.documentElement.lang,'en');
  }
});
test('editorial supplements translate while research evidence remains original',()=>{
  const app=setup();const data=app.ctx.window.PELELEC_DATA;const before=JSON.stringify(data);
  app.locale.setLanguage('en');
  for(const contact of data.contacts){
    if(!contact.originalContext)assert.notEqual(app.locale.text(contact.contextSummary),contact.contextSummary,contact.id);
    for(const msg of contact.messages){
      if(msg.originalLanguage)continue;
      if(msg.editorialType!=='pending')assert(app.locale.messages[msg.id],msg.id);
      assert.notEqual(app.locale.text(msg.text),msg.text,msg.id);
      if(msg.title)assert.notEqual(app.locale.text(msg.title),msg.title,msg.id);
    }
  }
  assert.match(app.locale.text('Citação publicada'),/translated from Portuguese/);
  assert.equal(JSON.stringify(data),before);
});
test('PT/EN toggles restore exact original text, including dynamically replaced nodes',()=>{
  const app=setup();const node={nodeValue:'Abrir imagem completa ↗',parentElement:{closest(){return false;}}};app.nodes.push(node);
  app.locale.setLanguage('en');assert.equal(node.nodeValue,'Open full image ↗');
  app.locale.apply();assert.equal(node.nodeValue,'Open full image ↗');
  app.locale.setLanguage('pt');assert.equal(node.nodeValue,'Abrir imagem completa ↗');
  app.locale.setLanguage('en');node.nodeValue='Contexto e outro lado';app.locale.apply();assert.equal(node.nodeValue,'Context and responses');
  app.locale.setLanguage('pt');assert.equal(node.nodeValue,'Contexto e outro lado');
});
test('translated date precision and caveats are retained',()=>{
  const app=setup();app.locale.setLanguage('en');
  assert.equal(app.locale.text('1º de outubro de 2025'),'1 October 2025');
  assert.equal(app.locale.text('Junho de 2025 · dia não conferido na reportagem textual'),'June 2025 · day not verified in the article text');
  assert.match(app.locale.text('Citação publicada · trecho'),/translated from Portuguese · excerpt/);
});
