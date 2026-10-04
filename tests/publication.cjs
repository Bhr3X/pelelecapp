const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const os=require('node:os');
const {execFileSync}=require('node:child_process');

test('an archive update changes the data URL on both published pages',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'pelelec-publication-'));
 try{
  for(const sub of ['tools','data','js'])fs.mkdirSync(path.join(dir,sub));
  for(const file of ['tools/build-archive.mjs','data/editorial-base.json','data/research-snapshot.json','data/additional-records.json','index.html','threads.html'])fs.copyFileSync(file,path.join(dir,file));
  const build=()=>execFileSync(process.execPath,[path.join(dir,'tools/build-archive.mjs')],{stdio:'pipe'});
  const urls=()=>['index.html','threads.html'].map(file=>fs.readFileSync(path.join(dir,file),'utf8').match(/src="(js\/data\.js\?[^\"]+)"/)[1]);
  build();const before=urls();
  const snapshot=JSON.parse(fs.readFileSync(path.join(dir,'data/research-snapshot.json'),'utf8'));
  snapshot.meta.updated='2099-01-01';
  fs.writeFileSync(path.join(dir,'data/research-snapshot.json'),JSON.stringify(snapshot));
  build();const after=urls();
  assert.notEqual(after[0],before[0]);assert.notEqual(after[1],before[1]);assert.equal(after[0],after[1]);
  build();assert.deepEqual(urls(),after);
 }finally{fs.rmSync(dir,{recursive:true,force:true});}
});

test('audio reports without a published transcript do not claim to be transcriptions',()=>{
 const vm=require('node:vm');const context={window:{}};
 vm.createContext(context);vm.runInContext(fs.readFileSync('js/data.js','utf8'),context);
 const audio=context.window.PELELEC_DATA.contacts.flatMap(c=>c.messages).filter(m=>m.kind==='audio'&&m.editorialType==='summary');
 assert(audio.length>0);
 for(const m of audio){assert.doesNotMatch(m.title,/transcri[çc][aã]o publicada/i,m.id);}
});

test('updating the archive does not invent or advance image verification dates',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'pelelec-media-dates-'));
 try{
  for(const sub of ['tools','data','js'])fs.mkdirSync(path.join(dir,sub));
  for(const file of ['tools/build-archive.mjs','data/editorial-base.json','data/research-snapshot.json','data/additional-records.json','index.html','threads.html'])fs.copyFileSync(file,path.join(dir,file));
  const file=path.join(dir,'data/research-snapshot.json');
  const snapshot=JSON.parse(fs.readFileSync(file,'utf8'));
  const mediaRecords=snapshot.chats.flatMap(c=>c.messages).filter(m=>m.media);
  assert(mediaRecords.length>=2);
  mediaRecords[0].media.verifiedOn='2026-09-23';
  for(const m of mediaRecords.slice(1))delete m.media.verifiedOn;
  const build=()=>{
   fs.writeFileSync(file,JSON.stringify(snapshot));
   execFileSync(process.execPath,[path.join(dir,'tools/build-archive.mjs')],{stdio:'pipe'});
   const context={window:{}};require('node:vm').runInNewContext(fs.readFileSync(path.join(dir,'js/data.js'),'utf8'),context);
   return context.window.PELELEC_DATA.contacts.flatMap(c=>c.messages);
  };
  const assertDates=records=>{
   assert.equal(records.find(m=>m.researchId===mediaRecords[0].id).publishedImage.verifiedOn,'2026-09-23');
   for(const m of mediaRecords.slice(1))assert.equal(records.find(r=>r.researchId===m.id).publishedImage.verifiedOn,'Data não registrada');
  };
  assertDates(build());
  snapshot.meta.updated='2099-01-01';
  assertDates(build());
 }finally{fs.rmSync(dir,{recursive:true,force:true});}
});
