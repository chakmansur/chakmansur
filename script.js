const menu = document.getElementById("menu");
const menuBtn = document.querySelector(".menu-btn");

let isOpen = false;

menuBtn.addEventListener("click", function () {
    if (isOpen) {
        menu.style.left = "-250px";
    } else {
        menu.style.left = "0";
    }
    isOpen = !isOpen;
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
