/* ===========================
MENU
=========================== */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.onclick = function(e){
    e.stopPropagation();
    sideMenu.classList.toggle("active");
};

sideMenu.onclick = function(e){
    e.stopPropagation();
};

document.addEventListener("click", function(){
    sideMenu.classList.remove("active");
});

/* ===========================
LIVE TIME
=========================== */

function updateClock() {

    const now = new Date();

    let hour = now.getHours();
    let minute = String(now.getMinutes()).padStart(2, "0");
    let second = String(now.getSeconds()).padStart(2, "0");

    let wish = "🌅 শুভ সকাল";

    if (hour >= 12 && hour < 16) {
        wish = "☀️ শুভ দুপুর";
    } else if (hour >= 16 && hour < 19) {
        wish = "🌇 শুভ সন্ধ্যা";
    } else if (hour >= 19) {
        wish = "🌙 শুভ রাত্রি";
    }

    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    document.getElementById("wish").textContent = wish;
    document.getElementById("clock").textContent =
        `${hour}:${minute}:${second} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);

/* ===========================
HERO SLIDER
=========================== */

const heroImages = [
"images/image slider/slider1.jpg",
"images/image slider/slider2.jpg",
"images/image slider/slider3.jpg",
"images/image slider/slider4.jpg"
];

const heroSlide = document.getElementById("heroSlide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

    if(index >= heroImages.length){
        current = 0;
    }else if(index < 0){
        current = heroImages.length - 1;
    }else{
        current = index;
    }

    heroSlide.style.opacity = "0";

    setTimeout(() => {

        heroSlide.src = heroImages[current];

        heroSlide.style.opacity = "1";

        dots.forEach(dot => dot.classList.remove("active"));

        dots[current].classList.add("active");

    },250);

}

document.querySelector(".next").onclick = () => showSlide(current + 1);

document.querySelector(".prev").onclick = () => showSlide(current - 1);

setInterval(() => {

    showSlide(current + 1);

},4000);

/* ===========================
ADVERTISEMENT SLIDER
=========================== */

const adSlide = document.getElementById("adSlide");

const ads = [
    "images/advertisement/ad1.png",
    "images/advertisement/ad2.png",
    "images/advertisement/ad3.png"
];

let adIndex = 0;

if (adSlide) {
    setInterval(() => {
        adIndex = (adIndex + 1) % ads.length;
        adSlide.src = ads[adIndex];
    }, 5000);
}

/* ===========================
VISITOR COUNTER
=========================== */

const visitorCount = document.getElementById("visitorCount");

if (visitorCount) {

    let total = localStorage.getItem("CBS_VISITOR");

    if (total === null) {
        total = 1;
    } else {
        total = parseInt(total) + 1;
    }

    localStorage.setItem("CBS_VISITOR", total);

    visitorCount.textContent = total;

}

/* ===========================
MOBILE SWIPE
=========================== */

let startX = 0;

heroSlide.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

heroSlide.addEventListener("touchend", (e) => {

    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        showSlide(current + 1);
    }

    if (endX - startX > 50) {
        showSlide(current - 1);
    }

});

/* ===========================
IMAGE PRELOAD
=========================== */

heroImages.forEach(src => {
    const img = new Image();
    img.src = src;
});
