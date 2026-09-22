const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
/**
 * PelelecApp - Controlador Principal da Aplicação
 * Gerencia a renderização da interface, navegação entre conversas,
 * reprodução simulada de áudio, busca e envio de mensagens.
 */

const PelelecApp = {
  promotion: {
    id: 'brasilia_survivors', name: 'Brasília Survivors',
    avatarInitials: '🎮', avatarColor: '#725000',
    role: 'Divulgação · jogo no navegador', lastSeen: 'Divulgação · prints reais do jogo',
    phone: 'Conteúdo promocional',
    contextSummary: 'Divulgação do Brasília Survivors, separada do acervo documental. Capturas da versão V2 beta disponível no site oficial em 22/09/2026, reproduzidas a pedido do responsável pelo projeto.',
    source: {outlet: 'Brasília Survivors', date: '22/09/2026', headline: 'Site oficial do jogo · V2 beta', link: 'https://www.brasiliasurvivors.com.br/'},
    isPromotion: true
  },
  activeContactId: "martha",
  activeCategory: "all",
  searchQuery: "",
  activeAudioRow: null,
  audioInterval: null,

  init() {
    this.renderCategories();
    this.renderContacts();

    // Suporte a deep-link por hash (#contact=stf_alexandre) ou query (?contact=...)
    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash;
    const matchHash = hash.match(/contact=([a-zA-Z0-9_]+)/);
    const contactParam = urlParams.get("contact") || (matchHash ? matchHash[1] : null);

    if (contactParam && window.PELELEC_DATA.contacts.some(c => c.id === contactParam)) {
      this.activeContactId = contactParam;
      document.querySelector(".app-container").classList.add("chat-active");
    } else if (window.innerWidth > 900) {
      document.querySelector(".app-container").classList.add("chat-active");
    } else {
      document.querySelector(".app-container").classList.remove("chat-active");
    }

    this.setupContactView(this.activeContactId);
    this.bindEvents();
    window.ForensicManager.init();
    const input = document.getElementById('chatInput');
    input.disabled = true;
    input.placeholder = 'Acervo documental · somente leitura';
    document.getElementById('sendBtn').disabled = true;
    document.querySelectorAll('.input-actions button').forEach(btn => btn.disabled = true);
  },

  getActiveContact() {
    if (this.activeContactId === this.promotion.id) return this.promotion;
    return window.PELELEC_DATA.contacts.find(c => c.id === this.activeContactId);
  },

  bindEvents() {
    // Busca em tempo real
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        if (clearSearchBtn) {
          clearSearchBtn.style.display = this.searchQuery ? "block" : "none";
        }
        this.renderContacts();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        this.searchQuery = "";
        clearSearchBtn.style.display = "none";
        this.renderContacts();
      });
    }

    // Input de mensagem e envio interativo
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");

    if (chatInput && sendBtn) {
      const handleSend = () => this.sendMessage();
      sendBtn.addEventListener("click", handleSend);
      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
      });
    }

    // Botão Voltar no Mobile com resposta instantânea
    const backBtn = document.getElementById("backBtnMobile");
    if (backBtn) {
      const handleBack = (e) => {
        if (e) e.preventDefault();
        document.querySelector(".app-container").classList.remove("chat-active");
      };
      backBtn.addEventListener("click", handleBack);
      backBtn.addEventListener("touchend", handleBack);
    }

    // Delegação de toques rápidos na lista de contatos para Mobile
    const contactList = document.getElementById("contactList");
    if (contactList) {
      contactList.addEventListener("click", (e) => {
        const item = e.target.closest(".contact-item");
        if (!item) return;
        const contactId = item.dataset.id;
        if (contactId) {
          this.selectContact(contactId);
        }
      });
    }

    // Botão rápido de Ativar Perícia dentro do Chat no Mobile
    const quickForensicBtn = document.getElementById("quickForensicMobileBtn");
    if (quickForensicBtn) {
      quickForensicBtn.addEventListener("click", () => {
        window.ForensicManager.toggleForensicMode();
        const isActive = window.ForensicManager.isForensicModeActive;
        quickForensicBtn.style.background = isActive ? "#ffb74d" : "rgba(255, 183, 77, 0.15)";
        quickForensicBtn.style.color = isActive ? "#111" : "#ffb74d";
      });
    }

    // Alternador de tema Claro / Escuro
    const themeToggle = document.getElementById("themeToggleBtn");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => this.toggleTheme());
    }

    // Gaveta de detalhes do contato
    const chatHeaderLeft = document.getElementById("chatHeaderLeft");
    const closeDrawerBtn = document.getElementById("closeDrawerBtn");
    const sourceBtnHeader = document.getElementById("sourceBtnHeader");

    if (chatHeaderLeft) {
      chatHeaderLeft.addEventListener("click", () => this.toggleDetailDrawer(true));
    }

    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener("click", () => this.toggleDetailDrawer(false));
    }

    if (sourceBtnHeader) {
      sourceBtnHeader.addEventListener("click", () => {
        const contact = this.getActiveContact();
        if (contact) window.ForensicManager.openSourceModal(contact);
      });
    }
  },

  renderAvatar(contact) {
    if (contact && contact.photoUrl) {
      return `
        <img src="${contact.photoUrl}" alt="${contact.name}" class="avatar-img" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">
        <span class="avatar-fallback" style="display: none; width:100%; height:100%; align-items:center; justify-content:center;">${contact.avatarInitials}</span>
      `;
    }
    return contact ? contact.avatarInitials : "";
  },

  renderCategories() {
    const bar = document.getElementById("categoryFilterBar");
    if (!bar) return;

    bar.innerHTML = window.PELELEC_DATA.categories
      .map(cat => `
        <button class="filter-pill ${cat.id === this.activeCategory ? "active" : ""}" 
                onclick="PelelecApp.setCategory('${cat.id}')">
          ${cat.label}
        </button>
      `)
      .join("");
  },

  setCategory(catId) {
    this.activeCategory = catId;
    this.renderCategories();
    this.renderContacts();
  },

  renderContacts() {
    const list = document.getElementById("contactList");
    if (!list) return;

    let filtered = window.PELELEC_DATA.contacts;

    // Filtro por Categoria
    if (this.activeCategory !== "all") {
      filtered = filtered.filter(c => c.category === this.activeCategory);
    }

    // Filtro por Busca
    if (this.searchQuery) {
      filtered = filtered.filter(c => {
        const nameMatch = c.name.toLowerCase().includes(this.searchQuery);
        const roleMatch = c.role.toLowerCase().includes(this.searchQuery);
        const textMatch = c.messages.some(m =>
          (m.text && m.text.toLowerCase().includes(this.searchQuery)) ||
          (m.recoveredText && m.recoveredText.toLowerCase().includes(this.searchQuery)) ||
          (m.noteContent && m.noteContent.toLowerCase().includes(this.searchQuery))
        );
        return nameMatch || roleMatch || textMatch;
      });
    }

    if (filtered.length === 0) {
      list.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-secondary); font-size: 13px;">
          Nenhum contato ou mensagem encontrada para "<strong>${escapeHTML(this.searchQuery)}</strong>".
        </div>
      `;
      return;
    }

    list.innerHTML = filtered
      .map(contact => {
        const lastMsg = contact.messages[contact.messages.length - 1];
        let preview = "";
        if (lastMsg) {
          if (lastMsg.isDeleted) {
            preview = "🚫 Esta mensagem foi apagada";
          } else if (lastMsg.isViewOnce) {
            preview = "📷 Foto (Visualização única)";
          } else if (lastMsg.type === "audio") {
            preview = `🎤 Mensagem de voz (${lastMsg.audioDuration || "0:30"})`;
          } else if (lastMsg.mediaType === "image") {
            preview = `📷 ${lastMsg.mediaCaption || "Foto"}`;
          } else {
            preview = lastMsg.text || lastMsg.mediaCaption || "";
          }
        }

        const isActive = contact.id === this.activeContactId;

        return `
          <li class="contact-item ${isActive ? "active" : ""}" data-id="${contact.id}" onclick="PelelecApp.selectContact('${contact.id}')">
            <div class="contact-avatar" style="background-color: ${contact.avatarColor};">
              ${this.renderAvatar(contact)}
              ${contact.statusText === "online" ? '<span class="avatar-online-dot"></span>' : ""}
            </div>
            <div class="contact-content">
              <div class="contact-top-row">
                <span class="contact-name">${contact.name}</span>
                <span class="contact-time">${lastMsg ? lastMsg.time : ""}</span>
              </div>
              <div class="contact-bottom-row">
                <span class="contact-preview">${preview}</span>
                <div class="contact-badges">
                  ${contact.pinned ? '<span class="pin-icon">📌</span>' : ""}
                  ${contact.unreadCount ? `<span class="unread-badge">${contact.unreadCount}</span>` : ""}
                </div>
              </div>
            </div>
          </li>
        `;
      })
      .join("");

    // A divulgação só fica no fim da lista completa, nunca em resultados filtrados.
    if (this.activeCategory === 'all' && !this.searchQuery) {
      list.insertAdjacentHTML('beforeend', `<li class="contact-item promo-contact ${this.activeContactId === this.promotion.id ? 'active' : ''}" data-id="${this.promotion.id}">
        <button class="promo-contact-button" onclick="PelelecApp.selectContact('${this.promotion.id}'); event.stopPropagation()" aria-label="Abrir divulgação do Brasília Survivors">
          <span class="contact-avatar" style="background:#725000">🎮</span>
          <span class="contact-content"><span class="contact-top-row"><span class="contact-name">Brasília Survivors</span><span class="promo-label">DIVULGAÇÃO</span></span>
          <span class="contact-bottom-row"><span class="contact-preview">📷 Conheça os personagens e o jogo</span><span class="promo-open">VER ↗</span></span></span>
        </button></li>`);
    }
  },

  setupContactView(contactId) {
    this.activeContactId = contactId;
    const contact = this.getActiveContact();
    if (!contact) return;

    // Preenche cabeçalho do chat
    const headerAvatar = document.getElementById("chatHeaderAvatar");
    if (headerAvatar) {
      headerAvatar.style.backgroundColor = contact.avatarColor;
      headerAvatar.innerHTML = this.renderAvatar(contact);
    }

    const headerName = document.getElementById("chatHeaderName");
    if (headerName) headerName.textContent = contact.name;

    const headerStatus = document.getElementById("chatHeaderStatus");
    if (headerStatus) {
      headerStatus.textContent = contact.statusText === "online" ? "Online" : contact.lastSeen;
    }

    document.getElementById('sourceBtnHeader').hidden = !!contact.isPromotion;

    // Renderiza mensagens
    this.renderMessages(contact);

    // Atualiza painel de detalhes do contato
    this.updateDrawerContent(contact);
  },

  selectContact(contactId) {
    this.setupContactView(contactId);

    // Atualiza classes ativas na lista
    this.renderContacts();

    // Atualiza hash na URL
    try {
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", `#contact=${contactId}`);
      }
    } catch (e) {}

    // Ativa painel de chat no mobile (transição da lista para a conversa)
    document.querySelector(".app-container").classList.add("chat-active");
  },

  renderMessages(contact) {
    const container = document.getElementById("chatMessages");
    if (!container) return;

    if (contact.isPromotion) {
      container.innerHTML = this.renderPromotion();
      container.scrollTop = 0;
      return;
    }

    let html = `
      <div class="encryption-pill system-pill">
        <span>🔒</span>
        Acervo jornalístico — sem acesso ao aparelho. Retratos editoriais; não são avatares originais. Fontes e limites disponíveis em cada recorte.
      </div>
    `;

    let lastDate = "";

    contact.messages.forEach(msg => {
      if (msg.date && msg.date !== lastDate) {
        lastDate = msg.date;
        html += `<div class="system-pill">${msg.date}</div>`;
      }

      const isMe = msg.sender === "me";
      const rowClass = isMe ? "me" : "them";
      const isRecovered = window.ForensicManager.isForensicModeActive && msg.isDeleted;

      html += `
        <div class="message-row ${rowClass}" data-message-id="${msg.id}">
          <div class="message-bubble ${msg.isIconicQuote ? "iconic-quote" : ""} ${isRecovered ? "forensic-recovered" : ""}">
            ${msg.isIconicQuote ? '<span class="iconic-badge">⭐ Citação Histórica da CPMI</span>' : ""}
            ${this.renderMessageBody(msg, isRecovered)}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Rola para a mensagem mais recente
    setTimeout(() => {
      container.scrollTop = container.scrollHeight;
    }, 50);
  },

  renderPromotion() {
    return `<div class="system-pill">Divulgação · Brasília Survivors</div>
      <div class="message-row them"><div class="message-bubble promo-bubble"><div class="message-text">Terminou de explorar o acervo? Conheça Brasília Survivors: escolha seu personagem e entre na arena.</div></div></div>
      ${[
        ['characters.png', 'Escolha seu personagem', 'Seleção de personagens da V2 beta, com Biroliro selecionado.'],
        ['gameplay.png', 'A partida em ação', 'Biroliro na arena Resort Tayaya, com inimigos e um apoio ativo.']
      ].map(([file, title, alt]) => `<div class="message-row them"><div class="message-bubble promo-bubble"><figure class="promo-shot"><a href="assets/promo/${file}" target="_blank" rel="noopener noreferrer" aria-label="Ampliar: ${title}"><img src="assets/promo/${file}" width="1280" height="720" alt="${alt}" loading="lazy"></a><figcaption>${title}</figcaption></figure></div></div>`).join('')}
      <div class="message-row them"><div class="message-bubble promo-bubble"><div class="message-text">Pronto para jogar?</div><a class="game-play-cta-btn promo-chat-cta" href="https://www.brasiliasurvivors.com.br/" target="_blank" rel="noopener noreferrer">🕹️ JOGAR AGORA ↗</a><p class="promo-credit">Prints reais do site oficial · V2 beta · 22/09/2026.<br>Imagens: Brasília Survivors. Conteúdo promocional, fora do acervo documental.</p></div></div>`;
  },

  renderMessageBody(msg) {
    const labels = {quote:'Citação publicada',summary:'Resumo editorial',context:'Contexto',media:'Mídia documentada',pending:'Verificação pendente'};
    const sourceButtons = (msg.sources || []).map(id => `<button class="fact-check-pill" onclick="ForensicManager.openItemSource('${id}')">📰 ${escapeHTML(window.PELELEC_DATA.sources[id].outlet)} ↗</button>`).join('');
    return `<div class="forensic-badge-tag">${escapeHTML(labels[msg.editorialType])}${msg.excerpt?' · trecho':''}</div>
      ${msg.title?`<strong>${escapeHTML(msg.title)}</strong><br>`:''}
      ${msg.speaker?`<small>${escapeHTML(msg.speaker)}</small><br>`:''}
      <div class="message-text">${msg.editorialType==='quote'?'“':''}${escapeHTML(msg.text)}${msg.editorialType==='quote'?'”':''}</div>
      ${msg.mediaLink ? `<div class="media-bubble-card"><div class="media-caption-text"><a href="${escapeHTML(msg.mediaLink)}" target="_blank" rel="noopener noreferrer">${escapeHTML(msg.mediaLinkLabel || 'Ver na fonte ↗')}</a><br><small>${escapeHTML(msg.rightsNote || '')}</small></div></div>` : ''}
      <div class="message-meta"><span class="message-time">${escapeHTML(msg.time || 'Horário não informado')}</span></div>
      ${window.ForensicManager.isForensicModeActive?sourceButtons:''}`;
  },

  sendMessage() {
    // Acervo de leitura: nunca gerar respostas atribuídas a pessoas reais.
  },

  toggleDetailDrawer(open) {
    const drawer = document.getElementById("detailDrawer");
    if (drawer) {
      drawer.classList.toggle("open", open);
    }
  },

  updateDrawerContent(contact) {
    const drawerAvatar = document.getElementById("drawerAvatar");
    if (drawerAvatar) {
      drawerAvatar.style.backgroundColor = contact.avatarColor;
      drawerAvatar.innerHTML = this.renderAvatar(contact);
    }
    document.getElementById("drawerName").textContent = contact.name;
    document.getElementById("drawerRole").textContent = contact.role;
    const creditEl = document.getElementById("drawerPhotoCredit");
    if (creditEl) {
      if (contact.photoCredit) {
        creditEl.innerHTML = `📷 Retrato editorial: ${escapeHTML(contact.photoCredit)}<br><a href="${escapeHTML(contact.photo.source)}" target="_blank" rel="noopener noreferrer">Origem</a> · <a href="${escapeHTML(contact.photo.licenseUrl)}" target="_blank" rel="noopener noreferrer">Licença</a> · enquadramento circular`;
        creditEl.style.display = "block";
      } else {
        creditEl.style.display = "none";
      }
    }
    document.getElementById("drawerPhone").textContent = contact.phone;
    document.getElementById("drawerContext").textContent = contact.contextSummary;
    document.getElementById("drawerSourceHeadline").textContent = `"${contact.source.headline}"`;
    document.getElementById("drawerSourceOutlet").textContent = `${contact.source.outlet} • ${contact.source.date}`;
  },

  toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", nextTheme);

    const btn = document.getElementById("themeToggleBtn");
    if (btn) {
      btn.innerHTML = nextTheme === "dark" ? "🌙" : "☀️";
    }
  }
};

window.PelelecApp = PelelecApp;

document.addEventListener("DOMContentLoaded", () => {
  PelelecApp.init();
});
