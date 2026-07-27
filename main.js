// ── Typed text ──
const phrases = [
  "Mentor Univ Coding Camp Powered by DBS Foundation 2025",
  "Facilitator SMK Coding Camp Powered by DBS Foundation 2026",
  "Maganghub Kemnaker Batch 3",
  "Mahasiswa STMIK Mardira Indonesia 2021",
];
let pIdx = 0,
  cIdx = 0,
  del = false;
const typedEl = document.getElementById("typed-text");
function type() {
  const cur = phrases[pIdx];
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
      pIdx = (pIdx + 1) % phrases.length;
    }
  }
  setTimeout(type, del ? 38 : 68);
}
setTimeout(type, 1200);

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

// ── Lightbox ──
(function () {
  const overlay = document.getElementById("lbOverlay");
  const lbImg = document.getElementById("lbImg");
  const lbCaption = document.getElementById("lbCaption");
  const lbDots = document.getElementById("lbDots");
  const btnClose = document.getElementById("lbClose");
  const btnPrev = document.getElementById("lbPrev");
  const btnNext = document.getElementById("lbNext");

  if (!overlay) return;

  // Kumpulkan semua gambar per gallery group
  const galleries = {};
  document.querySelectorAll(".gallery-img").forEach((img) => {
    const group = img.dataset.gallery;
    if (!galleries[group]) galleries[group] = [];
    galleries[group].push({ src: img.src, alt: img.alt });
  });

  let activeGallery = null;
  let activeIdx = 0;

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
    lbDots
      .querySelectorAll(".lb-dot")
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
    activeGallery = gallery;
    activeIdx = idx;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    buildDots(galleries[gallery].length);
    goTo(idx);
    btnClose.focus();
  }

  function close() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    lbImg.src = "";
  }

  // Klik gambar di card
  document.querySelectorAll(".gallery-img").forEach((img) => {
    img.addEventListener("click", () => {
      open(img.dataset.gallery, parseInt(img.dataset.idx));
    });
  });

  // Tombol expand
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
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") goTo(activeIdx - 1);
    if (e.key === "ArrowRight") goTo(activeIdx + 1);
  });

  // Touch swipe
  let touchStartX = 0;
  overlay.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );
  overlay.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goTo(activeIdx + (dx < 0 ? 1 : -1));
  });
})();

// ── Screenshot Slider ──
(function () {
  const track = document.querySelector(".screenshots-track");
  const dots = document.querySelectorAll(".dot-btn");
  if (!track || !dots.length) return;

  let current = 0;
  let timer;

  function goTo(idx) {
    current = idx;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function next() {
    goTo((current + 1) % dots.length);
  }

  function startAuto() {
    timer = setInterval(next, 3000);
  }

  dots.forEach((btn) => {
    btn.addEventListener("click", () => {
      clearInterval(timer);
      goTo(parseInt(btn.dataset.idx));
      startAuto();
    });
  });

  startAuto();
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
