/**
 * Main Application Controller - E-CV & Portfolio Hub
 * Muhammad Iqbal Ramdhani, Nida Fuadia, Viola Amelia
 * 1 Joint Project: SIA-BINATAMA (Presensi Guru SMK Binatama)
 * Pure Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    activePersona: 'iqbal', // 'iqbal' | 'nida' | 'viola'
    activeContribTab: 'iqbal',
    activeTechFilter: 'all',
    activeTimelineTab: 'experience',
    theme: localStorage.getItem('theme') || 'dark'
  };

  // Color mappings per persona
  const PERSONA_COLORS = {
    iqbal: { accent: '#00d2ff', glow: 'rgba(0, 210, 255, 0.28)' },
    nida: { accent: '#f472b6', glow: 'rgba(244, 114, 182, 0.28)' },
    viola: { accent: '#34d399', glow: 'rgba(52, 211, 153, 0.28)' }
  };

  // Cache DOM Elements
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const personaTabs = document.querySelectorAll('.persona-tab');
  const dockItems = document.querySelectorAll('.dock-item');
  const heroContainer = document.getElementById('heroContainer');
  const jointProjectSection = document.getElementById('jointProjectSection');
  const techStackSection = document.getElementById('techStackSection');
  const projectsSection = document.getElementById('projectsSection');
  const timelineSection = document.getElementById('timelineSection');
  const certsSection = document.getElementById('certsSection');
  const toastContainer = document.getElementById('toastContainer');

  // Modals
  const caseStudyModal = document.getElementById('caseStudyModal');
  const ecvModal = document.getElementById('ecvModal');
  const contactModal = document.getElementById('contactModal');

  // 1. Initialize Theme
  applyTheme(state.theme);
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', state.theme);
      applyTheme(state.theme);
      if (window.soundFx) window.soundFx.playSwitch();
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const sunIcon = document.getElementById('themeSunIcon');
    const moonIcon = document.getElementById('themeMoonIcon');
    if (sunIcon && moonIcon) {
      if (theme === 'light') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    }
  }

  // 2. Sound Toggle
  if (soundToggleBtn) {
    updateSoundBtnState();
    soundToggleBtn.addEventListener('click', () => {
      if (window.soundFx) {
        const isEnabled = window.soundFx.toggle();
        updateSoundBtnState(isEnabled);
        showToast(isEnabled ? 'Sound effects enabled 🔔' : 'Sound muted 🔕');
      }
    });
  }

  function updateSoundBtnState(enabled) {
    const isMuted = enabled !== undefined ? !enabled : !window.soundFx.enabled;
    const soundIcon = document.getElementById('soundIcon');
    if (soundIcon) {
      soundIcon.style.opacity = isMuted ? '0.5' : '1';
    }
  }

  // 3. Routing & Hash Handling
  function initRouting() {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['iqbal', 'nida', 'viola'].includes(hash)) {
        switchPersona(hash, false);
      } else {
        switchPersona('iqbal', false);
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
  }

  // 4. Persona Switching Logic
  function switchPersona(personaId, updateHash = true) {
    if (!['iqbal', 'nida', 'viola'].includes(personaId)) personaId = 'iqbal';
    state.activePersona = personaId;

    if (updateHash) {
      window.location.hash = personaId;
    }

    if (window.soundFx) window.soundFx.playClick();

    // Update Theme Accent Variables
    const color = PERSONA_COLORS[personaId];
    document.documentElement.style.setProperty('--active-accent', color.accent);
    document.documentElement.style.setProperty('--active-glow', color.glow);

    // Update Top Switcher Tabs
    personaTabs.forEach(tab => {
      tab.classList.remove('active', 'tab-iqbal', 'tab-nida', 'tab-viola');
      if (tab.dataset.persona === personaId) {
        tab.classList.add('active', `tab-${personaId}`);
      }
    });

    // Update Bottom Dock
    dockItems.forEach(item => {
      if (item.dataset.persona) {
        item.classList.toggle('active', item.dataset.persona === personaId);
      }
    });

    // Adjust active timeline tab if current persona doesn't have work experience
    const targetMember = PORTFOLIO_DATA.members[personaId];
    if (targetMember && (!targetMember.experience || targetMember.experience.length === 0)) {
      if (state.activeTimelineTab === 'experience') {
        state.activeTimelineTab = 'education';
      }
    }

    // Re-render Components
    renderHero(personaId);
    renderJointProject();
    renderTechStack(personaId);
    renderProjects(personaId);
    renderTimeline(personaId);
    renderCertificates(personaId);

    // Smooth Scroll to Top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Counters
    initCounters();
  }

  // Persona Switcher Event Listeners
  personaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const p = tab.dataset.persona;
      if (p) switchPersona(p);
    });
  });

  dockItems.forEach(item => {
    item.addEventListener('click', () => {
      if (item.dataset.persona) {
        switchPersona(item.dataset.persona);
      }
    });
  });

  // 5. Render Hero Profile Section
  function renderHero(personaId) {
    if (!heroContainer) return;
    const member = PORTFOLIO_DATA.members[personaId];

    heroContainer.innerHTML = `
      <div class="hero-grid view-enter">
        <div class="hero-content">
          <div class="hero-status-pill">
            <span class="status-indicator"></span>
            <span>${member.status}</span>
          </div>
          <h1 class="hero-title">
            Halo, Saya <span class="name-highlight">${member.name}</span>
          </h1>
          <h2 class="hero-subtitle">${member.role}</h2>
          <p class="hero-bio">${member.bio}</p>
          <div class="hero-actions">
            <button class="btn-primary" id="openEcvBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              Lihat / Cetak E-CV
            </button>
            <button class="btn-secondary" id="scrollToJointBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Project SIA-Binatama
            </button>
            <button class="btn-secondary" id="heroHireBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Hubungi ${member.nickname}
            </button>
            <button class="btn-secondary" id="copyEmailBtn" data-email="${member.email}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Salin Email
            </button>
          </div>
          <div class="hero-metrics-row">
            ${member.stats.map(m => `
              <div class="metric-item">
                <div class="metric-number">
                  <span class="counter-number" data-target="${m.value}" data-display="${m.display || ''}">${m.display || m.value}</span>
                  <span class="metric-suffix">${m.suffix}</span>
                </div>
                <span class="metric-label">${m.label}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Hero Portrait Card with 3D Tilt -->
        <div class="hero-portrait-card spotlight-card" id="heroPortraitCard">
          <div class="portrait-glow-border"></div>
          <div class="portrait-img-box">
            <img src="${member.avatar}" alt="${member.name}" class="portrait-img">
            <div class="portrait-badge-overlay">
              <div class="portrait-person-info">
                <span class="portrait-person-name">${member.name}</span>
                <span class="portrait-person-role">${member.location}</span>
              </div>
              <div class="portrait-socials">
                <a href="${member.github}" target="_blank" rel="noopener noreferrer" class="social-mini-btn" title="GitHub">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="social-mini-btn" title="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    setupHeroListeners();
    init3DTilt();
  }

  function setupHeroListeners() {
    const scrollToJointBtn = document.getElementById('scrollToJointBtn');
    if (scrollToJointBtn) {
      scrollToJointBtn.addEventListener('click', () => {
        document.getElementById('jointProjectSection').scrollIntoView({ behavior: 'smooth' });
      });
    }

    const openEcvBtn = document.getElementById('openEcvBtn');
    if (openEcvBtn) {
      openEcvBtn.addEventListener('click', () => openEcvModal(state.activePersona));
    }

    const heroHireBtn = document.getElementById('heroHireBtn');
    if (heroHireBtn) {
      heroHireBtn.addEventListener('click', () => openContactModal(state.activePersona));
    }

    const copyEmailBtn = document.getElementById('copyEmailBtn');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        const email = copyEmailBtn.dataset.email;
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Email berhasil disalin: ${email} 📋`);
          if (window.soundFx) window.soundFx.playSuccess();
        });
      });
    }
  }

  // 6. Render Joint Project Section: SIA-BINATAMA
  function renderJointProject() {
    if (!jointProjectSection) return;
    const joint = PORTFOLIO_DATA.jointProject;
    const currentContrib = joint.contributions[state.activeContribTab];

    jointProjectSection.innerHTML = `
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            1 Project Bareng Ber-3
          </div>
          <h2 class="section-title">SIA-BINATAMA</h2>
          <p class="section-desc">Sistem Informasi Akademik & Presensi Guru di Sekolah SMK Binatama yang dirancang dan dikembangkan bersama oleh Muhammad Iqbal, Nida Fuadia, dan Viola Amelia.</p>
        </div>

        <div class="joint-project-card spotlight-card">
          <div class="joint-card-header">
            <div class="joint-header-left">
              <span class="joint-flag-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                ${joint.badge} • ${joint.date}
              </span>
              <h3 class="joint-title">${joint.title}</h3>
              <div class="joint-subtitle">${joint.subtitle}</div>
              <p class="joint-summary">${joint.summary}</p>
            </div>
            <div class="joint-actions-group">
              <a href="${joint.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                Repository Proyek
              </a>
              <button class="btn-primary" onclick="document.getElementById('teacherAttendanceDemo').scrollIntoView({behavior:'smooth'});">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                Uji Simulasi Presensi
              </button>
            </div>
          </div>

          <!-- Project Stats Bento Row -->
          <div class="joint-stats-grid">
            ${joint.stats.map(s => `
              <div class="joint-stat-box">
                <div class="joint-stat-val">${s.value}</div>
                <div class="joint-stat-lbl">${s.label}</div>
              </div>
            `).join('')}
          </div>

          <!-- Architecture Flow Diagram for SMK Binatama -->
          <div style="margin: 2.5rem 0; padding: 1.5rem; background: rgba(0,0,0,0.35); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem; display:flex; justify-content:space-between; align-items:center;">
              <span>TOPOLOGI ARSITEKTUR PRESENSI GURU • SMK BINATAMA</span>
              <span style="color:var(--emerald-primary);">● Geofence Active (Radius 50m)</span>
            </div>
            <svg viewBox="0 0 900 160" width="100%" height="auto" style="overflow:visible;">
              <defs>
                <linearGradient id="gradFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#f472b6"/>
                  <stop offset="50%" stop-color="#00f0ff"/>
                  <stop offset="100%" stop-color="#34d399"/>
                </linearGradient>
              </defs>
              <line x1="160" y1="80" x2="310" y2="80" stroke="url(#gradFlow)" stroke-width="2" stroke-dasharray="6,4"/>
              <line x1="450" y1="80" x2="600" y2="80" stroke="url(#gradFlow)" stroke-width="2" stroke-dasharray="6,4"/>
              <line x1="740" y1="80" x2="840" y2="80" stroke="url(#gradFlow)" stroke-width="2" stroke-dasharray="6,4"/>

              <!-- Node 1: Nida's QA & Test Automation -->
              <g transform="translate(20, 35)">
                <rect width="140" height="90" rx="14" fill="#0f172a" stroke="#f472b6" stroke-width="1.5"/>
                <text x="70" y="38" fill="#f472b6" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">Nida Fuadia</text>
                <text x="70" y="58" fill="#f8fafc" font-family="JetBrains Mono" font-size="11" text-anchor="middle">QA &amp; Tester</text>
                <text x="70" y="74" fill="#94a3b8" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Stress &amp; Geofence Test</text>
              </g>

              <!-- Node 2: Iqbal's Fullstack & DB -->
              <g transform="translate(310, 35)">
                <rect width="140" height="90" rx="14" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5"/>
                <text x="70" y="38" fill="#00f0ff" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">M. Iqbal</text>
                <text x="70" y="58" fill="#f8fafc" font-family="JetBrains Mono" font-size="11" text-anchor="middle">Fullstack &amp; Database</text>
                <text x="70" y="74" fill="#94a3b8" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Haversine API &amp; DB Engine</text>
              </g>

              <!-- Node 3: Viola's Project Management (PM) -->
              <g transform="translate(600, 35)">
                <rect width="140" height="90" rx="14" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
                <text x="70" y="38" fill="#34d399" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">Viola Amelia</text>
                <text x="70" y="58" fill="#f8fafc" font-family="JetBrains Mono" font-size="11" text-anchor="middle">Project Manager (PM)</text>
                <text x="70" y="74" fill="#94a3b8" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Scrum Sprint &amp; Stakeholder</text>
              </g>

              <!-- Output Node: Server SMK Binatama -->
              <g transform="translate(840, 50)">
                <circle cx="30" cy="30" r="26" fill="#1e293b" stroke="#00f0ff" stroke-width="1.5"/>
                <text x="30" y="34" fill="#00f0ff" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">SMK</text>
              </g>
            </svg>
          </div>

          <!-- Team Contribution Tabs -->
          <div class="contribution-section">
            <h4 class="contribution-heading">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Pembagian Peran &amp; Rekayasa Sistem di SIA-BINATAMA
            </h4>
            <p style="font-size:0.92rem; color:var(--text-muted);">Pilih salah satu personil untuk melihat kontribusi teknis spesifik &amp; cuplikan kode implementasi.</p>

            <div class="contribution-nav">
              <button class="contrib-tab-btn ${state.activeContribTab === 'iqbal' ? 'active' : ''}" data-member="iqbal">
                <img src="${PORTFOLIO_DATA.members.iqbal.avatar}" alt="Iqbal" class="contrib-tab-avatar">
                <span>Muhammad Iqbal (Fullstack &amp; Database)</span>
              </button>
              <button class="contrib-tab-btn ${state.activeContribTab === 'nida' ? 'active' : ''}" data-member="nida">
                <img src="${PORTFOLIO_DATA.members.nida.avatar}" alt="Nida" class="contrib-tab-avatar">
                <span>Nida Fuadia (Quality Assurance &amp; Tester)</span>
              </button>
              <button class="contrib-tab-btn ${state.activeContribTab === 'viola' ? 'active' : ''}" data-member="viola">
                <img src="${PORTFOLIO_DATA.members.viola.avatar}" alt="Viola" class="contrib-tab-avatar">
                <span>Viola Amelia (Project Manager &amp; Scrum)</span>
              </button>
            </div>

            <!-- Active Contribution Panel -->
            <div class="contrib-panel view-enter">
              <div class="contrib-info-col">
                <h5 class="contrib-role-title">${currentContrib.role}</h5>
                <div class="contrib-role-tagline">// ${currentContrib.tagline}</div>
                <ul class="contrib-tasks-list">
                  ${currentContrib.tasks.map(t => `
                    <li class="contrib-task-item">
                      <span class="task-bullet">▹</span>
                      <span>${t}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Code Snippet Window -->
              <div class="code-mockup-window">
                <div class="code-window-bar">
                  <div class="code-window-dots">
                    <span class="dot dot-red"></span>
                    <span class="dot dot-yellow"></span>
                    <span class="dot dot-green"></span>
                  </div>
                  <span class="code-window-title">sia_binatama_${state.activeContribTab}.${state.activeContribTab === 'viola' ? 'md' : state.activeContribTab === 'nida' ? 'test.js' : 'sql'}</span>
                </div>
                <pre class="code-content-pre"><code>${escapeHTML(currentContrib.codeHighlight)}</code></pre>
              </div>
            </div>
          </div>

          <!-- Interactive Teacher Attendance Simulation for SMK Binatama -->
          <div class="live-demo-card" id="teacherAttendanceDemo" style="margin-top: 2.5rem;">
            <div class="live-demo-header">
              <span class="live-badge">
                <span style="width:6px; height:6px; background:#10b981; border-radius:50%; display:inline-block;"></span>
                SIMULATOR PRESENSI GURU SMK BINATAMA
              </span>
              <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">Real-time Geofence & Biometric Verification</span>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin-bottom:1.25rem;">
              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-secondary); display:block; margin-bottom:0.4rem;">Pilih Dewan Guru / Staf</label>
                <select id="simTeacherSelect" class="demo-input" style="width:100%;">
                  <option value="Drs. H. Sukamto, M.Pd (Kepala Sekolah)">Drs. H. Sukamto, M.Pd — Kepala Sekolah</option>
                  <option value="Bambang Sudarsono, S.Pd (Guru Produktif TKJ)" selected>Bambang Sudarsono, S.Pd — Guru Produktif TKJ</option>
                  <option value="Siti Nurjanah, S.Kom (Guru Pemrograman RPL)">Siti Nurjanah, S.Kom — Guru Pemrograman RPL</option>
                  <option value="Ahmad Fauzi, S.T (Guru Teknik Otomotif)">Ahmad Fauzi, S.T — Guru Teknik Otomotif</option>
                  <option value="Dewi Lestari, S.Pd (Guru Bahasa Inggris)">Dewi Lestari, S.Pd — Guru Bahasa Inggris</option>
                </select>
              </div>

              <div>
                <label style="font-size:0.8rem; font-weight:600; color:var(--text-secondary); display:block; margin-bottom:0.4rem;">Simulasi Lokasi Guru Saat Absen</label>
                <select id="simLocationSelect" class="demo-input" style="width:100%;">
                  <option value="inside" selected>📍 Di Lingkungan SMK Binatama (Radius 28 Meter) [VALID]</option>
                  <option value="outside">📍 Di Luar Sekolah / Rumah (Radius 2.4 KM) [INVALID]</option>
                </select>
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
              <span style="font-size:0.82rem; color:var(--text-muted);">Tekan tombol di samping untuk menguji simulasi alur presensi real-time:</span>
              <button class="demo-btn" id="runAttendanceSimBtn" style="background:var(--active-accent); color:#000;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Simulasikan Absen Guru
              </button>
            </div>

            <div class="demo-output-box" id="attendanceOutput">
              SIAP MENERIMA PRESENSI GURU SMK BINATAMA
              Klik tombol 'Simulasikan Absen Guru' untuk menguji verifikasi koordinat geofencing GPS dan validasi biometrik swafoto.
            </div>

            <div class="demo-output-meta">
              <span id="outputGeoStatus">Status Lokasi: Menunggu Uji</span>
              <span id="outputFaceStatus">Verifikasi Wajah: On-Device Standby</span>
              <span id="outputDbLog">Database: Connected</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Attach Contribution Tabs Listeners
    const contribBtns = jointProjectSection.querySelectorAll('.contrib-tab-btn');
    contribBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeContribTab = btn.dataset.member;
        if (window.soundFx) window.soundFx.playClick();
        renderJointProject();
      });
    });

    setupAttendanceSimulatorListeners();
  }

  function setupAttendanceSimulatorListeners() {
    const runBtn = document.getElementById('runAttendanceSimBtn');
    const teacherSelect = document.getElementById('simTeacherSelect');
    const locationSelect = document.getElementById('simLocationSelect');
    const output = document.getElementById('attendanceOutput');
    const geoStatus = document.getElementById('outputGeoStatus');
    const faceStatus = document.getElementById('outputFaceStatus');
    const dbLog = document.getElementById('outputDbLog');

    if (!runBtn) return;

    runBtn.addEventListener('click', () => {
      if (!output) return;
      const teacher = teacherSelect.value;
      const isInside = locationSelect.value === 'inside';

      if (window.soundFx) window.soundFx.playClick();
      output.innerHTML = `<span style="color:var(--active-accent);">Memproses sinyal GPS dan verifikasi wajah guru...</span>`;

      setTimeout(() => {
        const timeNow = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        if (isInside) {
          output.innerHTML = `
            <div style="color:#10b981; font-weight:700; margin-bottom:4px;">✅ PRESENSI BERHASIL DITERIMA [STATUS: TEPAT WAKTU]</div>
            <div>Guru: <strong>${teacher}</strong></div>
            <div>Waktu Check-In: <strong>${timeNow} WIB</strong></div>
            <div>Koordinat GPS: <strong>-7.77128, 110.36715 (Radius 28m dari Gerbang SMK Binatama)</strong></div>
            <div>Bukti Swafoto: <strong>Terverifikasi Kamera Mobile (Kesesuaian Biometrik 99.4%)</strong></div>
            <div>Tercatat pada Sistem Tata Usaha (TU) dan Notifikasi Terkirim ke Kepala Sekolah.</div>
          `;
          if (geoStatus) geoStatus.innerHTML = `<span style="color:#10b981;">● Lokasi: Valid di SMK Binatama (28m)</span>`;
          if (faceStatus) faceStatus.innerHTML = `<span style="color:#10b981;">● Wajah: Terotentikasi</span>`;
          if (dbLog) dbLog.innerHTML = `<span style="color:#10b981;">● Log ID: #ATT-${Math.floor(1000 + Math.random() * 9000)} Disimpan</span>`;
          if (window.soundFx) window.soundFx.playSuccess();
        } else {
          output.innerHTML = `
            <div style="color:#f43f5e; font-weight:700; margin-bottom:4px;">❌ PRESENSI DITOLAK [DI LUAR RADIUS SMK BINATAMA]</div>
            <div>Guru: <strong>${teacher}</strong></div>
            <div>Penyebab: <strong>Terdeteksi berada 2.4 KM di luar batas perimeter geofence sekolah!</strong></div>
            <div>Sistem memblokir absensi otomatis untuk mencegah titip absen atau manipulasi lokasi GPS.</div>
            <div style="color:#f59e0b; margin-top:4px;">Saran: Silakan lakukan presensi saat tiba di area gerbang / kantor guru SMK Binatama.</div>
          `;
          if (geoStatus) geoStatus.innerHTML = `<span style="color:#f43f5e;">● Lokasi: Ditolak (2.4km Di Luar Radius)</span>`;
          if (faceStatus) faceStatus.innerHTML = `<span style="color:#f59e0b;">● Swafoto: Dibatalkan</span>`;
          if (dbLog) dbLog.innerHTML = `<span style="color:#f43f5e;">● Status: Reject Log #ERR-GEO</span>`;
        }
      }, 350);
    });
  }

  // 7. Render Pure Floating Tech Stack Logos (One Unified Cluster)
  function renderTechStack(personaId) {
    if (!techStackSection) return;
    const member = PORTFOLIO_DATA.members[personaId];

    const fallbackIcons = {
      // Viola & Cross-Persona Tools
      apk: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#3DDC84"/><path d="M7 10C7 7.5 9 6 12 6C15 6 17 7.5 17 10H7Z" fill="#FFFFFF"/><circle cx="9.5" cy="8.2" r="0.75" fill="#3DDC84"/><circle cx="14.5" cy="8.2" r="0.75" fill="#3DDC84"/><line x1="8.5" y1="4.2" x2="10" y2="6.2" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/><line x1="15.5" y1="4.2" x2="14" y2="6.2" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/><path d="M7 11.5H17V17C17 17.8 16.3 18.5 15.5 18.5H8.5C7.7 18.5 7 17.8 7 17V11.5Z" fill="#FFFFFF"/><text x="12" y="16" fill="#3DDC84" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="4.2" text-anchor="middle" letter-spacing="0.5">APK</text></svg>`,
      figma: `<svg viewBox="0 0 38 57" width="44" height="44" fill="none"><path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/></svg>`,
      trello: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#0079BF"/><rect x="4" y="4" width="6.5" height="13" rx="1.5" fill="#FFFFFF"/><rect x="13.5" y="4" width="6.5" height="8" rx="1.5" fill="#FFFFFF"/></svg>`,
      html: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><path d="M3 2L4.8 19.8L12 22L19.2 19.8L21 2H3Z" fill="#E34F26"/><path d="M12 3.8V20.2L17.7 18.6L19.2 3.8H12Z" fill="#EF652A"/><path d="M12 7.7H7.4L7.7 10.9H12V14.1L9.6 13.5L9.4 11.8H7.3L7.7 16.3L12 17.5V14.1L12.1 14.1L16.2 14.1L16.6 9.8L16.7 7.7H12Z" fill="#FFFFFF"/></svg>`,
      css: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><path d="M3 2L4.8 19.8L12 22L19.2 19.8L21 2H3Z" fill="#1572B6"/><path d="M12 3.8V20.2L17.7 18.6L19.2 3.8H12Z" fill="#33A9DC"/><path d="M12 7.7H16.6L16.3 10.9H12V14.1L14.4 13.5L14.6 11.8H16.7L16.3 16.3L12 17.5V14.1L11.9 14.1L7.8 14.1L7.4 9.8L7.3 7.7H12Z" fill="#FFFFFF"/></svg>`,
      powerbi: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#F2C811"/><rect x="4.5" y="13.5" width="3.5" height="6.5" rx="1" fill="#242424"/><rect x="10.25" y="9.5" width="3.5" height="10.5" rx="1" fill="#242424"/><rect x="16" y="5" width="3.5" height="15" rx="1" fill="#242424"/></svg>`,
      mysql: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#00758F"/><path d="M19 14.5C18.5 12 16.5 10 14 9.5C13 8 11.5 7 9.5 7C7 7 5.5 8.5 5 10C4.5 11 4 12.5 4.5 14C5 15.5 6.5 16.5 8 16.5C10 16.5 11.5 15.5 12.5 14.5C14 15 16 15 17.5 14C18 14.5 18.5 15 19 15.5V14.5Z" fill="#F29111"/><path d="M6 13C6.5 11.5 8 10 10 10C11.5 10 13 11 14 12C14.5 12.5 15.5 13 16.5 13C17.5 13 18.5 12.5 19 12C18.5 10 16.5 8 14 7.5C12.5 7.2 11 7.5 9.5 8.2C8 8.9 7 10 6 11.5V13Z" fill="#FFFFFF"/><circle cx="8" cy="11.5" r="0.75" fill="#00758F"/></svg>`,
      dbdesigner: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#1E88E5"/><rect x="3.5" y="4" width="7.5" height="6.5" rx="1" fill="#FFFFFF" fill-opacity="0.95"/><rect x="3.5" y="4" width="7.5" height="2.2" rx="1" fill="#0D47A1"/><rect x="13" y="13.5" width="7.5" height="6.5" rx="1" fill="#FFFFFF" fill-opacity="0.95"/><rect x="13" y="13.5" width="7.5" height="2.2" rx="1" fill="#0D47A1"/><path d="M11 7.25H14.5C15.6 7.25 16.5 8.15 16.5 9.25V13.5" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><circle cx="11" cy="7.25" r="1.2" fill="#FFD54F"/><polyline points="14.5 11.5 16.5 13.5 18.5 11.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      cisco: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#049FD9"/><line x1="4" y1="13" x2="4" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="6" y1="10" x2="6" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="8" y1="6" x2="8" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="10" y1="10" x2="10" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="12" y1="6" x2="12" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="14" y1="10" x2="14" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="16" y1="6" x2="16" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="18" y1="10" x2="18" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/><line x1="20" y1="13" x2="20" y2="18" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/></svg>`,
      php: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#777BB4"/><text x="12" y="15.5" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="8.5" text-anchor="middle" letter-spacing="0.5">PHP</text></svg>`,
      vscode: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#007ACC"/><path d="M17.5 3.5L13 7.5L8.5 4.5L5 6.5V17.5L8.5 19.5L13 16.5L17.5 20.5L20 18.5V5.5L17.5 3.5ZM17.5 8V16L14 12L17.5 8Z" fill="#FFFFFF"/></svg>`,
      drawio: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#F08705"/><rect x="4.5" y="4.5" width="6.5" height="6.5" rx="1.5" fill="#FFFFFF"/><rect x="13" y="13" width="6.5" height="6.5" rx="1.5" fill="#FFFFFF"/><path d="M7.7 11V16.2H13" stroke="#FFFFFF" stroke-width="2.2" fill="none"/></svg>`,
      canva: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#00C4CC"/><path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C13.8 20 15.5 19.4 16.8 18.3L15.4 16.9C14.4 17.6 13.2 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C14.3 6 16.2 7.3 17.2 9.2L18.9 8.2C17.5 5.7 15 4 12 4Z" fill="#FFFFFF"/></svg>`,
      word: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#185ABD"/><path d="M5.5 6.5L8.5 17.5H10.5L12 12L13.5 17.5H15.5L18.5 6.5H16.2L14.4 14.5L12.8 6.5H11.2L9.6 14.5L7.8 6.5H5.5Z" fill="#FFFFFF"/></svg>`,
      excel: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#107C41"/><path d="M6.5 6.5L10.5 12L6.5 17.5H9L12 13.5L15 17.5H17.5L13.5 12L17.5 6.5H15L12 10.5L9 6.5H6.5Z" fill="#FFFFFF"/></svg>`,
      xampp: `<svg viewBox="0 0 24 24" width="44" height="44" fill="none"><rect width="24" height="24" rx="5" fill="#FB7A24"/><path d="M6 6L18 18M18 6L6 18" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/></svg>`,

      // Iqbal Tools
      golang: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none"><path d="M3.5 13.5C2.5 13.5 1.5 12.8 1.5 11.5C1.5 10.2 2.5 9.5 3.5 9.5H8.5V13.5H3.5Z" fill="#00ACD7"/><path d="M9.5 6.5C8.5 6.5 7.5 5.8 7.5 4.5C7.5 3.2 8.5 2.5 9.5 2.5H16.5C17.5 2.5 18.5 3.2 18.5 4.5C18.5 5.8 17.5 6.5 16.5 6.5H9.5Z" fill="#00ACD7"/><path d="M12.5 20.5C11.5 20.5 10.5 19.8 10.5 18.5C10.5 17.2 11.5 16.5 12.5 16.5H20.5C21.5 16.5 22.5 17.2 22.5 18.5C22.5 19.8 21.5 20.5 20.5 20.5H12.5Z" fill="#00ACD7"/><circle cx="17.5" cy="11.5" r="4.5" stroke="#00ACD7" stroke-width="2.5"/></svg>`,
      postgres: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="#336791"/><circle cx="9" cy="10" r="1.5" fill="#FFF"/><circle cx="15" cy="10" r="1.5" fill="#FFF"/><path d="M9 15C10 16 14 16 15 15" stroke="#FFF" stroke-width="1.8" stroke-linecap="round"/><path d="M12 12V15" stroke="#FFF" stroke-width="1.6"/></svg>`,
      redis: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#DC382D"/><path d="M3 12L12 17L21 12" stroke="#A8201A" stroke-width="2.5"/><path d="M3 17L12 22L21 17" stroke="#A8201A" stroke-width="2.5"/></svg>`,
      mongodb: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M12 2C11.8 2 11.6 2.3 11.6 2.6C10.7 6.8 5 9.8 5 15C5 19 8.2 22 12 22C15.8 22 19 19 19 15C19 9.8 13.3 6.8 12.4 2.6C12.4 2.3 12.2 2 12 2ZM12 4.2C13.5 7.8 17.2 10.5 17.2 15C17.2 18 14.9 20.3 12 20.5V4.2Z" fill="#47A248"/></svg>`,
      docker: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M2 12C2 17 6 21 12 21C18 21 22 17 22 12C22 12 20 12 19 10C17 7 14 8 13 8C13 8 12 7 10 7C7 7 6 9 6 11C4 11 2 11 2 12Z" fill="#2496ED"/><rect x="5" y="8" width="2" height="2" fill="#FFF"/><rect x="8" y="8" width="2" height="2" fill="#FFF"/><rect x="8" y="5" width="2" height="2" fill="#FFF"/><rect x="11" y="8" width="2" height="2" fill="#FFF"/><rect x="11" y="5" width="2" height="2" fill="#FFF"/><rect x="14" y="8" width="2" height="2" fill="#FFF"/></svg>`,
      git: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M21.5 10.5L13.5 2.5C12.8 1.8 11.7 1.8 11 2.5L2.5 11C1.8 11.7 1.8 12.8 2.5 13.5L10.5 21.5C11.2 22.2 12.3 22.2 13 21.5L21.5 13C22.2 12.3 22.2 11.2 21.5 10.5Z" fill="#F05032"/><circle cx="8" cy="12" r="2" fill="#FFF"/><circle cx="16" cy="12" r="2" fill="#FFF"/><circle cx="12" cy="8" r="2" fill="#FFF"/><line x1="8" y1="12" x2="16" y2="12" stroke="#FFF" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="12" stroke="#FFF" stroke-width="2"/></svg>`,
      linux: `<svg viewBox="0 0 24 24" width="40" height="40"><ellipse cx="12" cy="12" rx="7" ry="9" fill="#000"/><ellipse cx="12" cy="13" rx="5" ry="7" fill="#FFF"/><circle cx="10" cy="8" r="1.2" fill="#000"/><circle cx="14" cy="8" r="1.2" fill="#000"/><path d="M10 10C11 12 13 12 14 10" stroke="#FFA500" stroke-width="2" stroke-linecap="round"/><ellipse cx="8" cy="20" rx="3" ry="1.5" fill="#FFA500"/><ellipse cx="16" cy="20" rx="3" ry="1.5" fill="#FFA500"/></svg>`,
      tailwind: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M12 6C9 6 7.5 7.5 7.5 10.5C8.5 9 10 8.5 11.5 9C13 9.5 14 11 15.5 11C18 11 19.5 9.5 19.5 6.5C18.5 8 17 8.5 15.5 8C14 7.5 13 6 12 6ZM4.5 12C1.5 12 0 13.5 0 16.5C1 15 2.5 14.5 4 15C5.5 15.5 6.5 17 8 17C10.5 17 12 15.5 12 12.5C11 14 9.5 14.5 8 14C6.5 13.5 5.5 12 4.5 12Z" fill="#06B6D4"/></svg>`,
      laravel: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M3 7L12 2L21 7V17L12 22L3 17V7Z" fill="#FF2D20"/><path d="M12 6L17 9V15L12 18L7 15V9L12 6Z" fill="#FFF"/></svg>`,
      react: `<svg viewBox="0 0 24 24" width="40" height="40"><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.8" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.8" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.8" fill="none" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill="#61DAFB"/></svg>`,
      nodejs: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" fill="#339933"/><path d="M12 5L18 8.5V15.5L12 19L6 15.5V8.5L12 5Z" fill="#FFF"/><circle cx="12" cy="12" r="3" fill="#339933"/></svg>`,
      vue: `<svg viewBox="0 0 24 24" width="40" height="40"><path d="M2 3H6.5L12 12.5L17.5 3H22L12 21L2 3Z" fill="#41B883"/><path d="M6.5 3H10.5L12 6L13.5 3H17.5L12 13L6.5 3Z" fill="#34495E"/></svg>`,
      typescript: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="4" fill="#3178C6"/><path d="M6 10.5H12M9 10.5V18.5" stroke="#FFF" stroke-width="2.2" stroke-linecap="round"/><path d="M18.5 12C18 11 16.8 10.5 15.5 10.8C14.2 11.2 13.8 12.2 14 13.2C14.4 14.8 18.5 14.2 18.5 16.5C18.5 18 17 18.8 15.2 18.5C14 18.2 13.3 17.5 13 16.8" stroke="#FFF" stroke-width="2" stroke-linecap="round"/></svg>`,
      javascript: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M7 12V18C7 19.5 5.5 19.5 4.5 18.8" stroke="#000" stroke-width="2.2" stroke-linecap="round"/><path d="M19 13.5C18.5 12.2 17 11.5 15.5 12C14 12.5 13.8 13.8 14.2 15C14.8 16.8 19.2 16 19 18.2C18.8 19.8 17 20.2 15.2 19.8C13.8 19.4 13.2 18.5 13 17.5" stroke="#000" stroke-width="2" stroke-linecap="round"/></svg>`,

      // Nida Tools
      postman: `<svg viewBox="0 0 24 24" width="40" height="40"><circle cx="12" cy="12" r="11" fill="#FF6C37"/><path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM15.5 9.5L13.8 14.2L12 13.5L13.2 10.2L9.5 11.5L8.5 10L14.5 7.5L15.5 9.5Z" fill="#FFF"/></svg>`,
      cypress: `<svg viewBox="0 0 24 24" width="40" height="40"><circle cx="12" cy="12" r="11" fill="#1B1E2B"/><path d="M9.5 8C7 8 5.5 9.5 5.5 12C5.5 14.5 7 16 9.5 16C11.5 16 12.8 15 13.2 13.5H11.2C10.9 14.2 10.3 14.5 9.5 14.5C8 14.5 7.2 13.5 7.2 12C7.2 10.5 8 9.5 9.5 9.5C10.3 9.5 10.9 9.8 11.2 10.5H13.2C12.8 9 11.5 8 9.5 8ZM14.2 9.5L16 14L17.8 9.5H19.5L16.8 16H15.2L12.5 9.5H14.2Z" fill="#69D3A7"/></svg>`,
      playwright: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none"><path d="M9 4C5.5 4 3 6.5 3 10C3 13.5 5.5 16 9 16C12.5 16 15 13.5 15 10C15 6.5 12.5 4 9 4Z" fill="#2EAD33"/><path d="M15 8C11.5 8 9 10.5 9 14C9 17.5 11.5 20 15 20C18.5 20 21 17.5 21 14C21 10.5 18.5 8 15 8Z" fill="#E24035"/><circle cx="8" cy="9" r="1.5" fill="#FFF"/><circle cx="16" cy="13" r="1.5" fill="#FFF"/></svg>`,
      selenium: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="5" fill="#00B400"/><rect x="3" y="3" width="18" height="18" rx="3" fill="#FFF"/><text x="12" y="16" fill="#00B400" font-family="sans-serif" font-weight="900" font-size="11" text-anchor="middle">Se</text></svg>`,
      jest: `<svg viewBox="0 0 24 24" width="40" height="40"><circle cx="12" cy="12" r="11" fill="#C21325"/><path d="M7 6C9 6 10.5 8 10.5 10C10.5 12 8.5 14 6 14C6 11 6 8 7 6ZM17 6C15 6 13.5 8 13.5 10C13.5 12 15.5 14 18 14C18 11 18 8 17 6ZM12 9C10.5 9 9.5 10.5 9.5 12C9.5 14.5 11 17 12 19C13 17 14.5 14.5 14.5 12C14.5 10.5 13.5 9 12 9Z" fill="#FFF"/></svg>`,
      jmeter: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="5" fill="#D22128"/><path d="M6 18L18 6M6 12L12 6M12 18L18 12" stroke="#FFF" stroke-width="2.6" stroke-linecap="round"/><circle cx="15" cy="9" r="2.2" fill="#FFD700"/></svg>`,
      k6: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="5" fill="#7D64FF"/><path d="M7 5.5V18.5M7 12H11L15.5 5.5M11 12L16.5 18.5" stroke="#FFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      sonarqube: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="5" fill="#4B9FD5"/><path d="M5 19C5 11.3 11.3 5 19 5" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"/><path d="M5 19C5 14.6 8.6 11 13 11" stroke="#FFF" stroke-width="2.2" stroke-linecap="round"/><circle cx="5" cy="19" r="2" fill="#FFF"/></svg>`,
      katalon: `<svg viewBox="0 0 24 24" width="40" height="40"><rect width="24" height="24" rx="5" fill="#329632"/><path d="M6 5V19M6 12L14.5 5M8.5 10L15.5 19" stroke="#FFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      swagger: `<svg viewBox="0 0 24 24" width="40" height="40"><circle cx="12" cy="12" r="11" fill="#85EA2D"/><circle cx="12" cy="12" r="7.5" fill="#173647"/><text x="12" y="15.5" fill="#85EA2D" font-family="monospace" font-weight="900" font-size="9" text-anchor="middle">{ }</text></svg>`
    };

    const sectionMeta = {
      viola: {
        tag: "Aplikasi &amp; Tools Dikuasai",
        title: "Aplikasi &amp; Software yang Pernah Digunakan",
        desc: `Kumpulan perangkat lunak, tools perancangan basis data, pemodelan sistem informasi, dan aplikasi yang aktif dikuasai dan digunakan oleh ${member.name}.`
      },
      iqbal: {
        tag: "Core Technology Stack",
        title: "Tech Stack &amp; Arsitektur Backend",
        desc: `Bahasa pemrograman, arsitektur database terdistribusi, dan ekosistem backend yang aktif dikuasai oleh ${member.name}.`
      },
      nida: {
        tag: "QA &amp; Testing Ecosystem",
        title: "Automation Testing &amp; Quality Assurance Tools",
        desc: `Framework automated testing, performance stress test suite, dan security verification yang dikuasai oleh ${member.name}.`
      }
    };

    const meta = sectionMeta[personaId] || sectionMeta.viola;

    techStackSection.innerHTML = `
      <div class="container">
        <div class="section-header" style="text-align:center; margin-bottom: 2.5rem;">
          <div class="section-tag" style="margin: 0 auto 0.75rem auto;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            ${meta.tag}
          </div>
          <h2 class="section-title">${meta.title}</h2>
          <p class="section-desc" style="max-width: 680px; margin: 0 auto;">${meta.desc}</p>
        </div>

        <div class="tech-stack-layout">
          <!-- Floating Logos Cluster with Official Brand Icons and Names -->
          <div class="floating-logos-cluster view-enter">
            ${member.techStack.map((t, idx) => {
              const floatClass = `float-item-${(idx % 4) + 1}`;
              const k = (t.icon || '').toLowerCase();
              const iconSvg = (window.TECH_ICONS && window.TECH_ICONS[k]) || fallbackIcons[k] || `
                <svg viewBox="0 0 24 24" width="44" height="44" fill="none">
                  <rect width="24" height="24" rx="5" fill="var(--active-accent)" fill-opacity="0.2" stroke="var(--active-accent)" stroke-width="1.5"/>
                  <text x="12" y="15" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="7" text-anchor="middle">${(t.name || 'APP').slice(0, 3).toUpperCase()}</text>
                </svg>
              `;

              return `
                <div class="pure-tech-logo ${floatClass}" title="${t.name} • ${t.desc}">
                  ${iconSvg}
                  <span class="tech-logo-name">${t.name}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // 8. Render Individual Projects
  function renderProjects(personaId) {
    if (!projectsSection) return;
    const member = PORTFOLIO_DATA.members[personaId];
    const projects = member.individualProjects.map(p => ({ ...p, author: member.name }));

    projectsSection.innerHTML = `
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            Portofolio Individual
          </div>
          <h2 class="section-title">Project Lainnya dari ${member.nickname}</h2>
          <p class="section-desc">Karya nyata, produk software, dan implementasi yang dibangun secara mandiri oleh ${member.name}.</p>
        </div>

        <div class="projects-grid view-enter">
          ${projects.map(proj => `
            <div class="project-card spotlight-card" data-proj-id="${proj.id}">
              <div class="project-card-banner">
                <div class="project-art-canvas" style="background: radial-gradient(circle at 70% 30%, var(--active-accent) 0%, transparent 60%);"></div>
                <span class="project-badge-tag">${proj.category}</span>
                <div class="project-metric-pill">
                  <span class="metric-pill-val">${proj.metrics.value}</span>
                  <span class="metric-pill-lbl">${proj.metrics.label}</span>
                </div>
              </div>
              <div class="project-card-body">
                <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted); margin-bottom:4px;">${proj.author}</span>
                <h4 class="project-card-title">${proj.title}</h4>
                <div class="project-card-tagline">${proj.tagline}</div>
                <p class="project-card-desc">${proj.description}</p>
                <div class="project-tags-row">
                  ${proj.tags.map(t => `<span class="project-tag-chip">${t}</span>`).join('')}
                </div>
                <div class="project-card-footer">
                  <span class="project-case-link">
                    <span>Lihat Case Study</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </span>
                  <div style="display:flex; gap:6px;">
                    <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="social-mini-btn" title="GitHub" onclick="event.stopPropagation();">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Case study modal click listeners
    const projectCards = projectsSection.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        const pId = card.dataset.projId;
        const project = projects.find(p => p.id === pId);
        if (project) openCaseStudyModal(project);
      });
    });
  }

  // 9. Render Timeline (Experience vs Education / Organization)
  function renderTimeline(personaId) {
    if (!timelineSection) return;
    const member = PORTFOLIO_DATA.members[personaId];
    const hasExp = member.experience && member.experience.length > 0;
    const hasOrg = member.organizations && member.organizations.length > 0;

    // Default to education if member has no work experience
    if (!hasExp && state.activeTimelineTab === 'experience') {
      state.activeTimelineTab = 'education';
    }

    let list = member.education;
    let title = `Riwayat Edukasi: ${member.nickname}`;
    let subtitle = `Pendidikan formal dan prestasi akademis ${member.name}.`;

    if (state.activeTimelineTab === 'experience' && hasExp) {
      list = member.experience;
      title = `Pengalaman Kerja: ${member.nickname}`;
      subtitle = `Rekam jejak kontribusi industri dan peran profesional ${member.name}.`;
    } else if (state.activeTimelineTab === 'organization' && hasOrg) {
      list = member.organizations;
      title = `Pengalaman Organisasi &amp; Kegiatan: ${member.nickname}`;
      subtitle = `Aktivitas kepengurusan organisasi, pengabdian, dan kepemimpinan ${member.name}.`;
    }

    const items = list.map(i => ({ ...i, owner: member.name, ownerNick: member.nickname }));

    timelineSection.innerHTML = `
      <div class="container">
        <div class="section-header" style="align-items: center; text-align: center;">
          <div class="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Chronicle &amp; Milestones
          </div>
          <h2 class="section-title">${title}</h2>
          <p class="section-desc">${subtitle}</p>
        </div>

        <div class="timeline-toggle-wrapper">
          <div class="timeline-toggle-bar">
            ${hasExp ? `
              <button class="time-tab ${state.activeTimelineTab === 'experience' ? 'active' : ''}" data-type="experience">
                Pengalaman Kerja
              </button>
            ` : ''}
            <button class="time-tab ${state.activeTimelineTab === 'education' ? 'active' : ''}" data-type="education">
              Pendidikan Formal
            </button>
            ${hasOrg ? `
              <button class="time-tab ${state.activeTimelineTab === 'organization' ? 'active' : ''}" data-type="organization">
                Organisasi &amp; Kegiatan
              </button>
            ` : ''}
          </div>
        </div>

        <div class="timeline-track view-enter">
          ${items.map(item => `
            <div class="timeline-card spotlight-card">
              <div class="timeline-dot"></div>
              <div class="timeline-card-header">
                <div>
                  <h4 class="timeline-role-title">${item.role || item.degree}</h4>
                  <div class="timeline-company-name">${item.company || item.institution} • <span style="color:var(--active-accent); font-weight:600;">${item.ownerNick}</span></div>
                </div>
                <span class="timeline-period-pill">${item.period}</span>
              </div>
              <div class="timeline-card-body">
                ${item.description}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Toggle listeners
    const timeTabs = timelineSection.querySelectorAll('.time-tab');
    timeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        state.activeTimelineTab = tab.dataset.type;
        if (window.soundFx) window.soundFx.playClick();
        renderTimeline(personaId);
      });
    });
  }

  // 10. Render Certifications
  function renderCertificates(personaId) {
    if (!certsSection) return;
    const member = PORTFOLIO_DATA.members[personaId];
    const certs = member.certifications.map(c => ({ ...c, recipient: member.name }));

    certsSection.innerHTML = `
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            Accreditations
          </div>
          <h2 class="section-title">Sertifikasi & Kredensial: ${member.nickname}</h2>
          <p class="section-desc">Kredensial industri resmi dan lisensi keahlian yang telah diraih oleh ${member.name}.</p>
        </div>

        <div class="cert-grid view-enter">
          ${certs.map(c => `
            <div class="cert-card spotlight-card">
              <div class="cert-badge-row">
                <div class="cert-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                </div>
                <span class="cert-verified-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  Verified
                </span>
              </div>
              <h4 class="cert-title">${c.name}</h4>
              <div class="cert-issuer">${c.issuer} • ${c.year}</div>
              <div class="cert-id-tag">ID: ${c.id}</div>
              <div style="font-size:0.75rem; color:var(--text-muted); border-top:1px solid var(--border-subtle); padding-top:0.5rem;">
                Penerima: <strong style="color:var(--text-primary);">${c.recipient}</strong>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 11. Modal Logic (Case Study, E-CV Printable, Hire/Contact)
  function openCaseStudyModal(project) {
    if (!caseStudyModal) return;
    const body = caseStudyModal.querySelector('.modal-content-scroll');
    const title = caseStudyModal.querySelector('.modal-title');
    if (title) title.textContent = project.title;

    if (body) {
      body.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
          <span class="section-tag">${project.category}</span>
          <div style="font-family:var(--font-mono); font-size:0.85rem; color:var(--active-accent);">Lead: ${project.author}</div>
        </div>
        <h3 style="font-size:1.5rem; font-weight:800; color:var(--text-primary);">${project.tagline}</h3>
        <p style="font-size:1rem; line-height:1.7; color:var(--text-secondary);">${project.description}</p>
        
        <div style="padding:1.25rem; background:var(--bg-tertiary); border:1px solid var(--border-subtle); border-radius:var(--radius-md);">
          <h5 style="font-size:0.95rem; font-weight:700; margin-bottom:0.5rem; color:var(--text-primary);">Metric Impact & Benchmarks</h5>
          <div style="font-family:var(--font-heading); font-size:2rem; font-weight:900; color:var(--active-accent);">${project.metrics.value}</div>
          <div style="font-size:0.82rem; color:var(--text-muted); text-transform:uppercase;">${project.metrics.label}</div>
        </div>

        <div>
          <h5 style="font-size:0.95rem; font-weight:700; margin-bottom:0.75rem; color:var(--text-primary);">Core Technologies Utilized</h5>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            ${project.tags.map(t => `<span class="project-tag-chip" style="font-size:0.82rem; padding:0.35rem 0.8rem;">${t}</span>`).join('')}
          </div>
        </div>

        <div style="display:flex; gap:1rem; margin-top:1rem;">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="flex:1; justify-content:center;">
            Buka Repository Code
          </a>
          <button class="btn-secondary" onclick="document.getElementById('caseStudyModal').classList.remove('open');">
            Tutup
          </button>
        </div>
      `;
    }

    caseStudyModal.classList.add('open');
    if (window.soundFx) window.soundFx.playClick();
  }

  function openEcvModal(personaId) {
    if (!ecvModal) return;
    const body = ecvModal.querySelector('.modal-content-scroll');
    const title = ecvModal.querySelector('.modal-title');
    const m = PORTFOLIO_DATA.members[personaId] || PORTFOLIO_DATA.members.iqbal;

    if (title) title.textContent = `Curriculum Vitae: ${m.name}`;

    if (body) {
      body.innerHTML = `
        <div style="display:flex; justify-content:flex-end; gap:0.75rem; margin-bottom:1rem;">
          <button class="btn-primary" id="triggerPrintBtn" style="padding:0.5rem 1.25rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            Cetak / Simpan ke PDF
          </button>
        </div>

        <div class="ecv-preview-sheet" style="margin-bottom: 2rem;">
          <div class="ecv-header-row">
            <img src="${m.avatar}" alt="${m.name}" class="ecv-avatar-mini">
            <div>
              <h2 class="ecv-name">${m.name}</h2>
              <div class="ecv-role">${m.role}</div>
              <div class="ecv-contact-line">
                📍 ${m.location} • ✉️ ${m.email}
              </div>
            </div>
          </div>

          <h3 class="ecv-section-heading">Professional Summary</h3>
          <p class="ecv-text-body">${m.bio}</p>

          <h3 class="ecv-section-heading">Key Technical Competencies</h3>
          <div class="ecv-skills-chips">
            ${m.techStack.map(t => `<span class="ecv-chip">${t.name} (${t.exp})</span>`).join('')}
          </div>

          ${m.experience && m.experience.length > 0 ? `
            <h3 class="ecv-section-heading">Pengalaman Kerja</h3>
            ${m.experience.map(e => `
              <div style="margin-bottom:0.75rem;">
                <div style="display:flex; justify-content:space-between; font-weight:700; font-size:0.92rem; color:#0f172a;">
                  <span>${e.role} — ${e.company}</span>
                  <span style="color:#64748b; font-size:0.82rem;">${e.period}</span>
                </div>
                <p class="ecv-text-body" style="font-size:0.85rem; margin-top:2px;">${e.description}</p>
              </div>
            `).join('')}
          ` : ''}

          ${m.organizations && m.organizations.length > 0 ? `
            <h3 class="ecv-section-heading">Pengalaman Organisasi &amp; Kegiatan</h3>
            ${m.organizations.map(o => `
              <div style="margin-bottom:0.75rem;">
                <div style="display:flex; justify-content:space-between; font-weight:700; font-size:0.92rem; color:#0f172a;">
                  <span>${o.role} — ${o.company}</span>
                  <span style="color:#64748b; font-size:0.82rem;">${o.period}</span>
                </div>
                <p class="ecv-text-body" style="font-size:0.85rem; margin-top:2px;">${o.description}</p>
              </div>
            `).join('')}
          ` : ''}

          <h3 class="ecv-section-heading">Pendidikan & Sertifikasi</h3>
          ${m.education.map(ed => `
            <div style="margin-bottom:0.5rem;">
              <div style="font-weight:700; font-size:0.9rem; color:#0f172a;">${ed.degree} (${ed.period})</div>
              <div style="font-size:0.82rem; color:#475569;">${ed.institution} — ${ed.description}</div>
            </div>
          `).join('')}
          <div style="margin-top:0.5rem; font-size:0.82rem; color:#334155;">
            <strong>Sertifikasi:</strong> ${m.certifications.map(c => `${c.name} (${c.issuer})`).join('; ')}
          </div>
        </div>
      `;

      const printBtn = document.getElementById('triggerPrintBtn');
      if (printBtn) {
        printBtn.addEventListener('click', () => {
          window.print();
        });
      }
    }

    ecvModal.classList.add('open');
    if (window.soundFx) window.soundFx.playClick();
  }

  function openContactModal(personaId) {
    if (!contactModal) return;
    const recipientSelect = document.getElementById('contactRecipient');
    if (recipientSelect) {
      recipientSelect.value = personaId;
    }

    contactModal.classList.add('open');
    if (window.soundFx) window.soundFx.playClick();
  }

  // Close modals listeners
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const msg = document.getElementById('contactMessage').value;
      const recipient = document.getElementById('contactRecipient').value;

      if (!name || !email || !msg) {
        showToast('Mohon lengkapi semua field form ⚠️');
        return;
      }

      contactModal.classList.remove('open');
      contactForm.reset();
      showToast(`Pesan terkirim ke ${recipient.toUpperCase()}! Terima kasih ${name} ✨`);
      if (window.soundFx) window.soundFx.playSuccess();
    });
  }

  // 12. Toast Notification System
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  }

  // 13. Dynamic 3D Tilt Effect on Portrait Cards
  function init3DTilt() {
    const card = document.getElementById('heroPortraitCard');
    if (!card) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  }

  // 14. Animated Number Counters
  function initCounters() {
    const counters = document.querySelectorAll('.counter-number');
    counters.forEach(counter => {
      const displayOverride = counter.dataset.display;
      const rawTarget = counter.dataset.target || counter.textContent;
      const target = parseFloat(rawTarget.toString().replace(',', '.'));
      if (isNaN(target)) return;

      const decimalPart = rawTarget.toString().split('.')[1] || (displayOverride && displayOverride.includes(',') ? displayOverride.split(',')[1] : '');
      const decimals = decimalPart.length;

      let current = 0;
      const duration = 1200;
      const startTime = performance.now();

      const updateCounter = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        current = target * ease;

        if (displayOverride && displayOverride.includes(',')) {
          counter.textContent = current.toFixed(decimals).replace('.', ',');
        } else {
          counter.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = displayOverride || (decimals > 0 ? target.toFixed(decimals) : target);
        }
      };

      requestAnimationFrame(updateCounter);
    });
  }

  // 15. Custom Mouse Spotlight Trailer
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(c => {
      const rect = c.getBoundingClientRect();
      if (
        e.clientX >= rect.left - 50 &&
        e.clientX <= rect.right + 50 &&
        e.clientY >= rect.top - 50 &&
        e.clientY <= rect.bottom + 50
      ) {
        c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }
    });

    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('customCursorDot');
    if (cursor && cursorDot) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    }
  });

  // Cursor hover magnification
  document.querySelectorAll('a, button, input, .project-card, .floating-tech-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const cursor = document.getElementById('customCursor');
      if (cursor) cursor.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      const cursor = document.getElementById('customCursor');
      if (cursor) cursor.classList.remove('cursor-hover');
    });
  });

  // Helper Escape HTML
  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Start routing
  initRouting();
});
