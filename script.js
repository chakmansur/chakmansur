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

    menuBtn.addEventListener("click", function(e) {

        e.stopPropagation();

        sideMenu.classList.toggle("active");

    });


    sideMenu.addEventListener("click", function(e) {

        e.stopPropagation();

    });


    document.addEventListener("click", function() {

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
   HERO SLIDER
   SUPPORT: slider1.jpg - slider100.jpg
========================================================= */

const heroSlide =
    document.getElementById("heroSlide");

const nextButton =
    document.querySelector(".next");

const prevButton =
    document.querySelector(".prev");

const dotsContainer =
    document.getElementById("heroDots");


/*
   এখানে maximum 100 রাখা হয়েছে।
   যে ছবিগুলো সত্যিই আছে শুধু সেগুলোই
   slider-এ automatically আসবে।
*/

const MAX_SLIDERS = 100;

let heroImages = [];

let current = 0;

let slideTimer = null;

let slideChanging = false;



/* =========================================================
   CHECK IMAGE EXISTS
========================================================= */

function checkImageExists(src) {

    return new Promise(function(resolve) {

        const img = new Image();


        img.onload = function() {

            resolve(true);

        };


        img.onerror = function() {

            resolve(false);

        };


        img.src = src;

    });

}



/* =========================================================
   FIND AVAILABLE SLIDER IMAGES
========================================================= */

async function loadHeroImages() {

    const foundImages = [];


    for (let i = 1; i <= MAX_SLIDERS; i++) {

        const src =
            `images/image slider/slider${i}.jpg`;


        const exists =
            await checkImageExists(src);


        if (exists) {

            foundImages.push(src);

        }

    }


    heroImages = foundImages;


    if (heroImages.length === 0) {

        console.warn("No slider images found.");

        return;

    }


    current = 0;


    createDots();

    showSlide(0, true);


    if (heroImages.length > 1) {

        startSlider();

    }

}



/* =========================================================
   CREATE DOTS
========================================================= */

function createDots() {

    if (!dotsContainer) {

        return;

    }


    dotsContainer.innerHTML = "";


    heroImages.forEach(function(_, index) {

        const dot =
            document.createElement("span");


        dot.className = "dot";


        if (index === 0) {

            dot.classList.add("active");

        }


        dot.addEventListener("click", function(e) {

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

function showSlide(index, instant = false) {

    if (!heroSlide || heroImages.length === 0) {

        return;

    }


    if (slideChanging && !instant) {

        return;

    }


    if (index >= heroImages.length) {

        current = 0;

    }

    else if (index < 0) {

        current = heroImages.length - 1;

    }

    else {

        current = index;

    }


    const newSrc =
        heroImages[current];


    if (instant) {

        heroSlide.src = newSrc;

        heroSlide.style.opacity = "1";

        updateDots();

        return;

    }


    slideChanging = true;

    heroSlide.style.opacity = "0";


    setTimeout(function() {

        heroSlide.src = newSrc;

        heroSlide.style.opacity = "1";

        updateDots();

        slideChanging = false;

    }, 250);

}



/* =========================================================
   UPDATE DOTS
========================================================= */

function updateDots() {

    const dots = getDots();


    dots.forEach(function(dot) {

        dot.classList.remove("active");

    });


    if (dots[current]) {

        dots[current].classList.add("active");

    }

}



/* =========================================================
   NEXT
========================================================= */

if (nextButton) {

    nextButton.addEventListener("click", function(e) {

        e.stopPropagation();

        if (heroImages.length > 1) {

            showSlide(current + 1);

            restartSlider();

        }

    });

}



/* =========================================================
   PREVIOUS
========================================================= */

if (prevButton) {

    prevButton.addEventListener("click", function(e) {

        e.stopPropagation();

        if (heroImages.length > 1) {

            showSlide(current - 1);

            restartSlider();

        }

    });

}



/* =========================================================
   AUTO SLIDER
   5 SECOND
========================================================= */

function startSlider() {

    clearInterval(slideTimer);


    if (heroImages.length <= 1) {

        return;

    }


    slideTimer =
        setInterval(function() {

            showSlide(current + 1);

        }, 5000);

}


function restartSlider() {

    clearInterval(slideTimer);

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
        function(e) {

            startX =
                e.touches[0].clientX;

        },
        { passive: true }
    );


    heroSlide.addEventListener(
        "touchend",
        function(e) {

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
   ADVERTISEMENT
   SUPPORT: ad1.png - ad50.png
========================================================= */

const adSlide =
    document.getElementById("adSlide");


const MAX_ADS = 50;

let ads = [];

let adIndex = 0;

let adTimer = null;



/* =========================================================
   FIND AVAILABLE ADS
========================================================= */

async function loadAdvertisements() {

    const foundAds = [];


    for (let i = 1; i <= MAX_ADS; i++) {

        const src =
            `images/advertisement/ad${i}.png`;


        const exists =
            await checkImageExists(src);


        if (exists) {

            foundAds.push(src);

        }

    }


    ads = foundAds;


    if (!adSlide || ads.length === 0) {

        console.warn("No advertisement images found.");

        return;

    }


    adIndex = 0;


    adSlide.src = ads[0];

    adSlide.style.opacity = "1";


    if (ads.length > 1) {

        startAdvertisement();

    }

}



/* =========================================================
   AUTO ADVERTISEMENT
   5 SECOND
========================================================= */

function startAdvertisement() {

    clearInterval(adTimer);


    if (ads.length <= 1) {

        return;

    }


    adTimer =
        setInterval(function() {

            adIndex++;


            if (adIndex >= ads.length) {

                adIndex = 0;

            }


            if (!adSlide) {

                return;

            }


            adSlide.style.opacity = "0";


            setTimeout(function() {

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
   START EVERYTHING
========================================================= */

loadHeroImages();

loadAdvertisements();



/* =========================================================
   DEBUG
========================================================= */

console.log(
    "CBS Website Script Loaded Successfully"
);

console.log(
    "Slider capacity: 1 - 100"
);

console.log(
    "Advertisement capacity: 1 - 50"
);
