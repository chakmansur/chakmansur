/* =========================
MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

if(menuBtn && sideMenu){

    menuBtn.addEventListener("click", function(e){

        e.stopPropagation();

        sideMenu.classList.toggle("active");

    });


    sideMenu.addEventListener("click", function(e){

        e.stopPropagation();

    });


    document.addEventListener("click", function(){

        sideMenu.classList.remove("active");

    });

}


/* =========================
LIVE TIME
========================= */

function updateClock(){

    const now = new Date();

    let hour = now.getHours();

    const minute =
        String(now.getMinutes()).padStart(2,"0");

    const second =
        String(now.getSeconds()).padStart(2,"0");


    let wish = "🌅 শুভ সকাল";


    if(hour >= 12 && hour < 16){

        wish = "☀️ শুভ দুপুর";

    }

    else if(hour >= 16 && hour < 19){

        wish = "🌇 শুভ সন্ধ্যা";

    }

    else if(hour >= 19){

        wish = "🌙 শুভ রাত্রি";

    }


    const ampm =
        hour >= 12 ? "PM" : "AM";


    hour =
        hour % 12 || 12;


    const wishElement =
        document.getElementById("wish");

    const clockElement =
        document.getElementById("clock");


    if(wishElement){

        wishElement.textContent = wish;

    }


    if(clockElement){

        clockElement.textContent =
            `${hour}:${minute}:${second} ${ampm}`;

    }

}


updateClock();

setInterval(updateClock,1000);



/* =========================
HERO SLIDER
16 IMAGES
========================= */

const heroImages = [

    "images/image slider/slider1.jpg",
    "images/image slider/slider2.jpg",
    "images/image slider/slider3.jpg",
    "images/image slider/slider4.jpg",
    "images/image slider/slider5.jpg",
    "images/image slider/slider6.jpg",
    "images/image slider/slider7.jpg",
    "images/image slider/slider8.jpg",
    "images/image slider/slider9.jpg",
    "images/image slider/slider10.jpg",
    "images/image slider/slider11.jpg",
    "images/image slider/slider12.jpg",
    "images/image slider/slider13.jpg",
    "images/image slider/slider14.jpg",
    "images/image slider/slider15.jpg",
    "images/image slider/slider16.jpg"

];


const heroSlide =
    document.getElementById("heroSlide");

const nextButton =
    document.querySelector(".next");

const prevButton =
    document.querySelector(".prev");

const dotsContainer =
    document.getElementById("heroDots");


let current = 0;

let slideTimer;



/* =========================
CREATE DOTS AUTOMATICALLY
========================= */

if(dotsContainer){

    heroImages.forEach(function(_,index){

        const dot =
            document.createElement("span");

        dot.className = "dot";

        if(index === 0){

            dot.classList.add("active");

        }


        dot.addEventListener("click",function(){

            showSlide(index);

            restartSlider();

        });


        dotsContainer.appendChild(dot);

    });

}


function getDots(){

    return document.querySelectorAll(
        "#heroDots .dot"
    );

}



/* =========================
SHOW SLIDE
========================= */

function showSlide(index){

    if(!heroSlide){

        return;

    }


    if(index >= heroImages.length){

        current = 0;

    }

    else if(index < 0){

        current = heroImages.length - 1;

    }

    else{

        current = index;

    }


    heroSlide.style.opacity = "0";


    setTimeout(function(){

        heroSlide.src =
            heroImages[current];

        heroSlide.style.opacity = "1";


        const dots = getDots();


        dots.forEach(function(dot){

            dot.classList.remove("active");

        });


        if(dots[current]){

            dots[current].classList.add("active");

        }

    },200);

}



/* =========================
NEXT
========================= */

if(nextButton){

    nextButton.addEventListener(
        "click",
        function(){

            showSlide(current + 1);

            restartSlider();

        }
    );

}



/* =========================
PREVIOUS
========================= */

if(prevButton){

    prevButton.addEventListener(
        "click",
        function(){

            showSlide(current - 1);

            restartSlider();

        }
    );

}



/* =========================
AUTO SLIDE
========================= */

function startSlider(){

    slideTimer =
        setInterval(function(){

            showSlide(current + 1);

        },5000);

}


function restartSlider(){

    clearInterval(slideTimer);

    startSlider();

}


startSlider();



/* =========================
MOBILE SWIPE
========================= */

let startX = 0;


if(heroSlide){

    heroSlide.addEventListener(
        "touchstart",
        function(e){

            startX =
                e.touches[0].clientX;

        },
        {passive:true}
    );


    heroSlide.addEventListener(
        "touchend",
        function(e){

            const endX =
                e.changedTouches[0].clientX;


            if(startX - endX > 50){

                showSlide(current + 1);

                restartSlider();

            }


            if(endX - startX > 50){

                showSlide(current - 1);

                restartSlider();

            }

        },
        {passive:true}
    );

}



/* =========================
PRELOAD HERO IMAGES
========================= */

heroImages.forEach(function(src){

    const image =
        new Image();

    image.src = src;

});



/* =========================
ADVERTISEMENT
========================= */

const adSlide =
    document.getElementById("adSlide");


/*
   এখন যেগুলো আছে সেগুলো এখানে।
   পরে ad4.png যোগ করলে শুধু নিচের
   list-এ নাম যোগ করবেন।
*/

const ads = [

    "images/advertisement/ad1.png",
    "images/advertisement/ad2.png",
    "images/advertisement/ad3.png"

];


let adIndex = 0;


if(adSlide && ads.length > 1){

    setInterval(function(){

        adIndex++;

        if(adIndex >= ads.length){

            adIndex = 0;

        }


        adSlide.style.opacity = "0";


        setTimeout(function(){

            adSlide.src = ads[adIndex];

            adSlide.style.opacity = "1";

        },200);


    },5000);

}



/* =========================
VISITOR COUNTER
========================= */

const visitorCount =
    document.getElementById("visitorCount");


if(visitorCount){

    let total =
        localStorage.getItem("CBS_VISITOR");


    if(total === null){

        total = 1;

    }

    else{

        total =
            parseInt(total) + 1;

    }


    localStorage.setItem(
        "CBS_VISITOR",
        total
    );


    visitorCount.textContent =
        total;

}
