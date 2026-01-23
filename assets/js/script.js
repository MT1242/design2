// 1. Hero Auto Slide
let heroIdx = 0;
const heroSlides = document.querySelectorAll(".hero-slide");

function autoHero() {
  heroSlides[heroIdx].classList.remove("active");
  heroIdx = (heroIdx + 1) % heroSlides.length;
  heroSlides[heroIdx].classList.add("active");
}
setInterval(autoHero, 4000);

// 2. Horizontal Scroll Slide (Nhân vật & Dự án)
function slide(sliderId, direction) {
  const container = document.getElementById(sliderId);
  const scrollDistance = 320; // Độ rộng item + gap
  container.scrollBy({
    left: direction * scrollDistance,
    behavior: "smooth",
  });
}

// 3. 3D Showcase Rotation
let scItems = document.querySelectorAll(".showcase-item");
let scIdx = 0;

function rotateShowcase(dir) {
  // Xóa các class cũ
  scItems.forEach((item) => item.classList.remove("active", "prev", "next"));

  // Cập nhật index
  scIdx = (scIdx + dir + scItems.length) % scItems.length;

  let prevIdx = (scIdx - 1 + scItems.length) % scItems.length;
  let nextIdx = (scIdx + 1) % scItems.length;

  // Gán class mới
  scItems[scIdx].classList.add("active");
  scItems[prevIdx].classList.add("prev");
  scItems[nextIdx].classList.add("next");
}

// Tự động xoay showcase
setInterval(() => rotateShowcase(1), 5000);

// 4. Smooth Scroll cho Nav Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
const userArea = document.querySelector(".user-area");
const userToggle = document.querySelector(".user-toggle");

userToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  userArea.classList.toggle("active");
});

document.addEventListener("click", () => {
  userArea.classList.remove("active");
});
