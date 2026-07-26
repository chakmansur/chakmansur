/* ===========================
   SIDE MENU
=========================== */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

if(menuBtn && sideMenu){

    menuBtn.addEventListener("click",()=>{
        sideMenu.classList.toggle("active");
    });

    document.addEventListener("click",(e)=>{

        if(
            !sideMenu.contains(e.target) &&
            !menuBtn.contains(e.target)
        ){
            sideMenu.classList.remove("active");
        }

    });

}

/* ===========================
   IMAGE SLIDER
=========================== */

const slides=[
"images/image slider/slider1.jpg",
"images/image slider/slider2.jpg",
"images/image slider/slider3.jpg"
];

let current=0;

const slide=document.getElementById("slide");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const dots=document.querySelectorAll(".dot");

function showSlide(index){

    if(!slide) return;

    if(index>=slides.length){
        current=0;
    }else if(index<0){
        current=slides.length-1;
    }else{
        current=index;
    }

    slide.src=slides[current];

    dots.forEach((dot,i)=>{
        dot.classList.toggle("active",i===current);
    });

}

showSlide(0);

if(next){
next.addEventListener("click",()=>{
showSlide(current+1);
});
}

if(prev){
prev.addEventListener("click",()=>{
showSlide(current-1);
});
}

setInterval(()=>{
showSlide(current+1);
},3000);

/* ===========================
   ICON TOUCH EFFECT
=========================== */

document.querySelectorAll(".quick-card").forEach(card=>{

card.addEventListener("touchstart",()=>{
card.classList.add("active");
});

card.addEventListener("touchend",()=>{
setTimeout(()=>{
card.classList.remove("active");
},150);
});

});
