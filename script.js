/* ==========================================
   CHAKMANSUR BANISHREE SANGHA
   FINAL SCRIPT.JS
========================================== */

/* ==========================
   MENU
========================== */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", function () {
    sideMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {

    if (
        !sideMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sideMenu.classList.remove("active");
    }

});

/* ==========================
   LIVE TIME & GREETING
========================== */

function updateClock() {

    const now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let greeting = "";

    if (hour < 12) {
        greeting = "🌅 শুভ সকাল";
    }
    else if (hour < 16) {
        greeting = "☀️ শুভ দুপুর";
    }
    else if (hour < 19) {
        greeting = "🌇 শুভ সন্ধ্যা";
    }
    else {
        greeting = "🌙 শুভ রাত্রি";
    }

    let ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;

    if (hour == 0) {
        hour = 12;
    }

    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");

    document.getElementById("greeting").innerHTML = greeting;

    document.getElementById("clock").innerHTML =
        hour + ":" +
        minute + ":" +
        second + " " +
        ampm;

}

updateClock();

setInterval(updateClock, 1000);

/* ==========================
   HERO IMAGE SLIDER
========================== */

const heroImages = [

"images/image slider/slider1.jpg",

"images/image slider/slider2.jpg",

"images/image slider/slider3.jpg"

];

let heroIndex = 0;

const heroSlide = document.getElementById("heroSlide");

function heroSlider(){

    heroIndex++;

    if(heroIndex >= heroImages.length){

        heroIndex = 0;

    }

    heroSlide.style.opacity = 0;

    setTimeout(function(){

        heroSlide.src = heroImages[heroIndex];

        heroSlide.style.opacity = 1;

    },300);

}

setInterval(heroSlider,4000);
/* ==========================
   ADVERTISEMENT SLIDER
========================== */

const adImages = [
    "images/advertisement/ad1.png",
    "images/advertisement/ad2.png"
];

let adIndex = 0;

const adSlide = document.getElementById("adSlide");

function changeAd() {

    adSlide.style.opacity = "0";

    setTimeout(function () {

        adIndex++;

        if (adIndex >= adImages.length) {
            adIndex = 0;
        }

        adSlide.src = adImages[adIndex];

        adSlide.style.opacity = "1";

    }, 500);

}

/* Hero Slider থেকে আলাদা সময় */
setInterval(changeAd, 6000);

/* ==========================
   HERO SLIDER BUTTON
========================== */

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showHero(index){

    if(index >= heroImages.length){
        heroIndex = 0;
    }else if(index < 0){
        heroIndex = heroImages.length - 1;
    }else{
        heroIndex = index;
    }

    heroSlide.src = heroImages[heroIndex];
}

if(prevBtn){

prevBtn.addEventListener("click",function(){

    showHero(heroIndex-1);

});

}

if(nextBtn){

nextBtn.addEventListener("click",function(){

    showHero(heroIndex+1);

});

}

/* ==========================
   TOUCH SWIPE
========================== */

let startX = 0;

heroSlide.addEventListener("touchstart",function(e){

    startX = e.touches[0].clientX;

});

heroSlide.addEventListener("touchend",function(e){

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>60){

        showHero(heroIndex+1);

    }

    if(endX-startX>60){

        showHero(heroIndex-1);

    }

});
