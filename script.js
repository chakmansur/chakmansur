// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.onclick = function () {
    sideMenu.classList.toggle("active");
};

// ================= LIVE CLOCK =================

function updateClock(){

const now=new Date();

let h=now.getHours();

let m=String(now.getMinutes()).padStart(2,"0");

let s=String(now.getSeconds()).padStart(2,"0");

let wish="🌅 শুভ সকাল";

if(h>=12 && h<16) wish="☀️ শুভ দুপুর";

else if(h>=16 && h<19) wish="🌇 শুভ সন্ধ্যা";

else if(h>=19) wish="🌙 শুভ রাত্রি";

let ampm=h>=12?"PM":"AM";

h=h%12||12;

document.getElementById("wish").innerHTML=wish;

document.getElementById("clock").innerHTML=

`${String(h).padStart(2,"0")}:${m}:${s} ${ampm}`;

}

setInterval(updateClock,1000);

updateClock();

// ================= HERO SLIDER =================

const slides=[

"images/image slider/slider1.jpg",

"images/image slider/slider2.jpg",

"images/image slider/slider3.jpg",

"images/image slider/slider4.jpg"

];

let current=0;

const hero=document.getElementById("heroSlide");

function showSlide(index){

current=index;

if(current>=slides.length) current=0;

if(current<0) current=slides.length-1;

hero.style.opacity=0;

setTimeout(()=>{

hero.src=slides[current];

hero.style.opacity=1;

},300);

}

document.querySelector(".next").onclick=()=>showSlide(current+1);

document.querySelector(".prev").onclick=()=>showSlide(current-1);

setInterval(()=>{

showSlide(current+1);

},4000);

// ================= ADVERTISEMENT =================

const ads=[

"images/advertisement/ad1.png",

"images/advertisement/ad2.png"

];

let ad=0;

const adSlide=document.getElementById("adSlide");

if(adSlide){

setInterval(()=>{

ad++;

if(ad>=ads.length) ad=0;

adSlide.src=ads[ad];

},5000);

}

// ================= VISITOR =================

const visitor=document.getElementById("visitorCount");

if(visitor){

let total=localStorage.getItem("CBS_VISITOR");

if(total==null){

total=1;

}else{

total=parseInt(total)+1;

}

localStorage.setItem("CBS_VISITOR",total);

visitor.innerHTML=total;

}
