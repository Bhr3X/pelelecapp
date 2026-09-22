/**
 * PelelecApp - Controlador Principal da Aplicação
 * Gerencia a renderização da interface, navegação entre conversas,
 * reprodução simulada de áudio, busca e envio de mensagens.
 */

const PelelecApp = {
  activeContactId: "martha",
  activeCategory: "all",
  searchQuery: "",
  activeAudioRow: null,
  audioInterval: null,

  init() {
    this.renderCategories();
    this.renderContacts();
    this.setupContactView(this.activeContactId);

    // No desktop (> 900px), mantém o chat ativo lado a lado
    // No mobile (<= 900px), abre primeiro na lista de conversas estilo WhatsApp
    if (window.innerWidth > 900) {
      document.querySelector(".app-container").classList.add("chat-active");
    } else {
      document.querySelector(".app-container").classList.remove("chat-active");
    }

    this.bindEvents();
    window.ForensicManager.init();
  },

  getActiveContact() {
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
          Nenhum contato ou mensagem encontrada para "<strong>${this.searchQuery}</strong>".
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
          } else {
            preview = lastMsg.text || lastMsg.mediaCaption || "";
          }
        }

        const isActive = contact.id === this.activeContactId;

        return `
          <li class="contact-item ${isActive ? "active" : ""}" data-id="${contact.id}" onclick="PelelecApp.selectContact('${contact.id}')">
            <div class="contact-avatar" style="background-color: ${contact.avatarColor};">
              ${contact.avatarInitials}
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
  },

  setupContactView(contactId) {
    this.activeContactId = contactId;
    const contact = this.getActiveContact();
    if (!contact) return;

    // Preenche cabeçalho do chat
    const headerAvatar = document.getElementById("chatHeaderAvatar");
    if (headerAvatar) {
      headerAvatar.style.backgroundColor = contact.avatarColor;
      headerAvatar.textContent = contact.avatarInitials;
    }

    const headerName = document.getElementById("chatHeaderName");
    if (headerName) headerName.textContent = contact.name;

    const headerStatus = document.getElementById("chatHeaderStatus");
    if (headerStatus) {
      headerStatus.textContent = contact.statusText === "online" ? "Online" : contact.lastSeen;
    }

    // Renderiza mensagens
    this.renderMessages(contact);

    // Atualiza painel de detalhes do contato
    this.updateDrawerContent(contact);
  },

  selectContact(contactId) {
    this.setupContactView(contactId);

    // Atualiza classes ativas na lista
    this.renderContacts();

    // Ativa painel de chat no mobile (transição da lista para a conversa)
    document.querySelector(".app-container").classList.add("chat-active");
  },

  renderMessages(contact) {
    const container = document.getElementById("chatMessages");
    if (!container) return;

    let html = `
      <div class="encryption-pill system-pill">
        <span>🔒</span>
        As mensagens deste aparelho estavam protegidas por criptografia de ponta a ponta até a apreensão pela Polícia Federal (Cellebrite UFED v8.2).
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

  renderMessageBody(msg, isRecovered) {
    // 1. Mensagem Apagada
    if (msg.isDeleted) {
      if (isRecovered) {
        return `
          <div class="forensic-stamp"><span>⚡</span> Recuperado via Cellebrite / PF</div>
          <div class="message-text">${msg.recoveredText}</div>
          <div class="forensic-badge-tag">Fonte: ${msg.forensicSource || "SQLite Unallocated Blocks"}</div>
          <div class="message-meta">
            <span class="message-time">${msg.time}</span>
            <span class="ticks-blue">✓✓</span>
          </div>
        `;
      } else {
        return `
          <div class="deleted-message-box">
            <span class="deleted-icon">🚫</span>
            <span>Esta mensagem foi apagada</span>
          </div>
          <button class="recover-btn" onclick="ForensicManager.recoverSingleMessage(this, '${msg.id}')">
            <span>🔍</span> Recuperar via Perícia PF
          </button>
          <div class="message-meta">
            <span class="message-time">${msg.time}</span>
            <span class="ticks-blue">✓✓</span>
          </div>
        `;
      }
    }

    // 2. Visualização Única (1x) - Bloco de Notas
    if (msg.isViewOnce) {
      const escapedTitle = (msg.noteTitle || "").replace(/'/g, "\\'");
      const escapedContent = (msg.noteContent || "").replace(/'/g, "\\'").replace(/\n/g, " ");
      const escapedTag = (msg.forensicTag || "").replace(/'/g, "\\'");
      const escapedFact = (msg.factCheckNote || "").replace(/'/g, "\\'");

      return `
        <div class="view-once-box" onclick="ForensicManager.openNoteModal('${escapedTitle}', '${msg.date}', '${escapedContent}', '${escapedTag}', '${escapedFact}')">
          <div class="view-once-badge">1</div>
          <div class="view-once-info">
            <span class="view-once-title">Foto (Visualização única)</span>
            <span class="view-once-hint">📄 Print do Bloco de Notas (Clique para abrir)</span>
          </div>
        </div>
        ${msg.forensicTag ? `<div class="forensic-badge-tag">${msg.forensicTag}</div>` : ""}
        <div class="message-meta">
          <span class="message-time">${msg.time}</span>
          <span class="ticks-blue">✓✓</span>
        </div>
      `;
    }

    // 3. Áudio de Voz
    if (msg.type === "audio") {
      const bars = [14, 22, 10, 18, 24, 16, 8, 20, 26, 12, 18, 24, 14, 8, 16, 22, 18, 10];
      const barsHtml = bars.map(h => `<div class="wave-bar" style="height: ${h}px;"></div>`).join("");

      return `
        <div class="audio-player-wrapper" id="audio-${msg.id}">
          <button class="audio-play-btn" onclick="PelelecApp.toggleAudio('${msg.id}')">▶</button>
          <div class="audio-waveform-container">
            <div class="audio-waveform">${barsHtml}</div>
            <div class="audio-meta-row">
              <span class="audio-timer">${msg.audioDuration || "0:30"}</span>
              <button class="transcript-toggle-btn" onclick="PelelecApp.toggleTranscript('${msg.id}')">Transcrever áudio</button>
            </div>
          </div>
        </div>
        <div class="audio-transcript-box" id="transcript-${msg.id}">
          <strong>🎙️ Transcrição Pericial:</strong><br>
          "${msg.audioTranscript}"
        </div>
        <div class="message-meta">
          <span class="message-time">${msg.time}</span>
          <span class="ticks-blue">✓✓</span>
        </div>
      `;
    }

    // 4. Mídia (Imagem/Gráfico)
    let mediaHtml = "";
    if (msg.mediaType === "image") {
      let graphicContent = "";
      if (msg.mediaPreset === "dubai") {
        graphicContent = `
          <div style="font-size: 30px; margin-bottom: 6px;">🏨 ✈️</div>
          <div style="font-weight: 700; font-size: 14px;">Dubai Luxury Suite</div>
          <div style="font-size: 11px; opacity: 0.85;">Foto anexada em viagem internacional</div>
        `;
      } else if (msg.mediaPreset === "epol") {
        graphicContent = `
          <div style="font-size: 24px; margin-bottom: 6px;">🛡️ SISTEMA ePol / MPF</div>
          <div style="font-weight: 700; font-size: 13px; color: #4fc3f7;">AUTENTICAÇÃO SIGILOSA CONFIRMADA</div>
          <div style="font-size: 10px; color: #90a4ae;">Terminal Acesso Restrito: PF-SR-SP</div>
        `;
      } else if (msg.mediaPreset === "arenamrv") {
        graphicContent = `
          <div style="font-size: 30px; margin-bottom: 6px;">⚽ 🐔</div>
          <div style="font-weight: 700; font-size: 14px;">CAMAROTE MASTER - ARENA MRV</div>
          <div style="font-size: 11px; opacity: 0.85;">Belo Horizonte • Galo SAF</div>
        `;
      }

      mediaHtml = `
        <div class="media-bubble-card">
          <div class="media-thumbnail-graphic ${msg.mediaPreset}">
            ${graphicContent}
          </div>
          <div class="media-caption-text">${msg.mediaCaption}</div>
        </div>
      `;
    }

    // 5. Mensagem de Texto Comum
    return `
      ${mediaHtml}
      ${msg.text ? `<div class="message-text">${msg.text}</div>` : ""}
      ${msg.forensicTag ? `<div class="forensic-badge-tag">${msg.forensicTag}</div>` : ""}
      ${msg.factCheckNote ? `
        <div class="fact-check-pill" onclick="ForensicManager.openSourceModal(PelelecApp.getActiveContact())">
          <span>📰 Apuração Jornalística: ${msg.factCheckNote}</span>
        </div>
      ` : ""}
      <div class="message-meta">
        <span class="message-time">${msg.time}</span>
        <span class="ticks-blue">✓✓</span>
      </div>
    `;
  },

  toggleAudio(msgId) {
    const wrapper = document.getElementById(`audio-${msgId}`);
    if (!wrapper) return;

    const btn = wrapper.querySelector(".audio-play-btn");

    if (this.activeAudioRow === msgId) {
      // Pausar
      clearInterval(this.audioInterval);
      this.activeAudioRow = null;
      wrapper.classList.remove("playing");
      btn.textContent = "▶";
    } else {
      // Tocar
      if (this.activeAudioRow) {
        const prev = document.getElementById(`audio-${this.activeAudioRow}`);
        if (prev) {
          prev.classList.remove("playing");
          prev.querySelector(".audio-play-btn").textContent = "▶";
        }
        clearInterval(this.audioInterval);
      }

      this.activeAudioRow = msgId;
      wrapper.classList.add("playing");
      btn.textContent = "⏸";

      // Simulação de reprodução por 5 segundos
      this.audioInterval = setTimeout(() => {
        wrapper.classList.remove("playing");
        btn.textContent = "▶";
        this.activeAudioRow = null;
      }, 5000);
    }
  },

  toggleTranscript(msgId) {
    const box = document.getElementById(`transcript-${msgId}`);
    if (box) {
      box.classList.toggle("open");
    }
  },

  sendMessage() {
    const input = document.getElementById("chatInput");
    if (!input || !input.value.trim()) return;

    const text = input.value.trim();
    input.value = "";

    const contact = this.getActiveContact();
    if (!contact) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    const newMsg = {
      id: `custom_${Date.now()}`,
      sender: "me",
      time: timeStr,
      text: text,
      status: "read"
    };

    contact.messages.push(newMsg);
    this.renderMessages(contact);

    // Resposta automática simulada do interlocutor após 1.2s
    setTimeout(() => {
      let replyText = "";
      if (contact.id === "martha") {
        replyText = "Amol da minha vida! Você tá sempre ocupado salvando o banco, mas a peleleca tá te esperando! ❤️🏖️";
      } else if (contact.id === "turma") {
        replyText = "Positivo, chefe. O alvo já está com monitoramento visual ativado. Qualquer ordem sua executamos imediatamente.";
      } else if (contact.id === "stf_alexandre") {
        replyText = "Recebido. Tratar pessoalmente conforme alinhado no encontro reservado.";
      } else if (contact.id === "henrique_pai") {
        replyText = "Cuidado com o que escreve aqui no WhatsApp, Daniel. Passa em casa pra gente alinhar a questão do Panamá.";
      } else if (contact.id === "paulo_brb") {
        replyText = "Perfeito, Daniel. A diretoria vai pautar a operação na reunião extraordinária desta semana em Brasília.";
      } else if (contact.id === "augusto_master") {
        replyText = "Show de bola! As plataformas já tão vendendo os novos lotes com spread de 140% do CDI.";
      } else if (contact.id === "rubens_menin") {
        replyText = "Combinado! O Galo Forte e Vingador segue firme. Nos vemos na Arena MRV domingo!";
      } else if (contact.id === "arthur_lira") {
        replyText = "Perfeito, Daniel. A liderança da bancada está orientada e mantemos o alinhamento político em Brasília.";
      } else if (contact.id === "escritorio_adv") {
        replyText = "Recebido, Dr. Daniel. A equipe tributária e regulatória já protocolou as manifestações técnicas cabíveis.";
      } else if (contact.id === "bacen_operacoes") {
        replyText = "Perfeito, Daniel. O processo técnico já está tramitando na diretoria colegiada com prioridade.";
      } else if (contact.id === "projeto_dv") {
        replyText = "Entendido, chefe. Os vídeos do lote 2 já estão em fase final de edição e sobem hoje às 19h nas redes.";
      } else if (contact.id === "desembargador_fasano") {
        replyText = "Perfeito, Daniel. Agradecemos a atenção de sempre no Fasano. Nos vemos em Brasília na próxima semana.";
      } else if (contact.id === "piloto_jatinho") {
        replyText = "Entendido, comandante. Todos os sistemas de solo da aeronave estão em prontidão operacional.";
      } else if (contact.id === "claudio_castro") {
        replyText = "Perfeito, Daniel! As agendas no Guanabara e os cronogramas do Rioprevidência estão alinhados.";
      } else {
        replyText = "Mensagem recebida e registrada pelo terminal pericial.";
      }

      const replyMsg = {
        id: `reply_${Date.now()}`,
        sender: "them",
        time: timeStr,
        text: replyText,
        status: "read"
      };

      contact.messages.push(replyMsg);
      this.renderMessages(contact);
    }, 1200);
  },

  toggleDetailDrawer(open) {
    const drawer = document.getElementById("detailDrawer");
    if (drawer) {
      drawer.classList.toggle("open", open);
    }
  },

  updateDrawerContent(contact) {
    document.getElementById("drawerAvatar").style.backgroundColor = contact.avatarColor;
    document.getElementById("drawerAvatar").textContent = contact.avatarInitials;
    document.getElementById("drawerName").textContent = contact.name;
    document.getElementById("drawerRole").textContent = contact.role;
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
