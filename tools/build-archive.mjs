// Adapt the supplied, validated research snapshot without rewriting message text.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=f=>JSON.parse(fs.readFileSync(path.join(root,f),'utf8'));
const base=read('data/editorial-base.json'), research=read('data/research-snapshot.json');
const aliases={moraes:'stf_alexandre',mourao:'turma',phc:'paulo_brb',augusto_lima:'augusto_master',grupo_master:'bacen_operacoes',newton_ramos:'desembargador_fasano',castro:'claudio_castro',flavio:'flavio_bolsonaro',doria:'joao_doria'};
const sid=id=>'research_'+id;
const name=id=>id===research.owner.id?research.owner.name:(research.contacts[id]?.name||id);
const sources={...base.sources,...Object.fromEntries(Object.entries(research.sources).map(([id,s])=>[sid(id),{...s,id:sid(id)}]))};
const date=m=>!m.d?'Data não informada':m.p==='year'?m.d.slice(0,4):m.p==='month'?m.d.slice(0,7):m.d.slice(0,10)+(m.p==='approx'?' · data aproximada':'');
const time=m=>m.p==='minute'&&m.t?new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(new Date(m.t)):'';
const labels={audio:'Áudio · transcrição publicada',image:'Imagem mencionada',document:'Documento mencionado',view_once:'Visualização única',note_screenshot:'Nota capturada em imagem',deleted:'Registro de exclusão · conteúdo indisponível',call:'Registro de ligação',system:'Aviso do WhatsApp',event:'Contexto cronológico',omitted:'Trecho omitido'};
const contacts=research.chats.map(chat=>{
 const id=aliases[chat.id]||chat.id,old=base.contacts.find(c=>c.id===id),person=research.contacts[chat.members[0]]||{};
 const outroLado=chat.members.flatMap(mid=>(research.contacts[mid]?.outroLado||[]).map(o=>({name:name(mid),text:o.summary||o.quote,sources:(o.src||[]).map(sid)})));
 const context=[chat.note,person.relation].filter(Boolean).join('\n');
 const responseSources=[...new Set([...(old?.responseSources||[]),...outroLado.flatMap(o=>o.sources)])];
 const firstSource=sources[sid(chat.messages[0].src[0])];
 const title=chat.title||person.name||id;
 const messages=chat.messages.map(m=>{
  if(m.conf==='low'||!m.src?.length||m.src.some(s=>!sources[sid(s)]))throw Error('Invalid source/confidence: '+m.id);
  const kind=m.kind, literal=m.verbatim!==false&&!['event','system','deleted','omitted','call'].includes(kind);
  const result={id:'r-'+m.id,researchId:m.id,editorialType:literal?'quote':['event','system'].includes(kind)?'context':['image','document','view_once','deleted','call'].includes(kind)?'media':'summary',type:'research',kind,date:date(m),dateLabel:date(m),time:time(m),sender:!chat.thirdParty&&m.from===research.owner.id?'me':'them',speaker:['system','event'].includes(kind)?'':name(m.from),text:m.text||'',sources:m.src.map(sid),researchRefs:[],title:m.label||labels[kind]||'',verification:m.ver||{status:'nao_registrada'},confidence:m.conf||'high',recoveredByPF:!!m.recovered,context:m.ctx||'',documentRef:m.doc||'',datePrecision:m.p,variants:(m.variants||[]).map(v=>({text:v.text,sources:v.src.map(sid)})),originalLanguage:true};
  if(m.media){result.publishedImage={url:m.media.path,alt:m.text,credit:m.media.credit,verifiedOn:research.meta.updated,originalUrl:m.media.originalUrl};result.mediaLink=sources[sid(m.media.sourceId)].url;result.rightsNote='Reprodução documental com crédito; licença aberta não presumida.';}
  return result;
 });
 // Preserve the already verified editorial/photo cards as supplements, not new original messages.
 const researchIds=new Set(chat.messages.map(m=>m.id));
 const normalized=t=>String(t||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');
 const exactTexts=new Set(chat.messages.map(m=>normalized(m.text)));
 const supplements=(old?.messages||[]).filter(m=>m.editorialType!=='pending'&&(m.editorialType==='context'||m.publishedImages||(!m.publishedImage&&!m.researchRefs?.some(ref=>researchIds.has(ref))&&!exactTexts.has(normalized(m.text))))).map(m=>({...m,supplemental:true}));
 const result={...(old||{}),id,name:title,role:person.role||'Conversa documentada',category:({justica:'poder',politica:'politica',negocios:'master',rede:'turma',pessoal:'intimate',outros:'outros'})[chat.group]||'outros',avatarInitials:title.split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase(),avatarColor:old?.avatarColor||'#455a64',statusText:'documental',lastSeen:'Acervo documental',phone:'Não exibida: sem necessidade editorial',pinned:!!chat.pinned,unreadCount:0,contextSummary:context,originalContext:true,responseSources,outroLado,thirdParty:!!chat.thirdParty,isGroup:chat.id.startsWith('grupo_'),members:chat.members.map(name),source:old?.source||{outlet:firstSource.outlet,date:firstSource.date||'Data não informada',headline:firstSource.title,link:firstSource.url},messages:[...messages,...supplements]};
 if(!old?.photoUrl&&person.photo?.credit&&person.photo?.license&&person.photo?.page){result.photoUrl=person.photo.url;result.photoCredit=person.photo.credit+' · '+person.photo.license;result.photo={source:person.photo.page,licenseUrl:person.photo.page,credit:person.photo.credit,license:person.photo.license};}
 return result;
});
const mapped=new Set(contacts.map(c=>c.id));
for(const old of base.contacts)if(!mapped.has(old.id))contacts.push(old);
const order=new Map(base.contacts.map((c,i)=>[c.id,i]));contacts.sort((a,b)=>(order.get(a.id)??100)-(order.get(b.id)??100));
const out={...base,contacts,sources,categories:[...base.categories,{id:'outros',label:'Outros'}],archiveMeta:{updated:research.meta.updated,researchChats:research.chats.length,researchRecords:research.chats.flatMap(c=>c.messages).filter(m=>m.kind!=='event').length,events:research.chats.flatMap(c=>c.messages).filter(m=>m.kind==='event').length,excludedLowConfidence:32,sourceSnapshot:'data/research-snapshot.json'},ownerResponses:research.owner.outroLado.map(o=>({text:o.summary||o.quote,sources:o.src.map(sid)}))};
out.forensicReport.statistics.totalMessagesRecovered=contacts.reduce((n,c)=>n+c.messages.length,0);out.forensicReport.statistics.sensitiveContactsIdentified=contacts.length;
fs.writeFileSync(path.join(root,'js/data.js'),'/* Generated by tools/build-archive.mjs. Do not edit manually. */\nwindow.PELELEC_DATA = '+JSON.stringify(out,null,2)+';\n');
console.log(JSON.stringify({conversations:contacts.length,researchMessages:out.archiveMeta.researchRecords,events:out.archiveMeta.events,cards:out.forensicReport.statistics.totalMessagesRecovered,images:contacts.flatMap(c=>c.messages).reduce((n,m)=>n+(m.publishedImages?.length||(+!!m.publishedImage)),0)},null,2));
