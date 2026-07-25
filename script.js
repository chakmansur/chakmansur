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
