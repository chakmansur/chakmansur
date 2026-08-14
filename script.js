/* =========================
HERO SLIDER
AUTO IMAGE DETECTION
========================= */

const heroSlide = document.getElementById("heroSlide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const dotsContainer = document.getElementById("heroDots");

let heroImages = [];
let current = 0;
let slideTimer;


/* =========================
CHECK 1-50 IMAGES
========================= */

function findSliderImages(){

    const images = [];

    for(let i = 1; i <= 50; i++){

        images.push(
            "images/image slider/slider" + i + ".jpg"
        );

    }

    return images;

}


const possibleImages = findSliderImages();


/* =========================
CHECK IMAGE EXISTS
========================= */

function checkImage(src){

    return new Promise(function(resolve){

        const img = new Image();

        img.onload = function(){

            resolve(src);

        };

        img.onerror = function(){

            resolve(null);

        };

        img.src = src;

    });

}


/* =========================
LOAD ALL AVAILABLE IMAGES
========================= */

Promise.all(
    possibleImages.map(checkImage)
).then(function(results){

    heroImages = results.filter(Boolean);

    console.log(
        "Slider images found:",
        heroImages.length
    );


    if(heroImages.length === 0){

        return;

    }


    createDots();

    showSlide(0);

    startSlider();

});


/* =========================
CREATE DOTS
========================= */

function createDots(){

    if(!dotsContainer){

        return;

    }

    dotsContainer.innerHTML = "";


    heroImages.forEach(function(_, index){

        const dot =
            document.createElement("span");

        dot.className = "dot";


        if(index === 0){

            dot.classList.add("active");

        }


        dot.onclick = function(){

            showSlide(index);

            restartSlider();

        };


        dotsContainer.appendChild(dot);

    });

}


/* =========================
SHOW SLIDE
========================= */

function showSlide(index){

    if(!heroSlide || heroImages.length === 0){

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

        heroSlide.src = heroImages[current];

        heroSlide.style.opacity = "1";


        const dots =
            document.querySelectorAll(
                "#heroDots .dot"
            );


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

    nextButton.onclick = function(){

        showSlide(current + 1);

        restartSlider();

    };

}


/* =========================
PREVIOUS
========================= */

if(prevButton){

    prevButton.onclick = function(){

        showSlide(current - 1);

        restartSlider();

    };

}


/* =========================
AUTO SLIDE
========================= */

function startSlider(){

    clearInterval(slideTimer);


    slideTimer = setInterval(function(){

        showSlide(current + 1);

    },5000);

}


function restartSlider(){

    startSlider();

}


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
