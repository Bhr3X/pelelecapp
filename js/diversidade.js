/* PelelecApp · Diversidade das fontes.
   Todos os números são calculados aqui, a partir de js/data.js. A classificação dos veículos vem de js/veiculos.js. */
(() => {
  'use strict';
  const D = window.PELELEC_DATA;
  const V = window.PELELEC_VEICULOS;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const $ = id => document.getElementById(id);
  const pct = (n, t) => (t ? Math.round((n / t) * 1000) / 10 : 0);
  const fmt = n => n.toLocaleString('pt-BR');

  // "CNN Brasil (blog Gustavo Uribe)" -> "CNN Brasil"; "Poder360 · Valor" -> "Poder360"
  const outletName = o => {
    const n = String(o || '').replace(/\s*\(.*$/, '').replace(/\s*[·|/–].*$/, '').trim();
    return (V.apelidos || {})[n] || n;
  };
  const groupOfOutlet = {};
  for (const [g, list] of Object.entries(V.veiculos)) for (const o of list) groupOfOutlet[o] = g;
  const isDoc = s => ['documento', 'document', 'decisão'].includes(s.kind);
  const groupOf = s => (isDoc(s) ? 'oficial' : groupOfOutlet[outletName(s.outlet)] || 'nao');

  /* ---------- índices ---------- */
  const all = [];
  const seen = new Set();
  for (const [id, s] of [...Object.entries(D.sources), ...(D.press || []).map(s => [s.id, s])]) {
    const key = String(s.url || id).replace(/[?#].*$/, '').replace(/\/$/, '');
    if (seen.has(key)) continue;
    seen.add(key);
    all.push({ ...s, id, name: outletName(s.outlet), group: groupOf(s) });
  }
  const byId = Object.fromEntries(all.map(s => [s.id, s]));
  const records = D.contacts.flatMap(c => c.messages).filter(m => m.researchId && m.kind !== 'event');
  const facts = D.timeline || [];

  const outlets = {};
  for (const s of all) {
    const o = (outlets[s.name] ||= { name: s.name, group: groupOfOutlet[s.name] || 'nao', sources: 0, docs: 0, records: new Set(), facts: new Set() });
    o.sources++;
    if (isDoc(s)) o.docs++;
  }
  for (const m of records) for (const id of m.sources || []) if (byId[id]) outlets[byId[id].name].records.add(m.id);
  for (const e of facts) for (const id of e.sources) if (byId[id]) outlets[byId[id].name].facts.add(e.id);
  const outletList = Object.values(outlets).sort((a, b) => b.sources - a.sources || a.name.localeCompare(b.name, 'pt-BR'));

  const groups = Object.keys(V.grupos);
  const srcByGroup = Object.fromEntries(groups.map(g => [g, all.filter(s => s.group === g).length]));
  const recByGroup = Object.fromEntries(groups.map(g => [g, records.filter(m => (m.sources || []).some(id => byId[id]?.group === g)).length]));
  const factsWith = g => facts.filter(e => e.sources.some(id => byId[id]?.group === g));
  const bothSides = facts.filter(e => factsWith('direita').includes(e) && factsWith('esquerda').includes(e));
  const onlyRight = factsWith('direita').filter(e => !bothSides.includes(e));
  const onlyLeft = factsWith('esquerda').filter(e => !bothSides.includes(e));
  const neither = facts.filter(e => !factsWith('direita').includes(e) && !factsWith('esquerda').includes(e));

  const shares = outletList.map(o => o.sources / all.length);
  const top = n => Math.round(shares.slice(0, n).reduce((a, b) => a + b, 0) * 1000) / 10;
  const hhi = Math.round(shares.reduce((a, s) => a + (s * 100) ** 2, 0));
  const days = new Set(all.map(s => String(s.date || '')).filter(d => /^\d{4}-\d{2}-\d{2}/.test(d)).map(d => d.slice(0, 10)));

  /* ---------- HTML ---------- */
  const chip = g => `<span class="dv-chip" style="--c:${V.grupos[g].cor}">${esc(V.grupos[g].nome)}</span>`;
  const stacked = counts => {
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    return `<div class="dv-stack" role="img" aria-label="Distribuição por grupo">${groups.filter(g => counts[g]).map(g => `<span style="flex:${counts[g]};background:${V.grupos[g].cor}" title="${esc(V.grupos[g].nome)}: ${counts[g]}"></span>`).join('')}</div>
      <ul class="dv-legend">${groups.map(g => `<li><i style="background:${V.grupos[g].cor}"></i>${esc(V.grupos[g].nome)} <b>${fmt(counts[g])}</b> <span>${pct(counts[g], total)}%</span></li>`).join('')}</ul>`;
  };
  const bars = counts => `<div class="dv-bars">${groups.map(g => `<div class="dv-bar-row"><span class="dv-bar-label">${esc(V.grupos[g].nome)}</span><span class="dv-bar"><span style="width:${pct(counts[g], records.length)}%;background:${V.grupos[g].cor}"></span></span><span class="dv-bar-val">${fmt(counts[g])} · ${pct(counts[g], records.length)}%</span></div>`).join('')}</div>`;
  const stat = (n, l) => `<div class="dv-stat"><b>${n}</b><span>${esc(l)}</span></div>`;
  const hhiLabel = hhi < 1500 ? 'baixa concentração' : hhi < 2500 ? 'concentração moderada' : 'alta concentração';
  const factList = list => (list.length ? `<details><summary>Ver ${list.length}</summary><ul class="dv-facts">${list.map(e => `<li><a href="threads.html#dia=${esc(e.date)}">${esc(e.date)} · ${esc(e.title)}</a></li>`).join('')}</ul></details>` : '');

  const state = { filter: 'all' };
  function tableHTML() {
    const rows = outletList.filter(o => state.filter === 'all' || o.group === state.filter);
    return `<div class="dv-filters">${['all', ...groups].map(g => `<button type="button" data-f="${g}" aria-pressed="${state.filter === g}">${g === 'all' ? 'Todos' : esc(V.grupos[g].nome)}</button>`).join('')}</div>
      <div class="dv-table-wrap"><table class="dv-table">
        <thead><tr><th>Veículo</th><th>Grupo</th><th>Fontes</th><th title="Das fontes, quantas são documentos oficiais hospedados no site">Documentos</th><th title="Registros do acervo que citam o veículo">Registros</th><th title="Fatos da linha do tempo que citam o veículo">Fatos</th></tr></thead>
        <tbody>${rows.map(o => `<tr><td>${esc(o.name)}</td><td>${chip(o.group)}</td><td>${o.sources}</td><td>${o.docs || ''}</td><td>${o.records.size || ''}</td><td>${o.facts.size || ''}</td></tr>`).join('')}</tbody>
      </table></div><p class="dv-note">${rows.length} veículos.</p>`;
  }

  $('dvBody').innerHTML = `
    <article class="dv-card">
      <div class="dv-kicker">Transparência · dados de ${esc(D.archiveMeta?.updated || V.atualizado)}</div>
      <h1>De onde vêm as fontes</h1>
      <p class="dv-lead">Números calculados a partir de todas as fontes do acervo. A classificação política dos veículos é nossa e está publicada em aberto, veículo a veículo, logo abaixo.</p>
      <div class="dv-stats">${stat(fmt(all.length), 'fontes')}${stat(outletList.length, 'veículos')}${stat(days.size, 'dias de cobertura')}${stat(facts.length, 'fatos na linha do tempo')}</div>

      <h2>Fontes por grupo</h2>
      <p class="dv-note">Cada link conta uma vez. Documentos da PF, do STF e da PGR contam como documento oficial, mesmo quando hospedados por um veículo.</p>
      ${stacked(srcByGroup)}

      <h2>Quanto do acervo depende de cada grupo</h2>
      <p class="dv-note">Dos ${fmt(records.length)} registros de conversa, quantos citam ao menos uma fonte de cada grupo. Um registro pode citar mais de um grupo, por isso a soma passa de 100%. É aqui que se vê o peso do relatório da PF.</p>
      ${bars(recByGroup)}

      <h2>Concentração</h2>
      <div class="dv-stats">${stat(top(3) + '%', 'das fontes nos 3 maiores veículos')}${stat(top(10) + '%', 'nos 10 maiores')}${stat(fmt(hhi), 'índice HHI · ' + hhiLabel)}</div>
      <p class="dv-note">O HHI soma o quadrado da participação de cada veículo (0 a 10.000). Abaixo de 1.500 é considerado pouco concentrado. Os maiores hoje: ${outletList.slice(0, 3).map(o => `${esc(o.name)} (${o.sources})`).join(', ')}.</p>

      <h2>Os dois lados em cada fato</h2>
      <div class="dv-stats">${stat(bothSides.length, 'fatos com fontes de direita e de esquerda')}${stat(onlyRight.length, 'só com direita')}${stat(onlyLeft.length, 'só com esquerda')}${stat(neither.length, 'sem nenhum dos dois')}</div>
      <div class="dv-split"><div><b>Só com direita</b>${factList(onlyRight)}</div><div><b>Só com esquerda</b>${factList(onlyLeft)}</div><div><b>Sem nenhum dos dois</b>${factList(neither)}</div></div>

      <h2>Veículo a veículo</h2>
      <div id="dvTable">${tableHTML()}</div>

      <h2>Como ler e limites</h2>
      <ul class="dv-limits">
        <li>A classificação em grupos é editorial, feita pelo PelelecApp com base na linha editorial pública de cada veículo. Ela está em <a href="https://github.com/Bhr3X/pelelecapp/blob/main/js/veiculos.js" target="_blank" rel="noopener noreferrer">js/veiculos.js</a>. Discorda? <a href="https://github.com/Bhr3X/pelelecapp/issues" target="_blank" rel="noopener noreferrer">Abra uma correção</a>.</li>
        <li>Folha, Estadão, O Globo, g1, Veja, Valor e piauí aparecem pouco porque as ferramentas de pesquisa não conseguem abrir seus textos (paywall ou bloqueio). Quando entram, é por reprodução creditada em outro veículo, que fica registrada como fonte.</li>
        <li>Mais fontes de um grupo não significa mais verdade: a maioria das mensagens vem de documentos da PF e do STF. Os veículos mostram quem repercutiu.</li>
        <li>“Não classificado” reúne blogs, portais regionais e referências (como Wikipédia e GitHub) sem linha editorial clara.</li>
      </ul>
    </article>`;

  $('dvBody').addEventListener('click', e => {
    const b = e.target.closest('[data-f]');
    if (!b) return;
    state.filter = b.dataset.f;
    $('dvTable').innerHTML = tableHTML();
  });
  $('dvTheme').addEventListener('click', () => {
    const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = next;
    $('dvTheme').textContent = next === 'dark' ? '🌙' : '☀️';
  });

  window.PelelecDiversidade = { all, outletList, srcByGroup, recByGroup, bothSides, onlyRight, onlyLeft, neither, hhi, groupOf, outletName };
})();
