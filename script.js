/* ==========================
   SIDE MENU
========================== */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        sideMenu.classList.remove("active");
    }
});

/* ==========================
   IMAGE SLIDER
========================== */

const slides = [
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg"
    // পরে এখানে slider4.jpg থেকে slider15.jpg যোগ করবেন
];

let current = 0;

const slide = document.getElementById("slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(index){

    if(index >= slides.length) current = 0;
    if(index < 0) current = slides.length - 1;

    slide.src = slides[current];

    dots.forEach(dot => dot.classList.remove("active"));

    if(dots[current]){
        dots[current].classList.add("active");
    }
}

next.addEventListener("click", () => {
    current++;
    showSlide(current);
});

prev.addEventListener("click", () => {
    current--;
    showSlide(current);
});

setInterval(() => {
    current++;
    showSlide(current);
}, 3000);

/* ==========================
   SCROLL ANIMATION
========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        if(section.getBoundingClientRect().top < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});

window.dispatchEvent(new Event("scroll"));
