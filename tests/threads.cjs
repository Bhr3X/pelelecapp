const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('fs');const vm=require('vm');
// DOM mínimo: threads.js só precisa de elementos com innerHTML/classList e de listeners.
const el=()=>({innerHTML:'',textContent:'',placeholder:'',scrollTop:0,dataset:{},classList:{toggle(){}},addEventListener(){},setAttribute(){}});
const nodes={};const ctx={window:{},innerWidth:1280,location:{hash:'#dia=2026-09-23'},localStorage:{getItem:()=>null,setItem(){}},Intl,
 document:{getElementById:id=>(nodes[id]||=el()),querySelectorAll:()=>[],documentElement:{},body:{dataset:{}}},addEventListener(){}};
ctx.window=ctx;vm.createContext(ctx);
for(const f of ['js/data.js','js/threads.js'])vm.runInContext(fs.readFileSync(f,'utf8'),ctx);
const d=ctx.PELELEC_DATA,th=ctx.PelelecThreads;

test('timeline facts and press items always point to a source with a link',()=>{
 assert(d.timeline.length>=70);
 for(const e of d.timeline){assert(e.sources.length,e.id);for(const id of e.sources)assert(d.sources[id]?.url,id);}
 for(const s of d.press){assert(s.url&&s.date&&s.outlet&&s.title,s.id);assert(!d.sources[s.id],s.id);}
});
test('every thread day lists only dated publications, newest first',()=>{
 assert.deepEqual([...th.days],[...th.days].sort().reverse());
 for(const day of th.days)for(const s of th.pressByDay[day]){assert.equal(s.day,day);assert(/^https?:\/\//.test(s.url));}
 assert.equal(th.isoDay('05/03/2026 · atualizada em 09/03'),'2026-03-05');assert.equal(th.isoDay('2026-09'),null);
});
test('the timeline reads newest first: day list, chart and records inside a day',()=>{
 const listDays=[...nodes.thList.innerHTML.matchAll(/class="th-item" href="#dia=([\d-]+)"/g)].map(m=>m[1]);
 assert(listDays.length>50);assert.deepEqual(listDays,[...listDays].sort().reverse());
 const chart=[...nodes.thList.innerHTML.matchAll(/class="th-col" href="#dia=([\d-]+)"/g)].map(m=>m[1]);
 assert.deepEqual(chart,[...chart].sort().reverse());
 const recs=[...nodes.thDay.innerHTML.matchAll(/th-rec-head">[^·]*· ([^·<]+)/g)].map(m=>/^\d{4}/.test(m[1])?m[1].slice(0,10):"");
 assert.deepEqual(recs,[...recs].sort().reverse());
});
test('a record first appears on the date of its earliest source',()=>{
 for(const [day,list] of Object.entries(th.firstByDay))for(const {m} of list){
  const dates=m.sources.map(id=>th.isoDay(d.sources[id]?.date)).filter(Boolean);assert.equal(dates.sort()[0],day,m.id);}
});
test('the day page escapes headlines and renders the selected day',()=>{
 assert.match(nodes.thDay.innerHTML,/publica/);assert(!/<script/i.test(nodes.thDay.innerHTML+nodes.thList.innerHTML));
});
