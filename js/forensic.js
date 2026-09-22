/**
 * PelelecApp - Módulo Forense e Recuperação Cellebrite
 * Controla os recursos periciais, visualização de notas e laudos.
 */

const ForensicManager = {
  isForensicModeActive: true,

  init() {
    this.bindEvents();
    this.syncMode();
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

  syncMode() {
    const active = this.isForensicModeActive;
    const btn = document.getElementById('toggleForensicMode');
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
    btn.innerHTML = active ? '<span>🔍</span> Perícia: <strong>ATIVA</strong>' : '<span>🕵️</span> Modo Perícia';
    btn.title = 'Exibir notas e fontes documentais; não recupera arquivos';
    const quick = document.getElementById('quickForensicMobileBtn');
    if (quick) { quick.setAttribute('aria-pressed', String(active)); quick.style.background = active ? '#ffb74d' : 'rgba(255,183,77,.15)'; quick.style.color = active ? '#111' : '#ffb74d'; }
  },
  toggleForensicMode() {
    this.isForensicModeActive = !this.isForensicModeActive;
    this.syncMode();
    window.PelelecApp.renderMessages(window.PelelecApp.getActiveContact());
  },
  openItemSource(id) {
    const s = window.PELELEC_DATA.sources[id];
    if (!s) return;
    this.openSourceModal({ name:window.PelelecApp.getActiveContact().name, role:'Fonte do registro', contextSummary:s.note || 'Consulte a reportagem completa e o contraponto dos citados.', source:{outlet:s.outlet,date:s.date,headline:s.title,link:s.url}});
  },

  openSourceModal(contact) {
    const modal = document.getElementById("sourceModal");
    if (!modal) return;

    document.getElementById("sourceModalContact").textContent = `${contact.name} (${contact.role})`;
    document.getElementById("sourceModalOutlet").textContent = contact.source.outlet;
    document.getElementById("sourceModalDate").textContent = contact.source.date;
    document.getElementById("sourceModalHeadline").textContent = `"${contact.source.headline}"`;
    document.getElementById("sourceModalSummary").textContent = contact.contextSummary;
    const counterpart = contact.responseSources || [];
    if (counterpart.length) document.getElementById('sourceModalSummary').innerHTML += '<br><br>Contexto e contraponto: ' + counterpart.map(id => { const source = window.PELELEC_DATA.sources[id]; return `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.title)}</a>`; }).join(' · ');

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
        <div class="stat-label">Cartões editoriais</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${report.statistics.deletedMessagesRestored}</div>
        <div class="stat-label">Recuperações pelo app</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${report.statistics.viewOnceImagesRecovered}</div>
        <div class="stat-label">Arquivos extraídos pelo app</div>
      </div>
      <div class="stat-box">
        <div class="stat-value">${report.statistics.sensitiveContactsIdentified}</div>
        <div class="stat-label">Conversas na lista</div>
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
