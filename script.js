/* =========================
   MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.classList.remove("active");
    }
});

/* =========================
   SLIDER
========================= */

const slides = [
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg"
];

let current = 0;

const slide = document.getElementById("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dots = document.querySelectorAll(".dot");

function showSlide(index){

    if(index >= slides.length){
        current = 0;
    }else if(index < 0){
        current = slides.length - 1;
    }else{
        current = index;
    }

    slide.src = slides[current];

    dots.forEach((dot,i)=>{
        dot.classList.toggle("active", i === current);
    });

}

next.addEventListener("click",()=>{
    showSlide(current + 1);
});

prev.addEventListener("click",()=>{
    showSlide(current - 1);
});

setInterval(()=>{
    showSlide(current + 1);
},3000);

/* =========================
   GALLERY TAB
========================= */

const tabs=document.querySelectorAll(".tab-btn");
const contents=document.querySelectorAll(".gallery-content");

tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(btn=>btn.classList.remove("active"));

        contents.forEach(box=>box.classList.remove("active"));

        tab.classList.add("active");

        document
        .getElementById(tab.dataset.tab)
        .classList.add("active");

    });

});

/* প্রথম Gallery খুলে দেখাও */

document.getElementById("durga").classList.add("active");

/* =========================
   IMAGE LIGHTBOX
========================= */

document.querySelectorAll(".gallery-content img").forEach(img=>{

    img.addEventListener("click",()=>{

        window.open(img.src,"_blank");

    });

});
