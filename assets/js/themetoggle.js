const toggleBtn = document.getElementById("themeToggle");
const icon = toggleBtn.querySelector("i");

// Load trạng thái đã lưu
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");

  icon.classList.toggle("fa-sun", isLight);
  icon.classList.toggle("fa-moon", !isLight);

  localStorage.setItem("theme", isLight ? "light" : "dark");
});
