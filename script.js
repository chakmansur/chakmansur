/*==========================================
  CHAKMANSUR BANISHREE SANGHA
  FINAL SCRIPT
==========================================*/

/*==============================
 MENU
==============================*/

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

/*==============================
 LIVE TIME
==============================*/

function liveClock(){

const now = new Date();

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

let wish = "";

if(h < 12){

wish="🌅 শুভ সকাল";

}else if(h < 16){

wish="☀️ শুভ দুপুর";

}else if(h < 19){

wish="🌇 শুভ সন্ধ্যা";

}else{

wish="🌙 শুভ রাত্রি";

}

let ampm = h >= 12 ? "PM":"AM";

h = h % 12;

if(h==0){

h=12;

}

h=String(h).padStart(2,"0");
m=String(m).padStart(2,"0");
s=String(s).padStart(2,"0");

document.getElementById("greeting").innerHTML=wish;

document.getElementById("clock").innerHTML=

h+":"+m+":"+s+" "+ampm;

}

liveClock();

setInterval(liveClock,1000);

/*==============================
 HERO IMAGE SLIDER
==============================*/

const heroImages=[

"images/image slider/slider1.jpg",

"images/image slider/slider2.jpg",

"images/image slider/slider3.jpg"

];

let hero=0;

const heroSlide=document.getElementById("heroSlide");

function heroSlider(){

hero++;

if(hero>=heroImages.length){

hero=0;

}

heroSlide.style.opacity="0";

setTimeout(function(){

heroSlide.src=heroImages[hero];

heroSlide.style.opacity="1";

},350);

}

setInterval(heroSlider,4000);
/*==========================================
  UNIQUE ADVERTISEMENT SLIDER
==========================================*/

const adImages = [
    "images/advertisement/ad1.png",
    "images/advertisement/ad2.png"
    // পরে ad3.png, ad4.png যোগ করতে পারবেন
];

let adIndex = 0;

const adSlide = document.getElementById("adSlide");

function changeAd(){

    adSlide.style.opacity = "0";
    adSlide.style.transform = "scale(1.10)";

    setTimeout(function(){

        adIndex++;

        if(adIndex >= adImages.length){
            adIndex = 0;
        }

        adSlide.src = adImages[adIndex];

        adSlide.style.opacity = "1";
        adSlide.style.transform = "scale(1)";

    },600);

}

/* Hero Slider থেকে আলাদা */
setInterval(changeAd,6000);

/*==========================================
  PREVIOUS / NEXT BUTTON
==========================================*/

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

function showHero(i){

    if(i >= heroImages.length){

        hero = 0;

    }else if(i < 0){

        hero = heroImages.length - 1;

    }else{

        hero = i;

    }

    heroSlide.src = heroImages[hero];

}

leftBtn.onclick = function(){

    showHero(hero-1);

}

rightBtn.onclick = function(){

    showHero(hero+1);

}

/*==========================================
  MOBILE SWIPE
==========================================*/

let touchStart = 0;

heroSlide.addEventListener("touchstart",function(e){

    touchStart = e.touches[0].clientX;

});

heroSlide.addEventListener("touchend",function(e){

    let touchEnd = e.changedTouches[0].clientX;

    if(touchStart-touchEnd>60){

        showHero(hero+1);

    }

    if(touchEnd-touchStart>60){

        showHero(hero-1);

    }

});
/*==========================================
  VISITOR COUNTER
==========================================*/

const visitorCount = document.getElementById("visitorCount");

if (visitorCount) {
    let total = localStorage.getItem("cbs_total_visitor");

    if (!total) {
        total = 1;
    } else {
        total = Number(total) + 1;
    }

    localStorage.setItem("cbs_total_visitor", total);

    visitorCount.innerHTML = total.toLocaleString("en-IN");
}

/*==========================================
  PRELOAD IMAGES
==========================================*/

heroImages.forEach(function(img){
    const image = new Image();
    image.src = img;
});

adImages.forEach(function(img){
    const image = new Image();
    image.src = img;
});

/*==========================================
  SMOOTH IMAGE FADE
==========================================*/

heroSlide.style.transition = "opacity .5s ease";

adSlide.style.transition =
"opacity .6s ease, transform 6s linear";

/*==========================================
  QUICK ACCESS TOUCH EFFECT
==========================================*/

document.querySelectorAll(".quick-card").forEach(function(card){

    card.addEventListener("touchstart",function(){

        card.style.transform="scale(.96)";

    });

    card.addEventListener("touchend",function(){

        setTimeout(function(){

            card.style.transform="scale(1)";

        },120);

    });

});

/*==========================================
  PAGE LOADED
==========================================*/

window.onload=function(){

console.log("CBS Website Loaded Successfully");

};
