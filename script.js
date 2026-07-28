/*==========================================
MENU
==========================================*/

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", function () {
    sideMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
    if (
        !sideMenu.contains(e.target) &&
        e.target.id !== "menuBtn"
    ) {
        sideMenu.classList.remove("active");
    }
});

/*==========================================
LIVE TIME & WISH
==========================================*/

function updateClock() {

    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let wish = "";

    if (h < 12) {

        wish = "🌅 শুভ সকাল";

    } else if (h < 16) {

        wish = "☀️ শুভ দুপুর";

    } else if (h < 19) {

        wish = "🌇 শুভ সন্ধ্যা";

    } else {

        wish = "🌙 শুভ রাত্রি";

    }

    let ampm = h >= 12 ? "PM" : "AM";

    h = h % 12;

    if (h === 0) h = 12;

    h = String(h).padStart(2, "0");
    m = String(m).padStart(2, "0");
    s = String(s).padStart(2, "0");

    document.getElementById("wish").innerHTML = wish;

    document.getElementById("clock").innerHTML =
        h + ":" + m + ":" + s + " " + ampm;

}

updateClock();

setInterval(updateClock, 1000);

/*==========================================
HERO SLIDER
==========================================*/

const heroImages = [

"images/image slider/slider1.jpg",

"images/image slider/slider2.jpg",

"images/image slider/slider3.jpg",

"images/image slider/slider4.jpg"

];

let heroIndex = 0;

const heroSlide = document.getElementById("heroSlide");

function nextSlide() {

heroIndex++;

if(heroIndex >= heroImages.length){

heroIndex = 0;

}

heroSlide.src = heroImages[heroIndex];

}

setInterval(nextSlide,4000);
/*==========================================
ADVERTISEMENT SLIDER
==========================================*/

const adImages = [
  "images/advertisement/ad1.png",
  "images/advertisement/ad2.png"
];

let adIndex = 0;
const adSlide = document.getElementById("adSlide");

function changeAd() {

  if (!adSlide) return;

  adIndex++;

  if (adIndex >= adImages.length) {
    adIndex = 0;
  }

  adSlide.style.opacity = "0";

  setTimeout(() => {

    adSlide.src = adImages[adIndex];

    adSlide.style.opacity = "1";

  }, 300);

}

setInterval(changeAd, 5000);

/*==========================================
SLIDER BUTTON
==========================================*/

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

if (leftBtn) {

leftBtn.onclick = function () {

heroIndex--;

if(heroIndex < 0){

heroIndex = heroImages.length - 1;

}

heroSlide.src = heroImages[heroIndex];

};

}

if (rightBtn) {

rightBtn.onclick = function () {

heroIndex++;

if(heroIndex >= heroImages.length){

heroIndex = 0;

}

heroSlide.src = heroImages[heroIndex];

};

}

/*==========================================
VISITOR COUNTER
==========================================*/

const visitor = document.getElementById("visitorCount");

if(visitor){

let total = localStorage.getItem("CBS_VISITOR");

if(total === null){

total = 1;

}else{

total = parseInt(total) + 1;

}

localStorage.setItem("CBS_VISITOR", total);

visitor.innerHTML = total.toLocaleString();

}

/*==========================================
IMAGE PRELOAD
==========================================*/

heroImages.concat(adImages).forEach(function(img){

const image = new Image();

image.src = img;

});

console.log("✅ Website Loaded Successfully");
