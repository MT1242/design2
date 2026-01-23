const tabs = document.querySelectorAll(".tab-btn");
const items = document.querySelectorAll(".gallery-item");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    items.forEach((item) => {
      const category = item.dataset.category;

      if (filter === "all" || category === filter) {
        // HIỆN
        item.style.display = "block";

        requestAnimationFrame(() => {
          item.classList.remove("fade-out");
        });
      } else {
        // ẨN MƯỢT
        item.classList.add("fade-out");

        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      }
    });
  });
});
    