/* PelelecApp · Threads: o que as fontes publicaram em cada dia.
   Só usa dados de js/data.js: manchetes, datas e links das próprias fontes. Nenhum texto novo é atribuído a ninguém. */
(() => {
  'use strict';
  const D = window.PELELEC_DATA;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = s => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const $ = id => document.getElementById(id);

  const T = {
    pt: {
      back: '← Conversas', subtitle: 'o caso na imprensa, dia a dia', search: 'Buscar veículo ou manchete',
      pubs: n => `${n} ${n === 1 ? 'publicação' : 'publicações'}`, news: n => `${n} ${n === 1 ? 'registro novo' : 'registros novos'}`,
      recent: 'Dia da publicação · mais recentes primeiro', empty: 'Nada encontrado.', volume: 'Publicações por dia',
      dayTitle: n => `${n} ${n === 1 ? 'publicação' : 'publicações'} sobre o caso`,
      dayLead: 'Tudo o que as fontes deste acervo publicaram neste dia. Manchetes são os títulos das próprias reportagens e documentos, no original.',
      facts: 'Na linha do tempo', press: 'Na imprensa', first: 'Primeira aparição na imprensa',
      firstNote: 'Registros cuja fonte mais antiga no acervo é deste dia. Outro veículo pode ter publicado antes sem estar entre as fontes.',
      more: n => `Mostrar os outros ${n}`, uses: (m, f) => [m && `${m} ${m === 1 ? 'registro' : 'registros'}`, f && `${f} ${f === 1 ? 'fato da linha do tempo' : 'fatos da linha do tempo'}`].filter(Boolean).join(' · ') + ' no acervo',
      profile: 'Usada em fichas e contrapontos', coverage: 'Cobertura do caso; não sustenta registro no acervo',
      types: { quote: 'Transcrição', summary: 'Resumo', media: 'Mídia', context: 'Contexto' }, open: 'Abrir conversa', pick: 'Escolha um dia na lista.',
      prev: 'Dia anterior', next: 'Dia seguinte', untranslated: '',
    },
    en: {
      back: '← Chats', subtitle: 'the case in the press, day by day', search: 'Search outlet or headline',
      pubs: n => `${n} ${n === 1 ? 'publication' : 'publications'}`, news: n => `${n} new ${n === 1 ? 'record' : 'records'}`,
      recent: 'Publication date · newest first', empty: 'Nothing found.', volume: 'Publications per day',
      dayTitle: n => `${n} ${n === 1 ? 'publication' : 'publications'} about the case`,
      dayLead: 'Everything this archive’s sources published on this day. Headlines are the sources’ own titles, kept in the original Portuguese.',
      facts: 'On the timeline', press: 'In the press', first: 'First appearance in the press',
      firstNote: 'Records whose earliest source in this archive is from this day. Another outlet may have published earlier without being among the sources.',
      more: n => `Show the other ${n}`, uses: (m, f) => [m && `${m} ${m === 1 ? 'record' : 'records'}`, f && `${f} timeline ${f === 1 ? 'fact' : 'facts'}`].filter(Boolean).join(' · ') + ' in the archive',
      profile: 'Used in profiles and responses', coverage: 'Case coverage; supports no record in the archive',
      types: { quote: 'Transcript', summary: 'Summary', media: 'Media', context: 'Context' }, open: 'Open chat', pick: 'Pick a day from the list.',
      prev: 'Previous day', next: 'Next day', untranslated: 'Original Portuguese text, not translated.',
    },
  };
  let lang = 'pt';
  try { lang = localStorage.getItem('pelelec-language') === 'en' ? 'en' : 'pt'; } catch (_) { /* navegação privada */ }
  const t = () => T[lang];
  const locale = () => (lang === 'en' ? 'en-GB' : 'pt-BR');
  const asDate = d => new Date(d + 'T12:00:00-03:00');
  const fmt = (d, opts) => new Intl.DateTimeFormat(locale(), { timeZone: 'America/Sao_Paulo', ...opts }).format(asDate(d));
  const fmtDay = d => fmt(d, { day: 'numeric', month: 'short', year: 'numeric' });
  const cap = s => (s ? s[0].toUpperCase() + s.slice(1) : s);

  // 'AAAA-MM-DD…' ou 'DD/MM/AAAA…' -> 'AAAA-MM-DD'; datas só com mês ficam fora.
  const isoDay = d => {
    const s = String(d || '');
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
    const m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
    return m ? `${m[3]}-${m[2]}-${m[1]}` : null;
  };

  /* ---------- índices ---------- */
  const byUrl = new Map();
  for (const [id, s] of [...Object.entries(D.sources), ...(D.press || []).map(s => [s.id, s])]) {
    const day = isoDay(s.date);
    if (!day || !s.url) continue;
    const key = s.url.replace(/[?#].*$/, '').replace(/\/$/, '');
    if (!byUrl.has(key)) byUrl.set(key, { ...s, id, day, inArchive: !!D.sources[id], ids: [id] });
    else byUrl.get(key).ids.push(id);
  }
  const pressByDay = {};
  for (const s of byUrl.values()) (pressByDay[s.day] ||= []).push(s);
  const days = Object.keys(pressByDay).sort().reverse();

  const cites = {};
  const firstByDay = {};
  for (const c of D.contacts) {
    for (const m of c.messages) {
      for (const id of m.sources || []) (cites[id] ||= []).push(m);
      if (!m.researchId || m.editorialType === 'context') continue;
      const first = (m.sources || []).map(id => isoDay(D.sources[id]?.date)).filter(Boolean).sort()[0];
      if (first) (firstByDay[first] ||= []).push({ m, c });
    }
  }
  const factCites = {};
  for (const e of D.timeline || []) for (const id of e.sources) (factCites[id] ||= []).push(e);
  const factsByDay = {};
  for (const e of D.timeline || []) if (pressByDay[e.date]) (factsByDay[e.date] ||= []).push(e);

  const KIND = { document: 0, documento: 0, 'decisão': 1, nota: 2 };
  const order = (a, b) => (KIND[a.kind] ?? 5) - (KIND[b.kind] ?? 5) || a.outlet.localeCompare(b.outlet, 'pt-BR');
  // Mais recentes primeiro: data do registro e, no mesmo dia, horário publicado.
  // Sem data vai para o fim.
  const stamp = ({ m }) => (/^\d{4}/.test(m.date || '') ? String(m.date).slice(0, 10) + (m.time || '') : '');
  const newest = (a, b) => stamp(b).localeCompare(stamp(a));
  const count = (s, map) => new Set(s.ids.flatMap(id => (map[id] || []).map(x => x.id))).size;

  /* ---------- lista ---------- */
  const state = { day: null, q: '' };

  function volumeHTML() {
    if (!days.length) return '';
    const end = asDate(days[0]).getTime();
    const span = [];
    // Mais recente à esquerda, na mesma ordem da lista.
    for (let i = 0; i < 45; i++) span.push(new Date(end - i * 864e5).toISOString().slice(0, 10));
    const max = Math.max(...span.map(d => (pressByDay[d] || []).length), 1);
    const cols = span.map(d => {
      const n = (pressByDay[d] || []).length;
      const bar = `<span class="th-bar" style="height:${n ? Math.max(8, Math.round((n / max) * 100)) : 0}%"></span>`;
      return n ? `<a class="th-col" href="#dia=${d}" title="${esc(fmtDay(d))}: ${n}"${state.day === d ? ' aria-current="true"' : ''}>${bar}</a>` : `<span class="th-col">${bar}</span>`;
    }).join('');
    return `<div class="th-vol" role="img" aria-label="${esc(t().volume)}">${cols}</div><div class="th-axis"><span>${esc(fmtDay(span[0]))}</span><span>${esc(fmtDay(span[span.length - 1]))}</span></div>`;
  }

  function listHTML() {
    const q = norm(state.q.trim());
    const match = s => norm([s.outlet, s.title, s.author].join(' ')).includes(q);
    const list = days.filter(d => !q || pressByDay[d].some(match));
    if (!list.length) return `<div class="th-empty">${esc(t().empty)}</div>`;
    let html = q ? '' : volumeHTML();
    html += `<div class="th-sep">${esc(t().recent)}</div>`;
    let month = '';
    for (const d of list) {
      if (d.slice(0, 7) !== month) {
        month = d.slice(0, 7);
        html += `<div class="th-sep">${esc(cap(fmt(d, { month: 'long', year: 'numeric' })))}</div>`;
      }
      const items = pressByDay[d].slice().sort(order);
      const hit = q ? items.find(match) : items[0];
      const nm = (firstByDay[d] || []).length;
      html += `<a class="th-item" href="#dia=${d}"${state.day === d ? ' aria-current="true"' : ''}>
        <span class="th-ring">${items.length}</span>
        <span class="th-item-body"><span class="th-item-date">${esc(fmtDay(d))} · ${esc(t().pubs(items.length))}${nm ? ' · ' + esc(t().news(nm)) : ''}</span>
        <span class="th-item-title" data-no-translate>${esc(hit.outlet)}: ${esc(hit.title)}</span></span></a>`;
    }
    return html;
  }

  /* ---------- dia ---------- */
  const initials = o => o.replace(/\(.*?\)/g, '').split(/[\s.·–-]+/).filter(w => w.length > 1 && /^[A-ZÀ-Ú0-9]/.test(w)).slice(0, 2).map(w => w[0]).join('') || o[0];

  function postHTML(s) {
    const nm = count(s, cites), nf = count(s, factCites);
    const kind = s.kind && !['reportagem', 'report'].includes(s.kind) ? `<span class="th-chip">${esc(s.kind)}</span>` : '';
    const use = !s.inArchive ? t().coverage : nm || nf ? t().uses(nm, nf) : t().profile;
    return `<li class="th-post">
      <span class="th-av" aria-hidden="true">${esc(initials(s.outlet))}</span>
      <div class="th-post-body">
        <div class="th-post-head"><b data-no-translate>${esc(s.outlet)}</b>${kind}</div>
        <a class="th-post-title" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" data-no-translate>${esc(s.title)} ↗</a>
        ${s.author ? `<div class="th-post-meta" data-no-translate>${esc(s.author)}</div>` : ''}
        <div class="th-post-meta">${esc(use)}</div>
      </div></li>`;
  }

  function recordHTML({ m, c }) {
    const type = t().types[m.editorialType] || '';
    return `<a class="th-rec" href="index.html#contact=${encodeURIComponent(c.id)}" title="${esc(t().open)}">
      <span class="th-rec-head">${esc(c.name)} · ${esc(m.dateLabel || m.date || '')}${type ? ` · <span class="th-chip th-${esc(m.editorialType)}">${esc(type)}</span>` : ''}</span>
      <span class="th-rec-text" data-no-translate>${m.speaker ? `<b>${esc(m.speaker)}:</b> ` : ''}${esc(String(m.text || m.title || '').slice(0, 220))}</span></a>`;
  }

  function dayHTML(d) {
    if (!d) return `<div class="th-placeholder">${esc(t().pick)}</div>`;
    const items = pressByDay[d].slice().sort(order);
    const firsts = (firstByDay[d] || []).slice().sort(newest);
    const facts = (factsByDay[d] || []).slice().sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id, 'pt-BR', { numeric: true }));
    const i = days.indexOf(d), prev = days[i + 1], next = days[i - 1];
    const SHOW = 12;
    return `<article class="th-card">
      <a class="th-back" href="#">←</a>
      <div class="th-kicker">${esc(cap(fmt(d, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })))}</div>
      <h1>${esc(t().dayTitle(items.length))}</h1>
      <p class="th-lead">${esc(t().dayLead)}</p>
      ${facts.length ? `<h2>${esc(t().facts)} (${facts.length})</h2><div class="th-facts" data-no-translate>${facts.map(e => `<div class="th-fact"><b>${esc(e.title)}</b> ${esc(e.text)}</div>`).join('')}</div>` : ''}
      <h2>${esc(t().press)}</h2>
      <ol class="th-thread">${items.map(postHTML).join('')}</ol>
      ${firsts.length ? `<h2>${esc(t().first)} (${firsts.length})</h2><p class="th-note">${esc(t().firstNote)}${t().untranslated ? ' ' + esc(t().untranslated) : ''}</p>
        <div class="th-recs">${firsts.slice(0, SHOW).map(recordHTML).join('')}</div>
        ${firsts.length > SHOW ? `<details class="th-more"><summary>${esc(t().more(firsts.length - SHOW))}</summary><div class="th-recs">${firsts.slice(SHOW).map(recordHTML).join('')}</div></details>` : ''}` : ''}
      <nav class="th-nav">${prev ? `<a href="#dia=${prev}">← ${esc(fmtDay(prev))}</a>` : '<span></span>'}${next ? `<a href="#dia=${next}">${esc(fmtDay(next))} →</a>` : ''}</nav>
    </article>`;
  }

  /* ---------- rotas e montagem ---------- */
  function render() {
    const m = location.hash.match(/dia=(\d{4}-\d{2}-\d{2})/);
    state.day = m && pressByDay[m[1]] ? m[1] : null;
    $('thApp').classList.toggle('show-day', !!state.day);
    $('thList').innerHTML = listHTML();
    $('thDay').innerHTML = dayHTML(state.day || (innerWidth > 900 ? days[0] : null));
    $('thDay').scrollTop = 0;
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    for (const el of document.querySelectorAll('[data-i18n]')) el.textContent = t()[el.dataset.i18n];
    for (const el of document.querySelectorAll('[data-i18n-ph]')) el.placeholder = t()[el.dataset.i18nPh];
    for (const b of document.querySelectorAll('[data-lang]')) b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  }

  $('thQ').addEventListener('input', e => { state.q = e.target.value; $('thList').innerHTML = listHTML(); });
  for (const b of document.querySelectorAll('[data-lang]')) b.addEventListener('click', () => {
    lang = b.dataset.lang;
    try { localStorage.setItem('pelelec-language', lang); } catch (_) { /* navegação privada */ }
    render();
  });
  $('thTheme').addEventListener('click', () => {
    const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = next;
    $('thTheme').textContent = next === 'dark' ? '🌙' : '☀️';
  });
  window.addEventListener('hashchange', render);
  render();

  window.PelelecThreads = { pressByDay, firstByDay, factsByDay, days, isoDay };
})();
