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
    "images/image slider/slider1.jpg",
    "images/image slider/slider2.jpg",
    "images/image slider/slider3.jpg"
];

let current = 0;

const slide = document.getElementById("slide");
const dots = document.querySelectorAll(".dot");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function showSlide(index){

    if(index >= slides.length){
        current = 0;
    }else if(index < 0){
        current = slides.length - 1;
    }else{
        current = index;
    }

    slide.src = slides[current];

    dots.forEach(dot => dot.classList.remove("active"));

    if(dots[current]){
        dots[current].classList.add("active");
    }
}

showSlide(0);

next.addEventListener("click", () => {
    showSlide(current + 1);
});

prev.addEventListener("click", () => {
    showSlide(current - 1);
});

setInterval(() => {
    showSlide(current + 1);
}, 3000);

/* ==========================
   TOUCH SLIDER
========================== */

let startX = 0;

slide.addEventListener("touchstart", (e)=>{
    startX = e.touches[0].clientX;
});

slide.addEventListener("touchend", (e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        showSlide(current + 1);
    }

    if(endX - startX > 50){
        showSlide(current - 1);
    }

});
