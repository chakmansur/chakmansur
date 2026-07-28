/*==========================================
MENU
==========================================*/

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.onclick = function () {
    sideMenu.classList.toggle("active");
};

document.addEventListener("click", function(e){

    if(
        !sideMenu.contains(e.target) &&
        e.target !== menuBtn
    ){
        sideMenu.classList.remove("active");
    }

});

/*==========================================
LIVE CLOCK
==========================================*/

function updateClock(){

const now=new Date();

let h=now.getHours();
let m=now.getMinutes();
let s=now.getSeconds();

let wish="";

if(h<12){

wish="🌅 শুভ সকাল";

}else if(h<16){

wish="☀️ শুভ দুপুর";

}else if(h<19){

wish="🌇 শুভ সন্ধ্যা";

}else{

wish="🌙 শুভ রাত্রি";

}

let ampm=h>=12?"PM":"AM";

h=h%12;

if(h==0){

h=12;

}

h=String(h).padStart(2,"0");
m=String(m).padStart(2,"0");
s=String(s).padStart(2,"0");

document.getElementById("wish").innerHTML=wish;

document.getElementById("clock").innerHTML=

h+":"+m+":"+s+" "+ampm;

}

updateClock();

setInterval(updateClock,1000);

/*==========================================
IMAGE SLIDER
==========================================*/

let slideIndex=0;

showSlides();

function showSlides(){

let slides=document.getElementsByClassName("slide");

for(let i=0;i<slides.length;i++){

slides[i].style.display="none";

}

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,4000);

}/*==========================================
ADVERTISEMENT SLIDER
==========================================*/

const adImages = [
"images/advertisement/ad1.png",
"images/advertisement/ad2.png"
];

let adIndex = 0;

const adSlide = document.getElementById("adSlide");

function changeAdvertisement(){

adSlide.style.opacity = "0";

setTimeout(function(){

adIndex++;

if(adIndex >= adImages.length){

adIndex = 0;

}

adSlide.src = adImages[adIndex];

adSlide.style.opacity = "1";

},500);

}

setInterval(changeAdvertisement,5000);

/*==========================================
PREVIOUS / NEXT BUTTON
==========================================*/

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.onclick = function(){

slideIndex -= 2;

if(slideIndex < 0){

slideIndex = document.getElementsByClassName("slide").length - 1;

}

showSlides();

};

next.onclick = function(){

showSlides();

};

/*==========================================
SWIPE SUPPORT
==========================================*/

let startX = 0;

const slider = document.querySelector(".slider");

slider.addEventListener("touchstart",function(e){

startX = e.touches[0].clientX;

});

slider.addEventListener("touchend",function(e){

let endX = e.changedTouches[0].clientX;

if(startX-endX>60){

showSlides();

}

if(endX-startX>60){

slideIndex -= 2;

if(slideIndex<0){

slideIndex=document.getElementsByClassName("slide").length-1;

}

showSlides();
  

}

});
/*==========================================
TOTAL VISITOR COUNTER
==========================================*/

const visitor = document.getElementById("visitorCount");

if (visitor) {

let total = localStorage.getItem("CBS_Total_Visitors");

if (total == null) {

total = 1;

} else {

total = parseInt(total) + 1;

}

localStorage.setItem("CBS_Total_Visitors", total);

visitor.innerHTML = total.toLocaleString();

}

/*==========================================
PRELOAD IMAGES
==========================================*/

window.addEventListener("load", function () {

const preload = [

"images/image slider/slider1.jpg",

"images/image slider/slider2.jpg",

"images/image slider/slider3.jpg",

"images/image slider/slider4.jpg",

"images/advertisement/ad1.png",

"images/advertisement/ad2.png"

];

preload.forEach(function (src) {

const img = new Image();

img.src = src;

});

});

/*==========================================
SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior: "smooth"

});

});

});

/*==========================================
PAGE LOADED
==========================================*/

window.onload = function () {

console.log("✅ Chakmansur Banishree Sangha Website Loaded");

};
