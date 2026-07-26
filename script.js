/* ==========================
   SIDE MENU
========================== */

const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        sideMenu.classList.remove("active");
    }
});

/* ==========================
   AUTO SLIDER
========================== */

const slides = [
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg"
];

let currentSlide = 0;

setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    document.getElementById("slide").src = slides[currentSlide];

}, 3000);

/* ==========================
   DATE & TIME
========================== */

function updateDateTime() {

    const now = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    document.getElementById("datetime").innerHTML =
        now.toLocaleDateString("bn-BD", options) +
        " | " +
        now.toLocaleTimeString("bn-BD");

}

setInterval(updateDateTime, 1000);
updateDateTime();

/* ==========================
   SCROLL ANIMATION
========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.classList.add("show");

        }

    });

});

/* ==========================
   SMOOTH ACTIVE MENU
========================== */

document.querySelectorAll(".side-menu a").forEach(link => {

    link.addEventListener("click", () => {

        sideMenu.classList.remove("active");

    });

});
