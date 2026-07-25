alert("JavaScript Working");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove("active");
    }
});
const slides = [
  "images/slider1.jpg",
  "images/slider2.jpg",
  "images/slider3.jpg"
];

let current = 0;

setInterval(() => {
  current = (current + 1) % slides.length;
  document.getElementById("slide").src = slides[current];
}, 3000);

function updateDateTime() {
    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const date = now.toLocaleDateString("bn-BD", options);
    const time = now.toLocaleTimeString("bn-BD");

    document.getElementById("datetime").innerHTML =
        date + " | " + time;
}

setInterval(updateDateTime, 1000);
updateDateTime();
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
      section.classList.add("fade-up");
    }
  });
});
