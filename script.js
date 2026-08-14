/* =========================================================
   CHAKMANSUR BANISHRI SANGHA
   FINAL SCRIPT.JS
========================================================= */


/* =========================================================
   MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

if (menuBtn && sideMenu) {

    menuBtn.addEventListener("click", function (e) {

        e.stopPropagation();

        sideMenu.classList.toggle("active");

    });


    sideMenu.addEventListener("click", function (e) {

        e.stopPropagation();

    });


    document.addEventListener("click", function () {

        sideMenu.classList.remove("active");

    });

}


/* =========================================================
   LIVE TIME
========================================================= */

function updateClock() {

    const now = new Date();

    let hour = now.getHours();

    const minute =
        String(now.getMinutes()).padStart(2, "0");

    const second =
        String(now.getSeconds()).padStart(2, "0");


    let wish = "🌅 শুভ সকাল";


    if (hour >= 12 && hour < 16) {

        wish = "☀️ শুভ দুপুর";

    }

    else if (hour >= 16 && hour < 19) {

        wish = "🌇 শুভ সন্ধ্যা";

    }

    else if (hour >= 19) {

        wish = "🌙 শুভ রাত্রি";

    }


    const ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;


    const wishElement =
        document.getElementById("wish");

    const clockElement =
        document.getElementById("clock");


    if (wishElement) {

        wishElement.textContent = wish;

    }


    if (clockElement) {

        clockElement.textContent =
            `${hour}:${minute}:${second} ${ampm}`;

    }

}


updateClock();

setInterval(updateClock, 1000);


/* =========================================================
   HERO IMAGE SLIDER
   slider1.jpg TO slider60.jpg
========================================================= */

const heroImages = [];

for (let i = 1; i <= 60; i++) {

    heroImages.push(
        `images/image slider/slider${i}.jpg`
    );

}


const heroSlide =
    document.getElementById("heroSlide");

const nextButton =
    document.querySelector(".next");

const prevButton =
    document.querySelector(".prev");

const dotsContainer =
    document.getElementById("heroDots");


let current = 0;

let slideTimer = null;

let slideChanging = false;


/* =========================================================
   CREATE DOTS
========================================================= */

if (dotsContainer) {

    heroImages.forEach(function (_, index) {

        const dot =
            document.createElement("span");

        dot.className = "dot";


        if (index === 0) {

            dot.classList.add("active");

        }


        dot.addEventListener("click", function (e) {

            e.stopPropagation();

            showSlide(index);

            restartSlider();

        });


        dotsContainer.appendChild(dot);

    });

}


/* =========================================================
   GET DOTS
========================================================= */

function getDots() {

    return document.querySelectorAll(
        "#heroDots .dot"
    );

}


/* =========================================================
   SHOW SLIDE
========================================================= */

function showSlide(index) {

    if (!heroSlide) {

        return;

    }


    if (slideChanging) {

        return;

    }


    slideChanging = true;


    if (index >= heroImages.length) {

        current = 0;

    }

    else if (index < 0) {

        current = heroImages.length - 1;

    }

    else {

        current = index;

    }


    heroSlide.style.opacity = "0";


    setTimeout(function () {

        heroSlide.src =
            heroImages[current];


        heroSlide.style.opacity = "1";


        const dots = getDots();


        dots.forEach(function (dot) {

            dot.classList.remove("active");

        });


        if (dots[current]) {

            dots[current].classList.add("active");

        }


        slideChanging = false;

    }, 200);

}


/* =========================================================
   NEXT BUTTON
========================================================= */

if (nextButton) {

    nextButton.addEventListener("click", function (e) {

        e.stopPropagation();

        showSlide(current + 1);

        restartSlider();

    });

}


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

if (prevButton) {

    prevButton.addEventListener("click", function (e) {

        e.stopPropagation();

        showSlide(current - 1);

        restartSlider();

    });

}


/* =========================================================
   AUTO SLIDER
   5 SECOND
========================================================= */

function startSlider() {

    clearInterval(slideTimer);


    slideTimer = setInterval(function () {

        showSlide(current + 1);

    }, 5000);

}


function restartSlider() {

    clearInterval(slideTimer);

    startSlider();

}


if (heroSlide && heroImages.length > 1) {

    startSlider();

}


/* =========================================================
   MOBILE SWIPE
========================================================= */

let startX = 0;

let endX = 0;


if (heroSlide) {

    heroSlide.addEventListener(
        "touchstart",
        function (e) {

            startX =
                e.touches[0].clientX;

        },
        { passive: true }
    );


    heroSlide.addEventListener(
        "touchend",
        function (e) {

            endX =
                e.changedTouches[0].clientX;


            if (startX - endX > 50) {

                showSlide(current + 1);

                restartSlider();

            }


            else if (endX - startX > 50) {

                showSlide(current - 1);

                restartSlider();

            }

        },
        { passive: true }
    );

}


/* =========================================================
   PRELOAD SLIDER IMAGES
========================================================= */

heroImages.forEach(function (src) {

    const image =
        new Image();

    image.src = src;

});


/* =========================================================
   ADVERTISEMENT
   ad1.png TO ad20.png
========================================================= */

const adSlide =
    document.getElementById("adSlide");


const ads = [];

for (let i = 1; i <= 20; i++) {

    ads.push(
        `images/advertisement/ad${i}.png`
    );

}


let adIndex = 0;

let adTimer = null;


/* =========================================================
   ADVERTISEMENT ELEMENT
========================================================= */

if (adSlide) {

    /*
       প্রথম Advertisement
    */

    adSlide.src = ads[0];


    /*
       প্রতি 5 second পর পর Advertisement change
    */

    adTimer = setInterval(function () {

        adIndex++;

        if (adIndex >= ads.length) {

            adIndex = 0;

        }


        adSlide.style.opacity = "0";


        setTimeout(function () {

            adSlide.src =
                ads[adIndex];

            adSlide.style.opacity = "1";

        }, 250);


    }, 5000);

}


/* =========================================================
   VISITOR COUNTER
========================================================= */

const visitorCount =
    document.getElementById("visitorCount");


if (visitorCount) {

    let total =
        localStorage.getItem("CBS_VISITOR");


    if (total === null) {

        total = 1;

    }

    else {

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


/* =========================================================
   DEBUG MESSAGE
========================================================= */

console.log(
    "CBS Website Script Loaded Successfully"
);

console.log(
    "Slider: slider1.jpg - slider60.jpg"
);

console.log(
    "Advertisement: ad1.png - ad20.png"
);
