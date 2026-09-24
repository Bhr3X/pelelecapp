const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('fs');const vm=require('vm');
const el=()=>({innerHTML:'',textContent:'',dataset:{},addEventListener(){}});const nodes={};
const ctx={document:{getElementById:id=>(nodes[id]||=el()),body:{dataset:{}}}};ctx.window=ctx;vm.createContext(ctx);
for(const f of ['js/data.js','js/veiculos.js','js/diversidade.js'])vm.runInContext(fs.readFileSync(f,'utf8'),ctx);
const P=ctx.PelelecDiversidade,V=ctx.PELELEC_VEICULOS,d=ctx.PELELEC_DATA;

test('every source is counted once and in exactly one group',()=>{
 const total=Object.values(P.srcByGroup).reduce((a,b)=>a+b,0);assert.equal(total,P.all.length);
 assert.equal(new Set(P.all.map(s=>s.id)).size,P.all.length);
 assert.equal(P.outletList.reduce((n,o)=>n+o.sources,0),P.all.length);
});
test('the classification is explicit: every group exists and no outlet is in two groups',()=>{
 const seen={};for(const [g,list] of Object.entries(V.veiculos)){assert(V.grupos[g],g);for(const o of list){assert(!seen[o],o+' em '+seen[o]+' e '+g);seen[o]=g;}}
 assert(V.grupos.nao);
});
test('official documents count as official, whoever hosts them',()=>{
 for(const s of P.all)if(['documento','document'].includes(s.kind))assert.equal(s.group,'oficial',s.id);
});
test('fact buckets partition the timeline',()=>{
 assert.equal(P.bothSides.length+P.onlyRight.length+P.onlyLeft.length+P.neither.length,d.timeline.length);
});
test('the page renders the table and escapes names',()=>{
 assert.match(nodes.dvBody.innerHTML,/Veículo a veículo/);assert(!/<script/i.test(nodes.dvBody.innerHTML));
 assert(P.hhi>0&&P.hhi<=10000);
});
