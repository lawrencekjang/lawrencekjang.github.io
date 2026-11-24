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
  const count = section.querySelector(".paper-count");
  section.querySelector(".research-toolbar").hidden = false;
  const showYear = (year) => {
    let visible = 0;
    rows.forEach((row) => {
      const paper = row.querySelector("[data-year]");
      const match = year === "all" || (paper && paper.dataset.year === year);
      row.hidden = !match;
      if (match) visible++;
    });
    filters.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.yearFilter === year)));
    count.textContent = `${visible} ${visible === 1 ? "paper" : "papers"}`;
  };
  filters.forEach((button) => button.addEventListener("click", () => showYear(button.dataset.yearFilter)));
  showYear("all");
})();
