/**
 * PelelecApp - Módulo Forense e Recuperação Cellebrite
 * Controla os recursos periciais, visualização de notas e laudos.
 */

const ForensicManager = {
  isForensicModeActive: false,

  init() {
    this.bindEvents();
  },

  bindEvents() {
    const forensicToggle = document.getElementById("toggleForensicMode");
    if (forensicToggle) {
      forensicToggle.addEventListener("click", () => this.toggleForensicMode());
    }

    const laudoBtn = document.getElementById("openLaudoBtn");
    if (laudoBtn) {
      laudoBtn.addEventListener("click", () => this.openLaudoModal());
    }

    // Fechar modais ao clicar no overlay ou no botão de fechar
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay || e.target.closest(".modal-close-btn")) {
          this.closeAllModals();
        }
      });
    });

    // Tecla Escape fecha modais
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeAllModals();
      }
    });
  },

  toggleForensicMode() {
    this.isForensicModeActive = !this.isForensicModeActive;
    const btn = document.getElementById("toggleForensicMode");
    if (btn) {
      btn.classList.toggle("active", this.isForensicModeActive);
      btn.innerHTML = this.isForensicModeActive
        ? `<span>🔍</span> Modo Perícia PF: <strong>ATIVO</strong>`
        : `<span>🕵️</span> Ativar Modo Perícia PF`;
    }

    // Se ativado, recupera automaticamente todas as mensagens apagadas
    document.querySelectorAll(".message-row").forEach(row => {
      const msgId = row.dataset.messageId;
      if (!msgId) return;

      const activeContact = window.PelelecApp.getActiveContact();
      if (!activeContact) return;

      const msg = activeContact.messages.find(m => m.id === msgId);
      if (msg && msg.isDeleted) {
        if (this.isForensicModeActive) {
          this.renderRecoveredMessage(row, msg);
        } else {
          this.revertToDeletedMessage(row, msg);
        }
      }
    });
  },

  recoverSingleMessage(btnElement, messageId) {
    const activeContact = window.PelelecApp.getActiveContact();
    if (!activeContact) return;

    const msg = activeContact.messages.find(m => m.id === messageId);
    if (!msg || !msg.isDeleted) return;

    const row = btnElement.closest(".message-row");
    this.renderRecoveredMessage(row, msg);
  },

  renderRecoveredMessage(row, msg) {
    const bubble = row.querySelector(".message-bubble");
    if (!bubble) return;

    bubble.classList.add("forensic-recovered");
    bubble.innerHTML = `
      <div class="forensic-stamp">
        <span>⚡</span> Recuperado via Cellebrite / PF
      </div>
      <div class="message-text">
        ${msg.recoveredText}
      </div>
      <div class="forensic-badge-tag">
        Fonte: ${msg.forensicSource || "Tabela ZWAMESSAGE / SQLite Cache"}
      </div>
      <div class="message-meta">
        <span class="message-time">${msg.time}</span>
        <span class="ticks-blue">✓✓</span>
      </div>
    `;

    if (msg.factCheckNote) {
      const factPill = document.createElement("div");
      factPill.className = "fact-check-pill";
      factPill.innerHTML = `<span>📌 Nota Pericial: ${msg.factCheckNote}</span>`;
      bubble.appendChild(factPill);
    }
  },

  revertToDeletedMessage(row, msg) {
    const bubble = row.querySelector(".message-bubble");
    if (!bubble) return;

    bubble.classList.remove("forensic-recovered");
    bubble.innerHTML = `
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
  },

  openNoteModal(title, date, content, forensicTag, factCheck) {
    const modal = document.getElementById("noteModal");
    if (!modal) return;

    document.getElementById("noteModalTitle").textContent = title || "Rascunho de Nota";
    document.getElementById("noteModalDate").textContent = `${date} • Salvo no iPhone 16 Pro Max`;
    document.getElementById("noteModalBody").textContent = content || "";
    document.getElementById("noteModalForensic").innerHTML = `
      <strong>📌 Laudo Pericial INC/DITEC nº 284/2026:</strong><br>
      ${forensicTag || "Arquivo recuperado da pasta DCIM / Apple Notes Cache."}<br>
      <small style="color: #bbb; display:block; margin-top:4px;">${factCheck || ""}</small>
    `;

    modal.classList.add("open");
  },

  openSourceModal(contact) {
    const modal = document.getElementById("sourceModal");
    if (!modal) return;

    document.getElementById("sourceModalContact").textContent = `${contact.name} (${contact.role})`;
    document.getElementById("sourceModalOutlet").textContent = contact.source.outlet;
    document.getElementById("sourceModalDate").textContent = contact.source.date;
    document.getElementById("sourceModalHeadline").textContent = `"${contact.source.headline}"`;
    document.getElementById("sourceModalSummary").textContent = contact.contextSummary;

    const linkEl = document.getElementById("sourceModalLink");
    if (linkEl) {
      linkEl.href = contact.source.link;
    }

    modal.classList.add("open");
  },

  openLaudoModal() {
    const modal = document.getElementById("laudoModal");
    if (!modal) return;

    const report = window.PELELEC_DATA.forensicReport;
    document.getElementById("laudoTitle").textContent = report.title;
    document.getElementById("laudoOperation").textContent = `${report.operation} - ${report.courtCase}`;
    document.getElementById("laudoHardware").textContent = `${report.hardware} (${report.storage})`;

    const statsGrid = document.getElementById("laudoStatsGrid");
    statsGrid.innerHTML = `
      <div class="stat-box">
        <div class="stat-value">${report.statistics.totalMessagesRecovered}</div>
        <div class="stat-label">Mensagens Analisadas</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${report.statistics.deletedMessagesRestored}</div>
        <div class="stat-label">Mensagens Apagadas Restauradas</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${report.statistics.viewOnceImagesRecovered}</div>
        <div class="stat-label">Prints de Visualização Única</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${report.statistics.sensitiveContactsIdentified}</div>
        <div class="stat-label">Autoridades e Interlocutores</div>
      </div>
    `;

    const methodsList = document.getElementById("laudoMethodsList");
    methodsList.innerHTML = report.forensicMethodology
      .map(item => `<li>${item}</li>`)
      .join("");

    modal.classList.add("open");
  },

  closeAllModals() {
    document.querySelectorAll(".modal-overlay").forEach(modal => {
      modal.classList.remove("open");
    });
  }
};

window.ForensicManager = ForensicManager;
