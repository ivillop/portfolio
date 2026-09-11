/* ============================================================
   webp-convert.js — Konversi gambar ke WebP via Canvas API
   Berjalan di browser, tidak butuh file WebP terpisah.
   Semua <img> dikonversi otomatis setelah load.
   ============================================================ */

(function () {
  // Cek apakah browser support WebP encode via canvas
  function supportsWebP() {
    const c = document.createElement("canvas");
    c.width = 1; c.height = 1;
    return c.toDataURL("image/webp").startsWith("data:image/webp");
  }

  if (!supportsWebP()) return; // Biarkan asli jika tidak support

  const QUALITY = 0.85;

  function convertImg(img) {
    const src = img.getAttribute("src") || "";
    // Skip: sudah webp, data URL, SVG, atau bukan jpg/png
    if (!src || src.startsWith("data:") || src.includes(".svg")) return;
    if (!src.match(/\.(jpe?g|png|JPE?G|PNG)(\?.*)?$/)) return;
    // Skip gambar eksternal CDN (devicons dll) — akan kena CORS
    if (src.startsWith("http") && !src.includes(location.hostname)) return;

    if (img.complete && img.naturalWidth > 0) {
      drawToWebP(img);
    } else {
      img.addEventListener("load", function handler() {
        img.removeEventListener("load", handler);
        drawToWebP(img);
      });
    }
  }

  function drawToWebP(img) {
    try {
      const canvas = document.createElement("canvas");
      canvas.width  = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext("2d").drawImage(img, 0, 0);
      const webpData = canvas.toDataURL("image/webp", QUALITY);
      if (webpData && webpData.startsWith("data:image/webp")) {
        img.src = webpData;
      }
    } catch (e) {
      // CORS / tainted canvas — biarkan asli
    }
  }

  function init() {
    // Konversi semua img yang sudah ada
    document.querySelectorAll("img").forEach(convertImg);

    // Pantau img baru yang ditambahkan JS (components, lightbox, dll)
    new MutationObserver(function (mutations) {
      mutations.forEach(function (mut) {
        mut.addedNodes.forEach(function (node) {
          if (node.nodeType !== 1) return;
          if (node.tagName === "IMG") {
            convertImg(node);
          } else if (node.querySelectorAll) {
            node.querySelectorAll("img").forEach(convertImg);
          }
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  // Tunggu DOM selesai baru jalankan
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();