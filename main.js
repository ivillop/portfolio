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
