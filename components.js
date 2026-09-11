/* ============================================================
   components.js — Semua HTML component sebagai string konstanta
   Tidak butuh server — aman untuk file:// protocol
   ============================================================ */
const COMP_NAVBAR = `
<!-- ========================================================
     navbar.html — Navbar, mobile menu
     ======================================================== -->
<nav id="navbar">
  <div class="nav-logo"><span></span></div>
  <ul class="nav-links">
    <li><a href="#skills"         data-i18n="nav.skills">Keahlian</a></li>
    <li><a href="#projects"       data-i18n="nav.projects">Proyek</a></li>
    <li><a href="#experience"     data-i18n="nav.experience">Pengalaman</a></li>
    <li><a href="#certifications" data-i18n="nav.certifications">Sertifikasi</a></li>
    <li><a href="#contact"        data-i18n="nav.contact">Kontak</a></li>
  </ul>
  <div class="nav-right">
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
      <span class="icon-sun">☀️</span>
      <span class="icon-moon">🌙</span>
    </button>
    <div class="lang-toggle" id="langToggle" role="button" aria-label="Switch language" tabindex="0">
      <div class="lang-toggle-track">
        <span class="lang-opt active" id="optID">ID</span>
        <span class="lang-opt"        id="optEN">EN</span>
        <div class="lang-toggle-thumb"></div>
      </div>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a href="#skills"         class="mobile-link" data-i18n="nav.skills">Keahlian</a>
  <a href="#projects"       class="mobile-link" data-i18n="nav.projects">Proyek</a>
  <a href="#experience"     class="mobile-link" data-i18n="nav.experience">Pengalaman</a>
  <a href="#certifications" class="mobile-link" data-i18n="nav.certifications">Sertifikasi</a>
  <a href="#contact"        class="mobile-link" data-i18n="nav.contact">Kontak</a>
</div>
`;

const COMP_HERO = `
<!-- ========================================================
     hero.html — Hero section
     ======================================================== -->
<section id="hero">
  <div class="hero-inner">
    <div class="hero-left">
      <p class="hero-eyebrow" data-i18n="hero.eyebrow">// Halo, saya</p>
      <h1 class="hero-name">Raden Akbar<br /><em>Agung Gumilang</em></h1>
      <div class="hero-terminal">
        <span class="prompt">$</span>
        <span id="typed-text"></span><span class="cursor"></span>
      </div>
      <p class="hero-desc" data-i18n="hero.desc">
        Full Stack Developer dengan pengalaman membangun sistem keuangan pemerintah dan platform enterprise menggunakan Java Spring Boot, Go (Gin/GORM), Angular, dan Oracle Database. Berpengalaman sebagai mentor dan fasilitator coding camp berskala nasional, serta aktif memimpin komunitas pengembang perangkat lunak di lingkungan kampus.
      </p>
      <div class="hero-cta">
        <button class="btn btn-primary" id="cvModalTrigger" data-i18n="hero.cta.cv">⬇ Download CV</button>
        <a href="#projects" class="btn btn-ghost" data-i18n="hero.cta.projects">Lihat Proyek →</a>
        <a href="#contact"  class="btn btn-ghost" data-i18n="hero.cta.contact">Hubungi Saya</a>
      </div>
    </div>
    <div class="hero-photo-wrap">
      <div class="photo-frame">
        <img src="profile.JPG" alt="Foto Profile"/>
      </div>
    </div>
  </div>
</section>
`;

const COMP_SKILLS = `
<!-- ========================================================
     skills.html — Section 01: Keahlian
     ======================================================== -->
<section id="skills">
  <div class="inner">
    <div class="reveal">
      <div class="section-label" data-i18n="skills.label">01 — Keahlian</div>
      <h2 class="section-title" data-i18n="skills.title">Teknologi yang saya kuasai</h2>
      <div class="divider"></div>
    </div>

    <!-- Baris 1: Bahasa Pemrograman + Framework -->
    <div class="tech-row reveal">
      <div class="tech-group">
        <div class="tech-group-label" data-i18n="skills.lang">Bahasa Pemrograman</div>
        <div class="tech-grid">
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/><span>JavaScript</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"/><span>PHP</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript"/><span>TypeScript</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"/><span>Java</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Golang"/><span>Golang</span></div>
        </div>
      </div>
      <div class="tech-group">
        <div class="tech-group-label" data-i18n="skills.framework">Framework</div>
        <div class="tech-grid">
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular"/><span>Angular</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js"/><span>React.js</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS"/><span>TailwindCSS</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel"/><span>Laravel</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot"/><span>Spring Boot</span></div>
        </div>
      </div>
    </div>

    <!-- Baris 2: Database + Tools -->
    <div class="tech-row reveal">
      <div class="tech-group">
        <div class="tech-group-label" data-i18n="skills.database">Database</div>
        <div class="tech-grid">
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="Oracle"/><span>Oracle</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"/><span>MySQL</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL"/><span>PostgreSQL</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite"/><span>SQLite</span></div>
        </div>
      </div>
      <div class="tech-group">
        <div class="tech-group-label" data-i18n="skills.tools">Tools &amp; Platform</div>
        <div class="tech-grid">
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"/><span>Git</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/><span>GitHub</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="GitLab"/><span>GitLab</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma"/><span>Figma</span></div>
          <div class="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code"/><span>VS Code</span></div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const COMP_PROJECTS = `
<!-- ========================================================
     projects.html — Section 02: Proyek
     ======================================================== -->
<section id="projects">
  <div class="reveal">
    <div class="section-label" data-i18n="projects.label">02 — Proyek</div>
    <h2 class="section-title" data-i18n="projects.title">Yang pernah saya bangun</h2>
    <div class="divider"></div>
  </div>
  <div class="projects-grid">

    <!-- PROJ_01: KeloLa Keuangan -->
    <div class="project-card project-card-featured reveal">
      <div class="project-screenshots" id="slider-kelola">
        <div class="screenshots-track" data-gallery="kelola">
          <img src="projek01-dashboard.png" alt="Dashboard KeloLa Keuangan" class="gallery-img" data-gallery="kelola" data-idx="0"/>
          <img src="projek01-cetak.png"     alt="Laporan Keuangan KeloLa"   class="gallery-img" data-gallery="kelola" data-idx="1"/>
          <img src="projek01-transaksi.png" alt="Transaksi KeloLa Keuangan" class="gallery-img" data-gallery="kelola" data-idx="2"/>
        </div>
        <div class="screenshots-dots">
          <button class="dot-btn active" data-idx="0"></button>
          <button class="dot-btn"        data-idx="1"></button>
          <button class="dot-btn"        data-idx="2"></button>
        </div>
        <button class="screenshots-expand" data-gallery="kelola" data-idx="0" aria-label="Fullscreen">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
        </button>
      </div>
      <div class="project-header" style="padding-top:1.5rem">
        <span class="project-num">PROJ_01</span>
        <a href="https://github.com/ivillop/finance-app" target="_blank" class="project-link">↗ GitHub</a>
      </div>
      <div class="project-body">
        <div class="project-title" data-i18n="proj1.title">KeloLa Keuangan — Personal Finance App</div>
        <div class="project-desc"  data-i18n="proj1.desc">Aplikasi keuangan pribadi full-stack dengan JWT Auth. Catat pemasukan &amp; pengeluaran, kelola kategori (CRUD + icon emoji), atur budget bulanan dengan progress bar &amp; indikator sisa budget, serta dashboard grafik tren 6 bulan (line chart) dan pengeluaran per kategori (donut chart). Laporan keuangan bulanan bisa dicetak atau disimpan sebagai PDF langsung dari browser menggunakan CSS @media print — tanpa library tambahan.</div>
        <div class="project-feature-list">
          <span class="pf-item">🔐 JWT Auth</span>
          <span class="pf-item" data-i18n="proj1.f1">📊 Dashboard &amp; Charts</span>
          <span class="pf-item" data-i18n="proj1.f2">💰 Budget Tracker</span>
          <span class="pf-item" data-i18n="proj1.f3">🖨️ Cetak / Export PDF</span>
          <span class="pf-item" data-i18n="proj1.f4">📁 CRUD Kategori &amp; Transaksi</span>
          <span class="pf-item" data-i18n="proj1.f5">📱 Responsive Sidebar</span>
        </div>
        <div class="project-stack" style="margin-top:1rem">
          <span class="tag">Angular 21</span><span class="tag">Go Gin</span><span class="tag">GORM</span><span class="tag">SQLite</span><span class="tag">Chart.js</span><span class="tag">JWT</span>
        </div>
      </div>
    </div>

    <!-- PROJ_02: Dashboard Monitoring Real-time -->
    <div class="project-card project-card-featured reveal">
      <div class="project-screenshots" id="slider-realtime">
        <div class="screenshots-track" id="track-realtime">
          <img src="projek02-realtime01.png" alt="Dashboard Monitoring Real-time" class="gallery-img" data-gallery="realtime" data-idx="0"/>
          <img src="projek02-realtime02.png" alt="Live Ticker Transaksi"          class="gallery-img" data-gallery="realtime" data-idx="1"/>
          <img src="projek02-realtime03.png" alt="Alert Panel Anomali"            class="gallery-img" data-gallery="realtime" data-idx="2"/>
        </div>
        <div class="screenshots-dots">
          <button class="dot-btn-rt active" data-idx="0"></button>
          <button class="dot-btn-rt"        data-idx="1"></button>
          <button class="dot-btn-rt"        data-idx="2"></button>
        </div>
        <button class="screenshots-expand" data-gallery="realtime" data-idx="0" aria-label="Fullscreen">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
        </button>
      </div>
      <div class="project-header" style="padding-top:1.5rem">
        <span class="project-num">PROJ_02</span>
        <a href="https://github.com/ivillop/transaction-monitoring-realtime" target="_blank" class="project-link">↗ GitHub</a>
      </div>
      <div class="project-body">
        <div class="project-title" data-i18n="proj2.title">Dashboard Monitoring &amp; Analitik Real-time</div>
        <div class="project-desc"  data-i18n="proj2.desc">Starter project monitoring transaksi keuangan berbasis WebSocket/STOMP native (tanpa SockJS). Backend Spring Boot otomatis generate transaksi dummy tiap 4 detik dan broadcast ke frontend Angular 21 — tanpa polling manual. Angular Signals dipakai untuk reaktivitas UI: liveTransactions, latestSummary, dan alerts update otomatis saat data WebSocket masuk. Database SQLite, siap diganti Oracle/PostgreSQL untuk production.</div>
        <div class="project-feature-list">
          <span class="pf-item" data-i18n="proj2.f1">⚡ WebSocket STOMP Real-time</span>
          <span class="pf-item" data-i18n="proj2.f2">🔔 Alert Anomali Otomatis</span>
          <span class="pf-item" data-i18n="proj2.f3">📈 Trend Chart 30 Hari</span>
          <span class="pf-item">🍩 Category Breakdown</span>
          <span class="pf-item" data-i18n="proj2.f4">🔄 Auto-reconnect</span>
          <span class="pf-item" data-i18n="proj2.f5">📡 Live Status Indicator</span>
        </div>
        <div class="project-stack" style="margin-top:1rem">
          <span class="tag">Spring Boot</span><span class="tag">WebSocket</span><span class="tag">STOMP</span><span class="tag">Angular 21</span><span class="tag">Signals</span><span class="tag">Chart.js</span><span class="tag">SQLite</span>
        </div>
      </div>
    </div>

    <!-- PROJ_03: Toko Mini -->
    <div class="project-card project-card-featured reveal">
      <div class="project-screenshots" id="slider-ecommerce">
        <div class="screenshots-track" id="track-ecommerce">
          <img src="projek03-toko.jpg"      alt="Halaman Toko & Katalog Produk" class="gallery-img" data-gallery="ecommerce" data-idx="0"/>
          <img src="projek03-keranjang.jpg" alt="Keranjang Belanja & Checkout"  class="gallery-img" data-gallery="ecommerce" data-idx="1"/>
          <img src="projek03-admin.jpg"     alt="Panel Admin Dashboard"         class="gallery-img" data-gallery="ecommerce" data-idx="2"/>
        </div>
        <div class="screenshots-dots">
          <button class="dot-btn-ec active" data-idx="0"></button>
          <button class="dot-btn-ec"        data-idx="1"></button>
          <button class="dot-btn-ec"        data-idx="2"></button>
        </div>
        <button class="screenshots-expand" data-gallery="ecommerce" data-idx="0" aria-label="Fullscreen">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
        </button>
      </div>
      <div class="project-header" style="padding-top:1.5rem">
        <span class="project-num">PROJ_03</span>
        <a href="https://github.com/ivillop/ecommerce-mini" target="_blank" class="project-link">↗ GitHub</a>
      </div>
      <div class="project-body">
        <div class="project-title" data-i18n="proj3.title">Toko Mini — E-Commerce Mini</div>
        <div class="project-desc"  data-i18n="proj3.desc">Proyek portofolio e-commerce sederhana dengan katalog produk, keranjang belanja berbasis session, checkout terintegrasi Midtrans Snap (popup pembayaran), webhook otomatis untuk update status pesanan, riwayat &amp; detail pesanan customer, serta panel admin lengkap dengan dashboard ringkas dan CRUD produk (termasuk upload gambar). Dibangun dengan Laravel 13 + Blade templating + TailwindCSS via CDN — tanpa build step, siap dijalankan langsung.</div>
        <div class="project-feature-list">
          <span class="pf-item" data-i18n="proj3.f1">🛒 Keranjang &amp; Checkout</span>
          <span class="pf-item">💳 Midtrans Snap</span>
          <span class="pf-item" data-i18n="proj3.f2">🔔 Webhook Otomatis</span>
          <span class="pf-item" data-i18n="proj3.f3">🛠️ Panel Admin</span>
          <span class="pf-item" data-i18n="proj3.f4">📦 CRUD Produk &amp; Kategori</span>
          <span class="pf-item" data-i18n="proj3.f5">🔐 Role-based Access</span>
        </div>
        <div class="project-stack" style="margin-top:1rem">
          <span class="tag">Laravel 13</span><span class="tag">PHP</span><span class="tag">TailwindCSS</span><span class="tag">Blade</span><span class="tag">SQLite</span><span class="tag">Midtrans</span>
        </div>
      </div>
    </div>

  </div>
</section>
`;

const COMP_EXPERIENCE = `
<!-- ========================================================
     experience.html — Section 03: Pengalaman
     ======================================================== -->
<section id="experience">
  <div class="reveal">
    <div class="section-label" data-i18n="exp.label">03 — Pengalaman</div>
    <h2 class="section-title" data-i18n="exp.title">Perjalanan karier</h2>
    <div class="divider"></div>
  </div>

  <!-- Pengalaman Kerja -->
  <div class="exp-category reveal">
    <div class="exp-category-label"><span class="exp-cat-icon">💼</span> <span data-i18n="exp.work">Pengalaman Kerja</span></div>
    <div class="exp-list">
      <div class="exp-item reveal">
        <div class="exp-period">Des 2025 — Jun 2026<br/><small style="color:var(--muted);font-size:0.65rem;" data-i18n="exp.6mo">(6 Bulan)</small></div>
        <div>
          <div class="exp-role" data-i18n="exp.w1.role">Intern Full Stack Developer</div>
          <div class="exp-company">Tabel Data Informatika — via Maganghub Kemnaker Batch 3</div>
          <div class="exp-bullets">
            <div class="exp-bullet" data-i18n="exp.w1.b1">Mengembangkan modul sistem keuangan pemerintah berbasis Java Spring Boot, Angular, dan Oracle Database, mencakup fitur pelaporan dan manajemen data transaksi selama program magang 6 bulan.</div>
            <div class="exp-bullet" data-i18n="exp.w1.b2">Berkolaborasi dengan tim lintas divisi untuk menerjemahkan kebutuhan bisnis menjadi fitur aplikasi dan menyelesaikan task sesuai prioritas proyek.</div>
          </div>
        </div>
      </div>
      <div class="exp-item reveal">
        <div class="exp-period">Jan — Apr 2026<br/><small style="color:var(--muted);font-size:0.65rem;" data-i18n="exp.4mo">(4 Bulan)</small></div>
        <div>
          <div class="exp-role" data-i18n="exp.w2.role">Facilitator</div>
          <div class="exp-company">Coding Camp 2026 Powered by DBS Foundation – SMK</div>
          <div class="exp-bullets">
            <div class="exp-bullet" data-i18n="exp.w2.b1">Membimbing 25 siswa SMK dalam jalur pembelajaran Full-Stack Web Developer selama 4 bulan, memastikan setiap peserta memahami kurikulum dan menyelesaikan seluruh modul di platform Dicoding tepat waktu.</div>
            <div class="exp-bullet" data-i18n="exp.w2.b2">Berkoordinasi dengan instruktur untuk memantau progres peserta dan memberikan pengingat penyelesaian tugas secara berkala.</div>
          </div>
        </div>
      </div>
      <div class="exp-item reveal">
        <div class="exp-period">Jan — Jun 2025<br/><small style="color:var(--muted);font-size:0.65rem;" data-i18n="exp.6mo">(6 Bulan)</small></div>
        <div>
          <div class="exp-role" data-i18n="exp.w3.role">Mentor Class</div>
          <div class="exp-company">Coding Camp 2025 Powered by DBS Foundation – Universitas</div>
          <div class="exp-bullets">
            <div class="exp-bullet" data-i18n="exp.w3.b1">Membimbing 25 mahasiswa dalam jalur pembelajaran Full-Stack Web Developer selama 6 bulan, memandu peserta menuntaskan kurikulum Dicoding dan konsultasi teknis berkala.</div>
            <div class="exp-bullet" data-i18n="exp.w3.b2">Memantau progres studi mahasiswa dan memberikan motivasi serta pengingat penyelesaian tugas agar seluruh peserta dapat menyelesaikan program tepat waktu.</div>
          </div>
        </div>
      </div>
      <div class="exp-item reveal">
        <div class="exp-period">Jul — Des 2023<br/><small style="color:var(--muted);font-size:0.65rem;" data-i18n="exp.6mo">(6 Bulan)</small></div>
        <div>
          <div class="exp-role" data-i18n="exp.w4.role">Peserta Studi Independen Bersertifikat (SIB)</div>
          <div class="exp-company">Dicoding x Kampus Merdeka — Cycle 5</div>
          <div class="exp-bullets">
            <div class="exp-bullet" data-i18n="exp.w4.b1">Mengikuti program intensif jalur Front-End Web dan Back-End sebagai mahasiswa semester 5, setara 20 SKS dalam kurikulum Merdeka Belajar Kampus Merdeka (MBKM).</div>
            <div class="exp-bullet" data-i18n="exp.w4.b2">Membangun proyek akhir berbasis web sebagai penilaian kompetensi akhir program.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pendidikan -->
  <div class="exp-category reveal">
    <div class="exp-category-label"><span class="exp-cat-icon">🎓</span> <span data-i18n="exp.education">Pendidikan</span></div>
    <div class="exp-list">
      <div class="exp-item reveal">
        <div class="exp-period">2021 — 2025</div>
        <div>
          <div class="exp-role" data-i18n="exp.e1.role">Teknik Informatika</div>
          <div class="exp-company">STMIK Mardira Indonesia</div>
          <div class="exp-bullets"><div class="exp-bullet">GPA / IPK: <strong>3.70 / 4.00</strong></div></div>
        </div>
      </div>
      <div class="exp-item reveal">
        <div class="exp-period">2017 — 2020</div>
        <div>
          <div class="exp-role" data-i18n="exp.e2.role">SMA / Senior High School</div>
          <div class="exp-company">SMA Muhammadiyah 4 Margahayu</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Organisasi -->
  <div class="exp-category reveal">
    <div class="exp-category-label"><span class="exp-cat-icon">🤝</span> <span data-i18n="exp.org">Pengalaman Organisasi</span></div>
    <div class="exp-list">
      <div class="exp-item reveal">
        <div class="exp-period">2022 — 2024</div>
        <div>
          <div class="exp-role" data-i18n="exp.o1.role">Ketua Divisi Pemrograman</div>
          <div class="exp-company">Creative Student Association</div>
          <div class="exp-bullets">
            <div class="exp-bullet" data-i18n="exp.o1.b1">Memimpin divisi pemrograman dan merancang program belajar coding berkala untuk anggota aktif organisasi.</div>
            <div class="exp-bullet" data-i18n="exp.o1.b2">Menyusun materi pembelajaran dan melakukan pendampingan praktik pemrograman secara rutin.</div>
          </div>
        </div>
      </div>
      <div class="exp-item reveal">
        <div class="exp-period">2021 — 2022</div>
        <div>
          <div class="exp-role" data-i18n="exp.o2.role">Anggota</div>
          <div class="exp-company">Creative Student Association</div>
          <div class="exp-bullets">
            <div class="exp-bullet" data-i18n="exp.o2.b1">Berpartisipasi aktif dalam kegiatan organisasi dan proyek pengembangan perangkat lunak bersama anggota.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const COMP_CERTIFICATIONS = `
<!-- ========================================================
     certifications.html — Section 04: Sertifikasi
     ======================================================== -->
<section id="certifications">
  <div class="reveal">
    <div class="section-label" data-i18n="cert.label">04 — Sertifikasi</div>
    <h2 class="section-title" data-i18n="cert.title">Sertifikat yang saya miliki</h2>
    <div class="divider"></div>
  </div>
  <div class="cert-grid reveal">
    <div class="cert-card">
      <div class="cert-img-wrap">
        <img src="sertif-mentor-dbs.jpg" alt="Certificate of Appreciation — Mentor Coding Camp 2025 DBS Foundation" class="cert-img cert-gallery-img" data-gallery="certs" data-idx="0"/>
        <div class="cert-overlay"><span class="cert-zoom-icon" data-i18n="cert.view">🔍 Lihat</span></div>
      </div>
      <div class="cert-info">
        <div class="cert-title">Certificate of Appreciation</div>
        <div class="cert-issuer">Dicoding × DBS Foundation</div>
        <div class="cert-meta" data-i18n="cert.c1.meta">Mentor · Coding Camp 2025 · Jul 2025</div>
      </div>
    </div>
    <div class="cert-card">
      <div class="cert-img-wrap">
        <img src="sertif-fasilitator-dbs.jpg" alt="Certificate of Appreciation — Facilitator Coding Camp 2026 DBS Foundation" class="cert-img cert-gallery-img" data-gallery="certs" data-idx="1"/>
        <div class="cert-overlay"><span class="cert-zoom-icon" data-i18n="cert.view">🔍 Lihat</span></div>
      </div>
      <div class="cert-info">
        <div class="cert-title">Certificate of Appreciation</div>
        <div class="cert-issuer">Dicoding × DBS Foundation</div>
        <div class="cert-meta" data-i18n="cert.c2.meta">Facilitator · Coding Camp 2026 · Mei 2026</div>
      </div>
    </div>
    <div class="cert-card">
      <div class="cert-img-wrap">
        <img src="sertif-maganghub.jpg" alt="Sertifikat Maganghub Kemnaker — Full Stack Developer Internship" class="cert-img cert-gallery-img" data-gallery="certs" data-idx="2"/>
        <div class="cert-overlay"><span class="cert-zoom-icon" data-i18n="cert.view">🔍 Lihat</span></div>
      </div>
      <div class="cert-info">
        <div class="cert-title" data-i18n="cert.c3.title">Sertifikat Pemagangan</div>
        <div class="cert-issuer">Kemnaker × Tabel Data Informatika</div>
        <div class="cert-meta" data-i18n="cert.c3.meta">Full Stack Developer · Batch 3 · Jun 2026</div>
      </div>
    </div>
    <div class="cert-card">
      <div class="cert-img-wrap">
        <img src="sertif-dicoding-sib.jpg" alt="Sertifikat Kelulusan SIB Dicoding — Front-End Web & Back-End" class="cert-img cert-gallery-img" data-gallery="certs" data-idx="3"/>
        <div class="cert-overlay"><span class="cert-zoom-icon" data-i18n="cert.view">🔍 Lihat</span></div>
      </div>
      <div class="cert-info">
        <div class="cert-title" data-i18n="cert.c4.title">Sertifikat Kelulusan SIB</div>
        <div class="cert-issuer">Dicoding × Kampus Merdeka</div>
        <div class="cert-meta" data-i18n="cert.c4.meta">Front-End &amp; Back-End · Angkatan 5 · Des 2023</div>
      </div>
    </div>
  </div>
</section>
`;

const COMP_CONTACT = `
<!-- ========================================================
     contact.html — Section 05: Kontak, Footer, Modals
     ======================================================== -->
<section id="contact">
  <div class="inner reveal">
    <div class="section-label" style="justify-content:center" data-i18n="contact.label">05 — Kontak</div>
    <h2 class="contact-title">
      <span data-i18n="contact.title.1">Mari</span> <span class="accent-word" data-i18n="contact.title.2">bekerja sama</span>
    </h2>
    <p class="contact-sub" data-i18n="contact.sub">Punya proyek menarik atau butuh developer berpengalaman di sistem keuangan enterprise? Saya terbuka untuk diskusi.</p>
    <div class="contact-links">
      <button class="btn btn-primary" id="cvModalTrigger2" data-i18n="hero.cta.cv">⬇ Download CV</button>
    </div>
    <div class="contact-links">
      <a href="mailto:rd.akbar@yandex.com" class="contact-social" data-i18n="contact.email">Email</a>
      <a href="https://github.com/ivillop"           target="_blank" class="contact-social">GitHub</a>
      <a href="https://www.linkedin.com/in/ivillop/" target="_blank" class="contact-social">LinkedIn</a>
      <a href="https://wa.link/mqe3ym"               target="_blank" class="contact-social">WhatsApp</a>
    </div>
  </div>
</section>

<!-- Footer -->
<footer>
  <div class="footer-text">© 2026 <span>Raden Akbar A. Gumilang</span> — <span data-i18n="footer.built">Dibangun dengan HTML, CSS &amp; JS</span></div>
  <div class="footer-text">Bandung, <span>Jawa Barat</span> 🇮🇩</div>
</footer>

<!-- CV Download Modal -->
<div class="cv-modal-overlay" id="cvModal" role="dialog" aria-modal="true" aria-labelledby="cvModalTitle">
  <div class="cv-modal">
    <button class="cv-modal-close" id="cvModalClose" aria-label="Tutup">&#x2715;</button>
    <div class="cv-modal-icon">📄</div>
    <h3 class="cv-modal-title" id="cvModalTitle" data-i18n="cv.modal.title">Pilih Bahasa CV</h3>
    <p class="cv-modal-sub" data-i18n="cv.modal.sub">Download CV dalam bahasa yang kamu inginkan</p>
    <div class="cv-modal-options">
      <a href="CV_Raden_Akbar_A_Gumilang.pdf" download class="cv-option">
        <span class="cv-option-flag">ID</span>
        <span class="cv-option-lang" data-i18n="cv.modal.id">Bahasa Indonesia</span>
        <span class="cv-option-arrow">↓</span>
      </a>
      <a href="CV_Raden_Akbar_A_Gumilang_EN.pdf" download class="cv-option">
        <span class="cv-option-flag">EN</span>
        <span class="cv-option-lang" data-i18n="cv.modal.en">English</span>
        <span class="cv-option-arrow">↓</span>
      </a>
    </div>
  </div>
</div>

<!-- Lightbox Modal -->
<div class="lb-overlay" id="lbOverlay" role="dialog" aria-modal="true">
  <button class="lb-close" id="lbClose" aria-label="Tutup">&#x2715;</button>
  <button class="lb-arrow lb-prev" id="lbPrev" aria-label="Sebelumnya">&#8592;</button>
  <div class="lb-content">
    <img class="lb-img" id="lbImg" src="" alt=""/>
    <div class="lb-caption" id="lbCaption"></div>
    <div class="lb-dots"    id="lbDots"></div>
  </div>
  <button class="lb-arrow lb-next" id="lbNext" aria-label="Selanjutnya">&#8594;</button>
</div>
`;