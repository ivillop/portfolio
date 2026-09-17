// ── Component Loader ──
// Inject HTML component langsung dari konstanta di components.js
// Tidak butuh server — aman untuk file:// protocol
(function loadComponents() {
  const map = [
    { id: "app-navbar",         html: COMP_NAVBAR         },
    { id: "app-hero",           html: COMP_HERO           },
    { id: "app-skills",         html: COMP_SKILLS         },
    { id: "app-projects",       html: COMP_PROJECTS       },
    { id: "app-experience",     html: COMP_EXPERIENCE     },
    { id: "app-certifications", html: COMP_CERTIFICATIONS },
    { id: "app-contact",        html: COMP_CONTACT        },
  ];

  map.forEach(({ id, html }) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.outerHTML = html;
  });

  initApp();
})();

function initApp() {

// ── i18n Language Switcher ──
const translations = {
  id: {
    // Nav
    "nav.skills":          "Keahlian",
    "nav.projects":        "Proyek",
    "nav.experience":      "Pengalaman",
    "nav.certifications":  "Sertifikasi",
    "nav.contact":         "Kontak",
    // Hero
    "hero.eyebrow":        "// Halo, saya",
    "hero.desc":           "Full Stack Developer dengan pengalaman membangun sistem keuangan pemerintah dan platform enterprise menggunakan Java Spring Boot, Go (Gin/GORM), Angular, dan Oracle Database. Berpengalaman sebagai mentor dan fasilitator coding camp berskala nasional, serta aktif memimpin komunitas pengembang perangkat lunak di lingkungan kampus.",
    "hero.cta.projects":   "Lihat Proyek →",
    "hero.cta.contact":    "Hubungi Saya",
    "hero.cta.cv":         "⬇ Download CV",
    // Skills
    "skills.label":        "01 — Keahlian",
    "skills.title":        "Teknologi yang saya kuasai",
    "skills.lang":         "Bahasa Pemrograman",
    "skills.framework":    "Framework",
    "skills.database":     "Database",
    "skills.tools":        "Tools & Platform",
    // Projects
    "projects.label":      "02 — Proyek",
    "projects.title":      "Yang pernah saya bangun",
    "proj1.title":         "KeloLa Keuangan — Personal Finance App",
    "proj1.desc":          "Aplikasi keuangan pribadi full-stack dengan JWT Auth. Catat pemasukan & pengeluaran, kelola kategori (CRUD + icon emoji), atur budget bulanan dengan progress bar & indikator sisa budget, serta dashboard grafik tren 6 bulan (line chart) dan pengeluaran per kategori (donut chart). Laporan keuangan bulanan bisa dicetak atau disimpan sebagai PDF langsung dari browser menggunakan CSS @media print — tanpa library tambahan.",
    "proj1.f1":            "📊 Dashboard & Charts",
    "proj1.f2":            "💰 Budget Tracker",
    "proj1.f3":            "🖨️ Cetak / Export PDF",
    "proj1.f4":            "📁 CRUD Kategori & Transaksi",
    "proj1.f5":            "📱 Responsive Sidebar",
    "proj2.title":         "Dashboard Monitoring & Analitik Real-time",
    "proj2.desc":          "Starter project monitoring transaksi keuangan berbasis WebSocket/STOMP native (tanpa SockJS). Backend Spring Boot otomatis generate transaksi dummy tiap 4 detik dan broadcast ke frontend Angular 21 — tanpa polling manual. Angular Signals dipakai untuk reaktivitas UI: liveTransactions, latestSummary, dan alerts update otomatis saat data WebSocket masuk. Database SQLite, siap diganti Oracle/PostgreSQL untuk production.",
    "proj2.f1":            "⚡ WebSocket STOMP Real-time",
    "proj2.f2":            "🔔 Alert Anomali Otomatis",
    "proj2.f3":            "📈 Trend Chart 30 Hari",
    "proj2.f4":            "🔄 Auto-reconnect",
    "proj2.f5":            "📡 Live Status Indicator",
    "proj3.title":         "Toko Mini — E-Commerce Mini",
    "proj3.desc":          "Proyek portofolio e-commerce sederhana dengan katalog produk, keranjang belanja berbasis session, checkout terintegrasi Midtrans Snap (popup pembayaran), webhook otomatis untuk update status pesanan, riwayat & detail pesanan customer, serta panel admin lengkap dengan dashboard ringkas dan CRUD produk (termasuk upload gambar). Dibangun dengan Laravel 13 + Blade templating + TailwindCSS via CDN — tanpa build step, siap dijalankan langsung.",
    "proj3.f1":            "🛒 Keranjang & Checkout",
    "proj3.f2":            "🔔 Webhook Otomatis",
    "proj3.f3":            "🛠️ Panel Admin",
    "proj3.f4":            "📦 CRUD Produk & Kategori",
    "proj3.f5":            "🔐 Role-based Access",
    "proj4.title":         "Inventaris — Sistem Manajemen Inventaris",
    "proj4.desc":          "Aplikasi web manajemen inventaris barang dengan alur persetujuan dua tingkat (Staff → Manager → Admin), dibangun menggunakan ASP.NET Core MVC (.NET 8) sebagai proyek pembelajaran ekosistem .NET. Stok hanya berubah setelah persetujuan final Admin — pengajuan yang belum tuntas tidak memengaruhi angka stok. Seeder otomatis mengisi role, akun contoh, dan data dummy saat aplikasi pertama kali dijalankan.",
    "proj4.f1":            "📦 CRUD Kategori, Supplier & Barang",
    "proj4.f2":            "✅ Approval 2 Tingkat (Manager → Admin)",
    "proj4.f3":            "🔐 Role-based Access (Admin, Manager, Staff)",
    "proj4.f4":            "⚠️ Peringatan Stok Minimum",
    "proj4.f5":            "📊 Export Laporan ke Excel (.xlsx)",
    "proj4.f6":            "🌱 Seeder Otomatis Data & Akun",
    // Experience
    "exp.label":           "03 — Pengalaman",
    "exp.title":           "Perjalanan karier",
    "exp.work":            "Pengalaman Kerja",
    "exp.education":       "Pendidikan",
    "exp.org":             "Pengalaman Organisasi",
    "exp.6mo":             "(6 Bulan)",
    "exp.4mo":             "(4 Bulan)",
    "exp.w1.role":         "Intern Full Stack Developer",
    "exp.w1.b1":           "Mengembangkan modul sistem keuangan pemerintah berbasis Java Spring Boot, Angular, dan Oracle Database, mencakup fitur pelaporan dan manajemen data transaksi selama program magang 6 bulan.",
    "exp.w1.b2":           "Berkolaborasi dengan tim lintas divisi untuk menerjemahkan kebutuhan bisnis menjadi fitur aplikasi dan menyelesaikan task sesuai prioritas proyek.",
    "exp.w2.role":         "Facilitator",
    "exp.w2.b1":           "Membimbing 25 siswa SMK dalam jalur pembelajaran Full-Stack Web Developer selama 4 bulan, memastikan setiap peserta memahami kurikulum dan menyelesaikan seluruh modul di platform Dicoding tepat waktu.",
    "exp.w2.b2":           "Berkoordinasi dengan instruktur untuk memantau progres peserta dan memberikan pengingat penyelesaian tugas secara berkala.",
    "exp.w3.role":         "Mentor Class",
    "exp.w3.b1":           "Membimbing 25 mahasiswa dalam jalur pembelajaran Full-Stack Web Developer selama 6 bulan, memandu peserta menuntaskan kurikulum Dicoding dan konsultasi teknis berkala.",
    "exp.w3.b2":           "Memantau progres studi mahasiswa dan memberikan motivasi serta pengingat penyelesaian tugas agar seluruh peserta dapat menyelesaikan program tepat waktu.",
    "exp.w4.role":         "Peserta Studi Independen Bersertifikat (SIB)",
    "exp.w4.b1":           "Mengikuti program intensif jalur Front-End Web dan Back-End sebagai mahasiswa semester 5, setara 20 SKS dalam kurikulum Merdeka Belajar Kampus Merdeka (MBKM).",
    "exp.w4.b2":           "Membangun proyek akhir berbasis web sebagai penilaian kompetensi akhir program.",
    "exp.e1.role":         "Teknik Informatika",
    "exp.e2.role":         "SMA / Senior High School",
    "exp.o1.role":         "Ketua Divisi Pemrograman",
    "exp.o1.b1":           "Memimpin divisi pemrograman dan merancang program belajar coding berkala untuk anggota aktif organisasi.",
    "exp.o1.b2":           "Menyusun materi pembelajaran dan melakukan pendampingan praktik pemrograman secara rutin.",
    "exp.o2.role":         "Anggota",
    "exp.o2.b1":           "Berpartisipasi aktif dalam kegiatan organisasi dan proyek pengembangan perangkat lunak bersama anggota.",
    // Certifications
    "cert.label":          "04 — Sertifikasi",
    "cert.title":          "Sertifikat yang saya miliki",
    "cert.view":           "🔍 Lihat",
    "cert.c1.meta":        "Mentor · Coding Camp 2025 · Jul 2025",
    "cert.c2.meta":        "Facilitator · Coding Camp 2026 · Mei 2026",
    "cert.c3.title":       "Sertifikat Pemagangan",
    "cert.c3.meta":        "Full Stack Developer · Batch 3 · Jun 2026",
    "cert.c4.title":       "Sertifikat Kelulusan SIB",
    "cert.c4.meta":        "Front-End & Back-End · Angkatan 5 · Des 2023",
    // Contact
    "contact.label":       "05 — Kontak",
    "contact.title.1":     "Mari",
    "contact.title.2":     "bekerja sama",
    "contact.sub":         "Punya proyek menarik atau butuh developer berpengalaman di sistem keuangan enterprise? Saya terbuka untuk diskusi.",
    "contact.email":       "Email",
    // Footer
    "footer.built":        "Dibangun dengan HTML, CSS & JS",
    // CV Modal
    "cv.modal.title":      "Pilih Bahasa CV",
    "cv.modal.sub":        "Download CV dalam bahasa yang kamu inginkan",
    "cv.modal.id":         "Bahasa Indonesia",
    "cv.modal.en":         "English",
  },
  en: {
    // Nav
    "nav.skills":          "Skills",
    "nav.projects":        "Projects",
    "nav.experience":      "Experience",
    "nav.certifications":  "Certifications",
    "nav.contact":         "Contact",
    // Hero
    "hero.eyebrow":        "// Hi, I'm",
    "hero.desc":           "Full Stack Developer with experience building government financial systems and enterprise platforms using Java Spring Boot, Go (Gin/GORM), Angular, and Oracle Database. Experienced as a mentor and facilitator for national-scale coding camps, actively leading a software developer community on campus.",
    "hero.cta.projects":   "View Projects →",
    "hero.cta.contact":    "Contact Me",
    "hero.cta.cv":         "⬇ Download CV",
    // Skills
    "skills.label":        "01 — Skills",
    "skills.title":        "Technologies I work with",
    "skills.lang":         "Programming Languages",
    "skills.framework":    "Frameworks",
    "skills.database":     "Databases",
    "skills.tools":        "Tools & Platforms",
    // Projects
    "projects.label":      "02 — Projects",
    "projects.title":      "Things I've built",
    "proj1.title":         "KeloLa Keuangan — Personal Finance App",
    "proj1.desc":          "Full-stack personal finance app with JWT Auth. Track income & expenses, manage categories (CRUD + emoji icons), set monthly budgets with a progress bar & remaining budget indicator, and view a 6-month trend line chart and per-category donut chart. Monthly financial reports can be printed or saved as PDF directly from the browser using CSS @media print — no extra library needed.",
    "proj1.f1":            "📊 Dashboard & Charts",
    "proj1.f2":            "💰 Budget Tracker",
    "proj1.f3":            "🖨️ Print / Export PDF",
    "proj1.f4":            "📁 CRUD Categories & Transactions",
    "proj1.f5":            "📱 Responsive Sidebar",
    "proj2.title":         "Real-time Monitoring & Analytics Dashboard",
    "proj2.desc":          "Starter project for real-time financial transaction monitoring using native WebSocket/STOMP (no SockJS). The Spring Boot backend auto-generates dummy transactions every 4 seconds and broadcasts them to the Angular 21 frontend — no manual polling. Angular Signals power reactive UI: liveTransactions, latestSummary, and alerts update automatically when WebSocket data arrives. SQLite database, ready to swap for Oracle/PostgreSQL in production.",
    "proj2.f1":            "⚡ WebSocket STOMP Real-time",
    "proj2.f2":            "🔔 Automatic Anomaly Alerts",
    "proj2.f3":            "📈 30-Day Trend Chart",
    "proj2.f4":            "🔄 Auto-reconnect",
    "proj2.f5":            "📡 Live Status Indicator",
    "proj3.title":         "Toko Mini — Mini E-Commerce",
    "proj3.desc":          "Portfolio e-commerce project with product catalog, session-based cart, checkout integrated with Midtrans Snap (payment popup), automatic webhook for order status updates, customer order history & detail, and a full admin panel with a concise dashboard and product CRUD (including image upload). Built with Laravel 13 + Blade templating + TailwindCSS via CDN — no build step, ready to run out of the box.",
    "proj3.f1":            "🛒 Cart & Checkout",
    "proj3.f2":            "🔔 Automatic Webhook",
    "proj3.f3":            "🛠️ Admin Panel",
    "proj3.f4":            "📦 Product & Category CRUD",
    "proj3.f5":            "🔐 Role-based Access",
    "proj4.title":         "Inventaris — Inventory Management System",
    "proj4.desc":          "Web-based inventory management app with a two-tier approval flow (Staff → Manager → Admin), built with ASP.NET Core MVC (.NET 8) as a .NET ecosystem learning project. Stock only changes after final Admin approval — pending submissions do not affect stock figures. An auto-seeder populates roles, sample accounts, and dummy data on first run.",
    "proj4.f1":            "📦 CRUD Category, Supplier & Item",
    "proj4.f2":            "✅ 2-Tier Approval (Manager → Admin)",
    "proj4.f3":            "🔐 Role-based Access (Admin, Manager, Staff)",
    "proj4.f4":            "⚠️ Low Stock Warning",
    "proj4.f5":            "📊 Export Reports to Excel (.xlsx)",
    "proj4.f6":            "🌱 Auto-seeder for Data & Accounts",
    // Experience
    "exp.label":           "03 — Experience",
    "exp.title":           "Career journey",
    "exp.work":            "Work Experience",
    "exp.education":       "Education",
    "exp.org":             "Organizational Experience",
    "exp.6mo":             "(6 Months)",
    "exp.4mo":             "(4 Months)",
    "exp.w1.role":         "Intern Full Stack Developer",
    "exp.w1.b1":           "Developed government financial system modules using Java Spring Boot, Angular, and Oracle Database, covering reporting features and transaction data management during a 6-month internship.",
    "exp.w1.b2":           "Collaborated with cross-functional teams to translate business requirements into application features and completed tasks according to project priorities.",
    "exp.w2.role":         "Facilitator",
    "exp.w2.b1":           "Mentored 25 vocational high school students in the Full-Stack Web Developer learning path over 4 months, ensuring each participant understood the curriculum and completed all modules on the Dicoding platform on time.",
    "exp.w2.b2":           "Coordinated with instructors to monitor participant progress and provide task completion reminders on a regular basis.",
    "exp.w3.role":         "Mentor Class",
    "exp.w3.b1":           "Guided 25 university students through the Full-Stack Web Developer learning path over 6 months, helping them complete the Dicoding curriculum with regular technical consultations.",
    "exp.w3.b2":           "Monitored student study progress and provided motivation and task reminders to ensure all participants completed the program on time.",
    "exp.w4.role":         "Independent Study Program Participant (SIB)",
    "exp.w4.b1":           "Completed an intensive Front-End Web and Back-End program as a 5th-semester student, equivalent to 20 credits under the Merdeka Belajar Kampus Merdeka (MBKM) curriculum.",
    "exp.w4.b2":           "Built a final web-based project as the program's competency assessment.",
    "exp.e1.role":         "Informatics Engineering",
    "exp.e2.role":         "Senior High School",
    "exp.o1.role":         "Head of Programming Division",
    "exp.o1.b1":           "Led the programming division and designed a regular coding learning program for active organization members.",
    "exp.o1.b2":           "Compiled learning materials and conducted hands-on programming mentoring sessions on a routine basis.",
    "exp.o2.role":         "Member",
    "exp.o2.b1":           "Actively participated in organizational activities and software development projects alongside fellow members.",
    // Certifications
    "cert.label":          "04 — Certifications",
    "cert.title":          "Certificates I hold",
    "cert.view":           "🔍 View",
    "cert.c1.meta":        "Mentor · Coding Camp 2025 · Jul 2025",
    "cert.c2.meta":        "Facilitator · Coding Camp 2026 · May 2026",
    "cert.c3.title":       "Internship Certificate",
    "cert.c3.meta":        "Full Stack Developer · Batch 3 · Jun 2026",
    "cert.c4.title":       "Graduation Certificate SIB",
    "cert.c4.meta":        "Front-End & Back-End · Batch 5 · Dec 2023",
    // Contact
    "contact.label":       "05 — Contact",
    "contact.title.1":     "Let's",
    "contact.title.2":     "work together",
    "contact.sub":         "Have an interesting project or need an experienced developer in enterprise financial systems? I'm open for discussion.",
    "contact.email":       "Email",
    // Footer
    "footer.built":        "Built with HTML, CSS & JS",
    // CV Modal
    "cv.modal.title":      "Choose CV Language",
    "cv.modal.sub":        "Download my CV in your preferred language",
    "cv.modal.id":         "Bahasa Indonesia",
    "cv.modal.en":         "English",
  }
};

let currentLang = "id";

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
  // Update typed phrases
  typedPhrases = lang === "en" ? phrasesEN : phrasesID;
  // Update toggle pill
  const toggle = document.getElementById("langToggle");
  const optID  = document.getElementById("optID");
  const optEN  = document.getElementById("optEN");
  if (lang === "id") {
    toggle.classList.remove("en");
    optID.classList.add("active");
    optEN.classList.remove("active");
  } else {
    toggle.classList.add("en");
    optEN.classList.add("active");
    optID.classList.remove("active");
  }
  currentLang = lang;
}

const langToggleEl = document.getElementById("langToggle");
langToggleEl.addEventListener("click", () => {
  applyLang(currentLang === "id" ? "en" : "id");
});
langToggleEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    applyLang(currentLang === "id" ? "en" : "id");
  }
});

// ── Typed text (bilingual) ──
const phrasesID = [
  "Mentor Univ Coding Camp Powered by DBS Foundation 2025",
  "Facilitator SMK Coding Camp Powered by DBS Foundation 2026",
  "Maganghub Kemnaker Batch 3",
  "Mahasiswa STMIK Mardira Indonesia 2021",
];
const phrasesEN = [
  "Mentor — Coding Camp DBS Foundation 2025",
  "Facilitator — Coding Camp DBS Foundation 2026",
  "Maganghub Kemnaker Internship Batch 3",
  "Informatics Engineering Student 2021",
];
let typedPhrases = phrasesID;

let pIdx = 0, cIdx = 0, del = false;
const typedEl = document.getElementById("typed-text");
function type() {
  const cur = typedPhrases[pIdx % typedPhrases.length];
  if (!del) {
    typedEl.textContent = cur.slice(0, ++cIdx);
    if (cIdx === cur.length) {
      del = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = cur.slice(0, --cIdx);
    if (cIdx === 0) {
      del = false;
      pIdx = (pIdx + 1) % typedPhrases.length;
    }
  }
  setTimeout(type, del ? 38 : 68);
}
setTimeout(type, 1200);

// ── Dark mode toggle ──
const themeToggle = document.getElementById("themeToggle");
const savedTheme  = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") document.documentElement.setAttribute("data-theme", "dark");

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

// ── Hamburger ──
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});
document.querySelectorAll(".mobile-link").forEach((l) =>
  l.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
  }),
);

// ── Scroll reveal ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 70);
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ── Screenshot Sliders (independen per proyek) ──
function initSlider(trackSelector, dotSelector) {
  const track = document.querySelector(trackSelector);
  const dots  = document.querySelectorAll(dotSelector);
  if (!track || !dots.length) return;

  let current = 0, timer;

  function goTo(idx) {
    current = idx;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function startAuto() {
    timer = setInterval(() => goTo((current + 1) % dots.length), 3000);
  }

  dots.forEach((btn) => {
    btn.addEventListener("click", () => {
      clearInterval(timer);
      goTo(parseInt(btn.dataset.idx));
      startAuto();
    });
  });

  startAuto();
}

// PROJ_01 — KeloLa (dot-btn)
initSlider("#slider-kelola .screenshots-track", "#slider-kelola .dot-btn");
// PROJ_02 — Realtime (dot-btn-rt)
initSlider("#track-realtime", ".dot-btn-rt");
// PROJ_03 — Ecommerce (dot-btn-ec)
initSlider("#track-ecommerce", ".dot-btn-ec");
// PROJ_04 — Inventaris (dot-btn-inv)
initSlider("#track-inventaris", ".dot-btn-inv");

// ── CV Download Modal ──
(function () {
  const modal    = document.getElementById("cvModal");
  const closeBtn = document.getElementById("cvModalClose");
  if (!modal) return;

  function openModal() {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }
  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  // Trigger dari hero dan contact
  ["cvModalTrigger", "cvModalTrigger2"].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", openModal);
  });

  closeBtn.addEventListener("click", closeModal);

  // Klik backdrop tutup modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
})();

// ── Lightbox ──
(function () {
  const overlay   = document.getElementById("lbOverlay");
  const lbImg     = document.getElementById("lbImg");
  const lbCaption = document.getElementById("lbCaption");
  const lbDots    = document.getElementById("lbDots");
  const btnClose  = document.getElementById("lbClose");
  const btnPrev   = document.getElementById("lbPrev");
  const btnNext   = document.getElementById("lbNext");
  if (!overlay) return;

  // Kumpulkan gambar per gallery group
  const galleries = {};
  document.querySelectorAll(".gallery-img, .cert-gallery-img").forEach((img) => {
    const group = img.dataset.gallery;
    if (!galleries[group]) galleries[group] = [];
    galleries[group].push({ src: img.src, alt: img.alt });
  });

  let activeGallery = null;
  let activeIdx     = 0;

  function buildDots(count) {
    lbDots.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const d = document.createElement("button");
      d.className = "lb-dot" + (i === activeIdx ? " active" : "");
      d.setAttribute("aria-label", "Gambar " + (i + 1));
      d.addEventListener("click", () => goTo(i));
      lbDots.appendChild(d);
    }
  }

  function setDots(idx) {
    lbDots.querySelectorAll(".lb-dot")
      .forEach((d, i) => d.classList.toggle("active", i === idx));
  }

  function goTo(idx) {
    const imgs = galleries[activeGallery];
    if (!imgs) return;
    idx = Math.max(0, Math.min(idx, imgs.length - 1));
    activeIdx = idx;

    lbImg.classList.add("fading");
    setTimeout(() => {
      lbImg.src = imgs[idx].src;
      lbImg.alt = imgs[idx].alt;
      lbCaption.textContent = imgs[idx].alt;
      lbImg.classList.remove("fading");
    }, 160);

    setDots(idx);
    btnPrev.disabled = idx === 0;
    btnNext.disabled = idx === imgs.length - 1;
  }

  function open(gallery, idx) {
    if (!galleries[gallery]) return;   // guard: gallery belum terdaftar
    activeGallery = gallery;
    activeIdx     = idx;               // set dulu sebelum buildDots
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    buildDots(galleries[gallery].length);
    goTo(idx);
    btnClose.focus();
  }

  function close() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  // Project screenshots — klik gambar
  document.querySelectorAll(".gallery-img").forEach((img) => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      open(img.dataset.gallery, parseInt(img.dataset.idx));
    });
  });

  // Sertifikat — klik seluruh card (bukan gambar, supaya tidak double-fire)
  document.querySelectorAll(".cert-card").forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector(".cert-gallery-img");
      if (img) open(img.dataset.gallery, parseInt(img.dataset.idx));
    });
  });

  // Expand button (ikon fullscreen di project card)
  document.querySelectorAll(".screenshots-expand").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      open(btn.dataset.gallery, parseInt(btn.dataset.idx));
    });
  });

  btnClose.addEventListener("click", close);
  btnPrev.addEventListener("click", () => goTo(activeIdx - 1));
  btnNext.addEventListener("click", () => goTo(activeIdx + 1));

  // Klik backdrop tutup modal
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape")     close();
    if (e.key === "ArrowLeft")  goTo(activeIdx - 1);
    if (e.key === "ArrowRight") goTo(activeIdx + 1);
  });

  // Touch swipe
  let touchStartX = 0;
  overlay.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  overlay.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goTo(activeIdx + (dx < 0 ? 1 : -1));
  });
})();

// ── Navbar ──
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 40) {
    nav.classList.add("scrolled");
    nav.style.padding = "0.7rem 4rem";
  } else {
    nav.classList.remove("scrolled");
    nav.style.padding = "1.1rem 4rem";
  }
});

} // end initApp