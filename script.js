/**
 * ==========================================================================
 * PORTOFOLIO SEA BLUE - MUHAMMAD WIRA ANDIKA
 * Siswa Rekayasa Perangkat Lunak (RPL) SMK Telkom Lampung
 * Web Developer
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. PRELOADER COUNTDOWN & TRANSITION
  initPreloader();

  // 2. SCROLL PROGRESS BAR & STICKY NAVBAR
  initScrollEffects();

  // 3. MOBILE MENU DRAWER
  initMobileMenu();

  // 4. HERO SECTION TYPEWRITER EFFECT
  initTypewriter();

  // 5. 3D PROFILE CARD TILT INTERACTION
  initProfileTilt();

  // 6. LO-FI CODING MUSIC PLAYER WIDGET
  initLoFiPlayer();

  // 7. SKILLS FILTER TABS
  initSkillsFilter();

  // 8. FAQ ACCORDION
  initFaqAccordion();

  // 9. SCI-FI HUD MINI-GAME (BUG BUSTER)
  initMiniGame();

  // 10. PROJECT DETAIL MODAL
  initProjectModals();

  // 11. CONTACT FORM & WHATSAPP DISPATCH
  initContactForm();

  // 12. FLOATING AI ASSISTANT (TANYA WIRA)
  initAiAssistant();

  // 13. GENERATE AMBIENT BUBBLES
  createAmbientBubbles();
});

/* ==========================================================================
   1. PRELOADER
   ========================================================================== */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const counter = document.getElementById('preloader-counter');
  const barFill = document.getElementById('preloader-bar-fill');
  if (!preloader || !counter || !barFill) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 4;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      counter.textContent = '100%';
      barFill.style.width = '100%';
      setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }, 400);
    } else {
      counter.textContent = progress + '%';
      barFill.style.width = progress + '%';
    }
  }, 35);
}

/* ==========================================================================
   2. SCROLL PROGRESS & NAVBAR
   ========================================================================== */
function initScrollEffects() {
  const scrollBar = document.getElementById('top-scroll-bar');
  const navbar = document.getElementById('header-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) : 0;

    if (scrollBar) {
      scrollBar.style.transform = `scaleX(${scrollPercent})`;
    }

    if (navbar) {
      if (scrollTop > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Active link highlighting
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollTop >= top && scrollTop < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. MOBILE NAVIGATION MENU
   ========================================================================== */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('mobile-nav-close');
  const backdrop = document.getElementById('drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-menu-links a');

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   4. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById('typed-role');
  if (!target) return;

  const roles = [
    'Web Developer',
    'Siswa RPL SMK Telkom Lampung',
    'Front-End & UI/UX Explorer',
    'Full-Stack Enthusiast'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentText = roles[roleIdx];

    if (isDeleting) {
      target.textContent = currentText.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 45;
    } else {
      target.textContent = currentText.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIdx === currentText.length) {
      typeSpeed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 400; // Pause before typing new word
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ==========================================================================
   5. 3D PROFILE CARD TILT EFFECT
   ========================================================================== */
function initProfileTilt() {
  const container = document.getElementById('profile-card-container');
  const card = document.getElementById('profile-tilt-card');
  if (!container || !card) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  container.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

/* ==========================================================================
   6. LO-FI CODING MUSIC PLAYER WIDGET
   ========================================================================== */
function initLoFiPlayer() {
  const playBtn = document.getElementById('lofi-play-btn');
  const prevBtn = document.getElementById('lofi-prev-btn');
  const nextBtn = document.getElementById('lofi-next-btn');
  const vinylDisc = document.getElementById('lofi-vinyl-disc');
  const titleEl = document.getElementById('lofi-song-title');
  const artistEl = document.getElementById('lofi-artist');
  const trackCountEl = document.getElementById('lofi-track-count');
  const progressBar = document.getElementById('lofi-progress-bar');
  const currentTimeEl = document.getElementById('lofi-current-time');
  const totalTimeEl = document.getElementById('lofi-total-time');
  const statusNote = document.getElementById('lofi-status-note');

  const tracks = [
    { title: "Telkom Coding Beats (Lo-Fi)", artist: "Wira Chill Station • SMK Telkom", duration: 165 },
    { title: "Ocean Breeze & Deep Focus", artist: "Lampung Coastal Waves • 432Hz", duration: 180 },
    { title: "Midnight Code Symphony", artist: "RPL Telkom Vibes • Lo-Fi Dream", duration: 150 }
  ];

  let currentTrackIdx = 0;
  let isPlaying = false;
  let currentTime = 0;
  let playerInterval = null;
  let audioCtx = null;
  let oscillator = null;
  let gainNode = null;

  // Web Audio Synth ambient sound
  function startSynthAmbient() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtx) audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      oscillator = audioCtx.createOscillator();
      gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      // Harmonic ocean chord tone
      oscillator.frequency.setValueAtTime(216, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.015, audioCtx.currentTime);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
    } catch (e) {
      // Audio autoplay restrictions gracefully handled
    }
  }

  function stopSynthAmbient() {
    try {
      if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null;
      }
    } catch (e) {}
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function updateTrackDisplay() {
    const track = tracks[currentTrackIdx];
    titleEl.textContent = track.title;
    artistEl.textContent = track.artist;
    trackCountEl.textContent = `${currentTrackIdx + 1}/${tracks.length}`;
    totalTimeEl.textContent = formatTime(track.duration);
    currentTimeEl.textContent = formatTime(currentTime);
    const pct = (currentTime / track.duration) * 100;
    progressBar.style.width = `${pct}%`;
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1"></rect>
          <rect x="14" y="4" width="4" height="16" rx="1"></rect>
        </svg>
      `;
      vinylDisc.classList.add('playing');
      statusNote.textContent = '▶ Sedang Memutar';
      startSynthAmbient();

      playerInterval = setInterval(() => {
        currentTime++;
        if (currentTime >= tracks[currentTrackIdx].duration) {
          nextTrack();
        } else {
          updateTrackDisplay();
        }
      }, 1000);
    } else {
      pausePlayback();
    }
  }

  function pausePlayback() {
    isPlaying = false;
    playBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="6 3 20 12 6 21 6 3"></polygon>
      </svg>
    `;
    vinylDisc.classList.remove('playing');
    statusNote.textContent = '⏸ Dijeda';
    clearInterval(playerInterval);
    stopSynthAmbient();
  }

  function nextTrack() {
    currentTrackIdx = (currentTrackIdx + 1) % tracks.length;
    currentTime = 0;
    updateTrackDisplay();
    if (isPlaying) {
      stopSynthAmbient();
      startSynthAmbient();
    }
  }

  function prevTrack() {
    currentTrackIdx = (currentTrackIdx - 1 + tracks.length) % tracks.length;
    currentTime = 0;
    updateTrackDisplay();
    if (isPlaying) {
      stopSynthAmbient();
      startSynthAmbient();
    }
  }

  if (playBtn) playBtn.addEventListener('click', togglePlay);
  if (nextBtn) nextBtn.addEventListener('click', nextTrack);
  if (prevBtn) prevBtn.addEventListener('click', prevTrack);

  // Click on progress bar to seek
  const progressContainer = document.getElementById('lofi-progress-container');
  if (progressContainer) {
    progressContainer.addEventListener('click', (e) => {
      const rect = progressContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      currentTime = Math.floor(pct * tracks[currentTrackIdx].duration);
      updateTrackDisplay();
    });
  }

  updateTrackDisplay();
}

/* ==========================================================================
   7. SKILLS FILTER TABS
   ========================================================================== */
function initSkillsFilter() {
  const tabs = document.querySelectorAll('.skill-tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          // re-trigger animation
          const bar = card.querySelector('.skill-meter-bar');
          if (bar) {
            const pct = bar.getAttribute('data-pct');
            bar.style.width = '0%';
            setTimeout(() => { bar.style.width = `${pct}%`; }, 50);
          }
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   8. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answerPanel = item.querySelector('.faq-answer-panel');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      items.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherPanel = otherItem.querySelector('.faq-answer-panel');
        if (otherPanel) otherPanel.style.maxHeight = null;
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        answerPanel.style.maxHeight = answerPanel.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   9. SCI-FI HUD MINI-GAME: CODE BUG BUSTER
   ========================================================================== */
function initMiniGame() {
  const playfield = document.getElementById('game-playfield');
  const scoreDisplay = document.getElementById('game-score-display');
  const timerDisplay = document.getElementById('game-timer-display');
  const startBtn = document.getElementById('game-start-btn');
  const overlay = document.getElementById('game-start-overlay');
  const overlayText = document.getElementById('game-overlay-text');

  if (!playfield || !scoreDisplay || !startBtn) return;

  let score = 0;
  let timeLeft = 20;
  let gameInterval = null;
  let spawnInterval = null;
  let isGameActive = false;

  const targetEmojis = ['🐛', '🪲', '⚡', '💎', '🐞', '🌊'];

  function playPopSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(580, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  }

  function spawnBug() {
    if (!isGameActive) return;

    // Clear excessive existing targets
    const existing = playfield.querySelectorAll('.game-bubble-target');
    if (existing.length >= 5) {
      existing[0].remove();
    }

    const bug = document.createElement('div');
    bug.className = 'game-bubble-target';

    const randomEmoji = targetEmojis[Math.floor(Math.random() * targetEmojis.length)];
    bug.textContent = randomEmoji;

    const maxX = playfield.clientWidth - 40;
    const maxY = playfield.clientHeight - 40;

    const posX = Math.max(5, Math.floor(Math.random() * maxX));
    const posY = Math.max(5, Math.floor(Math.random() * maxY));

    bug.style.left = `${posX}px`;
    bug.style.top = `${posY}px`;

    bug.addEventListener('click', (e) => {
      e.stopPropagation();
      playPopSound();
      score += 10;
      scoreDisplay.textContent = score;

      // Particle effect
      bug.style.transform = 'scale(1.4)';
      bug.style.opacity = '0';
      setTimeout(() => bug.remove(), 120);

      spawnBug();
    });

    playfield.appendChild(bug);

    // Auto remove after 3s
    setTimeout(() => {
      if (bug.parentNode) bug.remove();
    }, 2800);
  }

  function startGame() {
    isGameActive = true;
    score = 0;
    timeLeft = 20;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = `${timeLeft}s`;

    overlay.style.display = 'none';

    // Clear old elements
    const oldBugs = playfield.querySelectorAll('.game-bubble-target');
    oldBugs.forEach(b => b.remove());

    spawnBug();
    spawnBug();

    spawnInterval = setInterval(spawnBug, 900);

    gameInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `${timeLeft}s`;

      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);
  }

  function endGame() {
    isGameActive = false;
    clearInterval(gameInterval);
    clearInterval(spawnInterval);

    overlay.style.display = 'flex';
    overlayText.innerHTML = `Misi Selesai!<br><span style="color:#00f0ff;font-size:16px;">Skor Kamu: ${score} EXP</span>`;
    startBtn.textContent = 'Main Lagi ►';
  }

  startBtn.addEventListener('click', startGame);
}

/* ==========================================================================
   10. PROJECT DETAIL MODAL
   ========================================================================== */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');
  const modalTech = document.getElementById('modal-tech');
  const modalClose = document.getElementById('modal-close-btn');
  const modalFooterClose = document.getElementById('modal-footer-close');

  const projectDetails = {
    'si-telkom': {
      title: "SI-TELKOM — Sistem Informasi & Presensi Siswa SMK Telkom Lampung",
      desc: "Sistem aplikasi web komprehensif yang dirancang untuk mendigitalisasi pencatatan kehadiran siswa jurusan RPL berbasis scan QR Code kartu pelajar, rekapitulasi nilai tugas praktikum, serta pelaporan otomatis ke wali kelas.",
      features: [
        "Presensi Digital Siswa dengan QR Code Scanner cepat",
        "Dashboard Admin & Guru dengan statistik kehadiran real-time",
        "Modul Pengelolaan Nilai & Tugas Proyek RPL SMK Telkom",
        "Ekspor Laporan Otomatis ke format PDF dan Excel",
        "Keamanan login multi-level (Admin, Guru, Siswa)"
      ],
      tech: ["PHP 8", "MySQL", "Bootstrap 5", "JavaScript", "Chart.js"]
    },
    'technostore': {
      title: "TechnoStore SMK Telkom — E-Commerce Karya Siswa RPL",
      desc: "Platform katalog digital dan marketplace internal sekolah untuk memamerkan dan memperjualbelikan produk kreatif digital (source code, template web, UI kit) serta merchandise resmi SMK Telkom Lampung karya siswa RPL.",
      features: [
        "Katalog Produk Interaktif dengan filter kategori & search",
        "Sistem Keranjang Belanja & Form Checkout otomatis ke WhatsApp",
        "Preview demo langsung produk digital sebelum transaksi",
        "Panel Admin untuk input produk dan kelola stok",
        "Desain responsif ramah smartphone"
      ],
      tech: ["HTML5", "CSS3 / Tailwind", "JavaScript ES6", "MySQL", "PHP"]
    },
    'simkas': {
      title: "Simkas RPL — Manajemen Kas Kelas & Monitoring Tugas Proyek",
      desc: "Aplikasi produktivitas kelas untuk memonitor keuangan kas mingguan siswa RPL SMK Telkom Lampung sekaligus kalender deadline tugas dan proyek pemrograman kelompok.",
      features: [
        "Pencatatan Pemasukan & Pengeluaran Kas secara transparan",
        "Grafik Keuangan Dinamis & Saldo Kas Kelas",
        "Task Tracker & Deadline Reminder Tugas Kejuruan RPL",
        "Notifikasi tagihan kas mingguan otomatis ke WhatsApp",
        "Export laporan keuangan kas bulanan"
      ],
      tech: ["PHP", "JavaScript", "Tailwind CSS", "MySQL", "FullCalendar"]
    },
    'profil-rpl': {
      title: "Web Profil Interaktif Jurusan RPL SMK Telkom Lampung",
      desc: "Landing page interaktif untuk mempromosikan jurusan Rekayasa Perangkat Lunak (RPL) SMK Telkom Lampung kepada calon siswa baru dan mitra industri (DUDI), menampilkan profil laboratorium komputer, kurikulum, dan galeri prestasi.",
      features: [
        "Virtual Showcase Laboratorium RPL SMK Telkom Lampung",
        "Penjelasan kurikulum industri & sertifikasi kompetensi",
        "Galeri Prestasi LKS & Karya Inovasi Siswa RPL",
        "Form pendaftaran konsultasi jurusan",
        "Animasi interaktif modern bertema teknologi"
      ],
      tech: ["HTML5", "Modern CSS", "JavaScript", "Vercel Deployment"]
    },
    'eksplor-lampung': {
      title: "Eksplor Lampung — Portal Wisata Bahari & Peta Interaktif",
      desc: "Portal panduan pariwisata bahari dan alam provinsi Lampung (Pantai Gigi Hiu, Teluk Kiluan, Pulau Pahawang) dilengkapi peta Leaflet.js interaktif, estimasi budget perjalanan, dan direktori kuliner lokal.",
      features: [
        "Peta Interaktif Lokasi Wisata dengan custom marker Leaflet.js",
        "Kalkulator estimasi biaya liburan & rute transportasi",
        "Galeri foto destinasi resolusi tinggi & ulasan pengunjung",
        "100% responsif dan ringan diakses dari jaringan mobile"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Leaflet.js", "OpenStreetMap API"]
    }
  };

  function openModal(key) {
    const data = projectDetails[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    modalFeatures.innerHTML = '';
    data.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      modalFeatures.appendChild(li);
    });

    modalTech.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = t;
      modalTech.appendChild(span);
    });

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  document.querySelectorAll('[data-project-key]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-project-key');
      openModal(key);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalFooterClose) modalFooterClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

/* ==========================================================================
   11. CONTACT FORM & WHATSAPP INTEGRATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyBtn = document.getElementById('btn-copy-email');

  // Copy email button
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('wirajago01@gmail.com').then(() => {
        showToast('Email wira berhasil disalin ke clipboard!');
      }).catch(() => {
        showToast('wirajago01@gmail.com');
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Harap lengkapi semua kolom formulir!');
        return;
      }

      // Generate WhatsApp text link
      const waText = encodeURIComponent(
        `Halo Muhammad Wira Andika (Siswa RPL SMK Telkom Lampung),\n\n` +
        `Saya: ${name} (${email})\n` +
        `Pesan / Proyek: ${message}\n\n` +
        `Saya menghubungi melalui website portofolio Sea Blue Anda.`
      );

      showToast('Membuka WhatsApp untuk mengirim pesan...');

      setTimeout(() => {
        window.open(`https://wa.me/6285764803396?text=${waText}`, '_blank');
        form.reset();
      }, 700);
    });
  }
}

/* ==========================================================================
   12. FLOATING AI ASSISTANT ("TANYA WIRA")
   ========================================================================== */
function initAiAssistant() {
  const toggleBtn = document.getElementById('floating-ai-btn');
  const modalBox = document.getElementById('ai-modal-box');
  const closeBtn = document.getElementById('ai-close-btn');
  const chatBody = document.getElementById('ai-chat-body');
  const inputEl = document.getElementById('ai-text-input');
  const sendBtn = document.getElementById('ai-send-btn');
  const chips = document.querySelectorAll('.ai-prompt-chip');

  if (!toggleBtn || !modalBox) return;

  function toggleAi() {
    modalBox.classList.toggle('active');
  }

  toggleBtn.addEventListener('click', toggleAi);
  if (closeBtn) closeBtn.addEventListener('click', () => modalBox.classList.remove('active'));

  const knowledgeBase = [
    {
      keywords: ['siapa', 'biodata', 'profil', 'tentang', 'wira', 'andika'],
      response: "Muhammad Wira Andika adalah siswa aktif di SMK Telkom Lampung jurusan Rekayasa Perangkat Lunak (RPL). Ia berfokus sebagai Web Developer yang menguasai front-end modern serta back-end database."
    },
    {
      keywords: ['sekolah', 'smk', 'telkom', 'lampung', 'jurusan', 'rpl'],
      response: "Wira menempuh pendidikan di SMK Telkom Lampung dengan fokus kompetensi Rekayasa Perangkat Lunak (RPL). Materi yang dipelajari mencakup pemrograman web, basis data MySQL, OOP, dan framework modern."
    },
    {
      keywords: ['keahlian', 'skill', 'teknologi', 'bahasa', 'stack'],
      response: "Keahlian utama Wira meliputi HTML5, CSS3 (Tailwind & Bootstrap), JavaScript ES6+, PHP, MySQL, Git/GitHub, serta desain antarmuka Figma dengan standar clean code dan kecepatan tinggi."
    },
    {
      keywords: ['proyek', 'project', 'portofolio', 'karya'],
      response: "Beberapa proyek unggulan Wira di RPL SMK Telkom Lampung antara lain: 1) SI-TELKOM (Sistem Presensi Siswa & Nilai), 2) TechnoStore (E-commerce Produk Siswa), 3) Simkas RPL (Manajemen Kas Kelas), dan 4) Eksplor Lampung (Peta Wisata Bahari)."
    },
    {
      keywords: ['kontak', 'hubungi', 'whatsapp', 'email', 'magang', 'pkl', 'freelance'],
      response: "Anda dapat menghubungi Wira melalui WhatsApp di 0857-6480-3396 atau email wirajago01@gmail.com. Wira sangat terbuka untuk tawaran proyek web, kolaborasi, dan program PKL / Magang industri."
    }
  ];

  function appendMessage(sender, text) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.textContent = text;
    chatBody.appendChild(bubble);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleUserQuery(query) {
    if (!query.trim()) return;
    appendMessage('user', query);
    inputEl.value = '';

    // Simulate typing delay
    setTimeout(() => {
      const qLower = query.toLowerCase();
      let matched = false;

      for (const item of knowledgeBase) {
        if (item.keywords.some(k => qLower.includes(k))) {
          appendMessage('bot', item.response);
          matched = true;
          break;
        }
      }

      if (!matched) {
        appendMessage('bot', "Terima kasih telah bertanya! Saya asisten virtual Muhammad Wira Andika (Siswa RPL SMK Telkom Lampung). Anda dapat menanyakan tentang keahlian, proyek web, atau langsung hubungi Wira via WhatsApp!");
      }
    }, 450);
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', () => handleUserQuery(inputEl.value));
  }

  if (inputEl) {
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleUserQuery(inputEl.value);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      handleUserQuery(chip.textContent);
    });
  });
}

/* ==========================================================================
   13. AMBIENT SEA BUBBLES GENERATOR
   ========================================================================== */
function createAmbientBubbles() {
  const container = document.getElementById('ambient-background');
  if (!container) return;

  const bubbleCount = 18;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('span');
    bubble.className = 'bubble-wobbling';

    const size = Math.floor(Math.random() * 16) + 6; // 6px - 22px
    const left = Math.floor(Math.random() * 96) + 2; // 2% - 98%
    const duration = (Math.random() * 12 + 10).toFixed(1); // 10s - 22s
    const delay = (Math.random() * 12).toFixed(1); // 0s - 12s

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;

    container.appendChild(bubble);
  }

  // Create plankton glowing dots
  const planktonCount = 14;
  for (let i = 0; i < planktonCount; i++) {
    const dot = document.createElement('span');
    dot.className = 'plankton-dot';

    const size = Math.floor(Math.random() * 4) + 3;
    const top = Math.floor(Math.random() * 90) + 5;
    const left = Math.floor(Math.random() * 90) + 5;
    const duration = (Math.random() * 4 + 3).toFixed(1);
    const delay = (Math.random() * 5).toFixed(1);

    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.top = `${top}%`;
    dot.style.left = `${left}%`;
    dot.style.animationDuration = `${duration}s`;
    dot.style.animationDelay = `${delay}s`;

    container.appendChild(dot);
  }
}

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   FIGHTER JET BACKGROUND ANIMATION
   ========================================================================== */
(function initJetCanvas() {
  const canvas = document.getElementById('jet-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Jet fighter class
  class FighterJet {
    constructor() {
      this.reset();
    }

    reset() {
      // Random direction: 0 = left-to-right, 1 = right-to-left, 2 = top-left diagonal, 3 = top-right diagonal
      this.direction = Math.floor(Math.random() * 4);
      this.size = 18 + Math.random() * 14; // 18-32px
      this.speed = 1.5 + Math.random() * 2.5;
      this.opacity = 0.15 + Math.random() * 0.25;
      this.trail = [];
      this.trailMax = 60 + Math.floor(Math.random() * 40);
      this.glowColor = Math.random() > 0.5 ? '0, 240, 255' : '0, 200, 180'; // cyan or teal
      this.wobbleAmp = 0.3 + Math.random() * 0.7;
      this.wobbleFreq = 0.01 + Math.random() * 0.02;
      this.tick = Math.random() * 1000;
      this.afterburner = 0.5 + Math.random() * 0.5;

      switch (this.direction) {
        case 0: // left to right
          this.x = -60;
          this.y = Math.random() * canvas.height * 0.7 + canvas.height * 0.05;
          this.angle = -0.1 + Math.random() * 0.2;
          break;
        case 1: // right to left
          this.x = canvas.width + 60;
          this.y = Math.random() * canvas.height * 0.7 + canvas.height * 0.05;
          this.angle = Math.PI + (-0.1 + Math.random() * 0.2);
          break;
        case 2: // top-left to bottom-right diagonal
          this.x = -60;
          this.y = -60;
          this.angle = 0.3 + Math.random() * 0.4;
          break;
        case 3: // top-right to bottom-left diagonal
          this.x = canvas.width + 60;
          this.y = -60;
          this.angle = Math.PI - 0.3 - Math.random() * 0.4;
          break;
      }
    }

    update() {
      this.tick++;
      const wobble = Math.sin(this.tick * this.wobbleFreq) * this.wobbleAmp;

      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed + wobble * 0.3;

      // Store trail point
      this.trail.push({ x: this.x, y: this.y, age: 0 });
      if (this.trail.length > this.trailMax) this.trail.shift();
      this.trail.forEach(p => p.age++);

      // Check if out of bounds
      if (this.x < -150 || this.x > canvas.width + 150 ||
          this.y < -150 || this.y > canvas.height + 150) {
        this.reset();
      }
    }

    drawTrail() {
      if (this.trail.length < 2) return;
      for (let i = 1; i < this.trail.length; i++) {
        const p0 = this.trail[i - 1];
        const p1 = this.trail[i];
        const progress = i / this.trail.length;
        const alpha = progress * this.opacity * 0.6;
        const width = progress * 2.5;

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = `rgba(${this.glowColor}, ${alpha})`;
        ctx.lineWidth = width;
        ctx.stroke();
      }

      // Glow trail at end
      const last = this.trail[this.trail.length - 1];
      const glowGrad = ctx.createRadialGradient(last.x, last.y, 0, last.x, last.y, 8);
      glowGrad.addColorStop(0, `rgba(${this.glowColor}, ${this.opacity * 0.5})`);
      glowGrad.addColorStop(1, `rgba(${this.glowColor}, 0)`);
      ctx.beginPath();
      ctx.arc(last.x, last.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();
    }

    drawJet() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.globalAlpha = this.opacity;

      const s = this.size;

      // Afterburner glow
      const abGrad = ctx.createRadialGradient(-s * 0.8, 0, 0, -s * 0.8, 0, s * 0.6 * this.afterburner);
      abGrad.addColorStop(0, `rgba(${this.glowColor}, 0.6)`);
      abGrad.addColorStop(0.5, `rgba(${this.glowColor}, 0.2)`);
      abGrad.addColorStop(1, `rgba(${this.glowColor}, 0)`);
      ctx.beginPath();
      ctx.arc(-s * 0.8, 0, s * 0.6 * this.afterburner, 0, Math.PI * 2);
      ctx.fillStyle = abGrad;
      ctx.fill();

      // Main fuselage
      ctx.beginPath();
      ctx.moveTo(s, 0);                    // nose
      ctx.lineTo(s * 0.5, -s * 0.08);      // upper nose
      ctx.lineTo(-s * 0.1, -s * 0.1);      // cockpit top
      ctx.lineTo(-s * 0.6, -s * 0.12);     // fuselage top
      ctx.lineTo(-s * 0.8, -s * 0.08);     // tail top
      ctx.lineTo(-s * 0.8, s * 0.08);      // tail bottom
      ctx.lineTo(-s * 0.6, s * 0.12);      // fuselage bottom
      ctx.lineTo(-s * 0.1, s * 0.1);       // cockpit bottom
      ctx.lineTo(s * 0.5, s * 0.08);       // lower nose
      ctx.closePath();
      ctx.fillStyle = `rgba(${this.glowColor}, 0.7)`;
      ctx.fill();
      ctx.strokeStyle = `rgba(${this.glowColor}, 0.9)`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Delta wings
      ctx.beginPath();
      ctx.moveTo(s * 0.1, -s * 0.1);
      ctx.lineTo(-s * 0.35, -s * 0.55);
      ctx.lineTo(-s * 0.55, -s * 0.45);
      ctx.lineTo(-s * 0.45, -s * 0.12);
      ctx.closePath();
      ctx.fillStyle = `rgba(${this.glowColor}, 0.5)`;
      ctx.fill();
      ctx.stroke();

      // Bottom wing (mirror)
      ctx.beginPath();
      ctx.moveTo(s * 0.1, s * 0.1);
      ctx.lineTo(-s * 0.35, s * 0.55);
      ctx.lineTo(-s * 0.55, s * 0.45);
      ctx.lineTo(-s * 0.45, s * 0.12);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Tail fins
      ctx.beginPath();
      ctx.moveTo(-s * 0.6, -s * 0.12);
      ctx.lineTo(-s * 0.75, -s * 0.35);
      ctx.lineTo(-s * 0.85, -s * 0.3);
      ctx.lineTo(-s * 0.8, -s * 0.1);
      ctx.closePath();
      ctx.fillStyle = `rgba(${this.glowColor}, 0.45)`;
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-s * 0.6, s * 0.12);
      ctx.lineTo(-s * 0.75, s * 0.35);
      ctx.lineTo(-s * 0.85, s * 0.3);
      ctx.lineTo(-s * 0.8, s * 0.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Cockpit canopy highlight
      ctx.beginPath();
      ctx.ellipse(s * 0.25, -s * 0.02, s * 0.15, s * 0.04, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.glowColor}, 0.9)`;
      ctx.fill();

      ctx.restore();
    }

    draw() {
      this.drawTrail();
      this.drawJet();
    }
  }

  // Create fleet of jets
  const jets = [];
  const JET_COUNT = 4;
  for (let i = 0; i < JET_COUNT; i++) {
    const jet = new FighterJet();
    // Stagger spawn positions so they don't all appear at once
    jet.x += Math.random() * canvas.width * 0.5;
    jet.y = Math.random() * canvas.height;
    jets.push(jet);
  }

  // Spawn new jets at random intervals
  let spawnTimer = 0;
  const spawnInterval = 300 + Math.random() * 400; // frames

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    spawnTimer++;
    if (spawnTimer > spawnInterval && jets.length < 6) {
      jets.push(new FighterJet());
      spawnTimer = 0;
    }

    // Remove excess jets that have gone off-screen to prevent memory bloat
    while (jets.length > 8) jets.shift();

    jets.forEach(jet => {
      jet.update();
      jet.draw();
    });

    requestAnimationFrame(animate);
  }

  // Start animation after preloader finishes (delay a bit)
  setTimeout(() => {
    animate();
  }, 2000);
})();
