// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.onclick = () => {
    sideMenu.classList.toggle("active");
};

document.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && e.target !== menuBtn) {
        sideMenu.classList.remove("active");
    }
});

// ================= LIVE CLOCK =================

function updateClock() {
    const now = new Date();

    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    let wish = "🌅 শুভ সকাল";

    if (h >= 12 && h < 16) wish = "☀️ শুভ দুপুর";
    else if (h >= 16 && h < 19) wish = "🌇 শুভ সন্ধ্যা";
    else if (h >= 19) wish = "🌙 শুভ রাত্রি";

    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    document.getElementById("wish").innerHTML = wish;
    document.getElementById("clock").innerHTML =
        `${String(h).padStart(2,"0")}:${m}:${s} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);

// ================= HERO SLIDER =================

const heroImages = [
"images/image slider/slider1.jpg",
"images/image slider/slider2.jpg",
"images/image slider/slider3.jpg",
"images/image slider/slider4.jpg"
];

let current = 0;

const hero = document.getElementById("heroSlide");

function showSlide(i){
    current = i;

    if(current >= heroImages.length) current = 0;
    if(current < 0) current = heroImages.length - 1;

    hero.src = heroImages[current];
}

document.querySelector(".right").onclick = () => showSlide(current + 1);
document.querySelector(".left").onclick = () => showSlide(current - 1);

setInterval(() => {
    showSlide(current + 1);
}, 4000);

// ================= ADVERTISEMENT =================

const ads = [
"images/advertisement/ad1.png",
"images/advertisement/ad2.png"
];

let ad = 0;

const adSlide = document.getElementById("adSlide");

setInterval(() => {

    if(!adSlide) return;

    ad++;

    if(ad >= ads.length) ad = 0;

    adSlide.src = ads[ad];

},5000);

// ================= VISITOR =================

const visitor = document.getElementById("visitorCount");

if(visitor){

let total = localStorage.getItem("CBS_VISITOR");

if(total == null){

total = 1;

}else{

total = parseInt(total) + 1;

}

localStorage.setItem("CBS_VISITOR", total);

visitor.innerHTML = total;

}
