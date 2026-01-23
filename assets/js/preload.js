document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");
  const textEl = document.querySelector(".preload-text");

  if (!preloader || !textEl) return;

  const text = textEl.textContent.trim();
  textEl.innerHTML = "";

  const charDelay = 0.09; // delay mỗi chữ (giây)
  const enterDuration = 600; // duration animation chữ (ms)
  const stayTime = 500; // đứng yên sau khi hiện xong (ms)
  const exitDuration = 500; // duration exit effect (ms)

  /* ===== TÁCH CHỮ ===== */
  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${index * charDelay}s`;
    textEl.appendChild(span);
  });

  /* ===== TÍNH THỜI GIAN ===== */
  const enterTotalTime = text.length * charDelay * 1000 + enterDuration;

  /* ===== EXIT TEXT ===== */
  setTimeout(() => {
    textEl.classList.add("exit-scale"); // đổi exit effect tại đây
  }, enterTotalTime + stayTime);

  /* ===== FADE PRELOADER ===== */
  setTimeout(
    () => {
      preloader.style.transition = "opacity 0.6s ease";
      preloader.style.opacity = "0";
      preloader.style.pointerEvents = "none";
    },
    enterTotalTime + stayTime + exitDuration,
  );

  /* ===== REMOVE DOM ===== */
  setTimeout(
    () => {
      preloader.remove();
    },
    enterTotalTime + stayTime + exitDuration + 700,
  );
});
