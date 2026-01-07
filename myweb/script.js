// 年份
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

// 滾動浮現
(() => {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("reveal-visible");
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
})();

// 回到頂部
(() => {
  const btn = document.getElementById("btnScrollTop");
  if (!btn) return;
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();

// Gallery Modal：點圖放大
(() => {
  const modalImg = document.getElementById("modalImg");
  if (!modalImg) return;

  document.querySelectorAll(".img-tile").forEach(btn => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-img");
      if (src) modalImg.src = src;
    });
  });

  // 關掉 modal 時清空圖片（避免下次閃爍）
  const modal = document.getElementById("imgModal");
  if (modal) {
    modal.addEventListener("hidden.bs.modal", () => {
      modalImg.src = "";
    });
  }
})();
