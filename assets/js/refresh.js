(() => {
  document.querySelectorAll('.more-authors[role="button"]').forEach((button) => {
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        button.click();
      }
    });
  });
  const section = document.querySelector(".research-section");
  if (!section) return;
  const rows = [...section.querySelectorAll("ol.bibliography > li")];
  const filters = [...section.querySelectorAll("[data-year-filter]")];
  section.querySelector(".research-toolbar").hidden = false;
  const showYear = (year) => {
    rows.forEach((row) => {
      const paper = row.querySelector("[data-year]");
      const match = year === "all" || (paper && paper.dataset.year === year);
      row.hidden = !match;
    });
    filters.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.yearFilter === year)));
  };
  filters.forEach((button) => button.addEventListener("click", () => showYear(button.dataset.yearFilter)));
  showYear("all");
})();
