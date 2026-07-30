
// ===== Gallery Tab Switch =====

const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".gallery-section");

tabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));
        sections.forEach(sec => sec.classList.remove("active"));

        tab.classList.add("active");
        sections[index].classList.add("active");

    });

});
