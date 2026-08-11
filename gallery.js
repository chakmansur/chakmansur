document.addEventListener("DOMContentLoaded", () => {

/* =================================================
   SIDE MENU
================================================= */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

if (menuBtn && sideMenu) {

    menuBtn.addEventListener("click", () => {
        sideMenu.classList.toggle("open");
    });

    document.addEventListener("click", (event) => {

        if (
            sideMenu.classList.contains("open") &&
            !sideMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            sideMenu.classList.remove("open");
        }

    });
}


/* =================================================
   DATE / TIME / WISH
================================================= */

const clock = document.getElementById("clock");
const wish = document.getElementById("wish");

function updateDateTime() {

    const now = new Date();

    if (clock) {

        clock.textContent =
            now.toLocaleTimeString("bn-IN", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });

    }

    if (wish) {

        const hour = now.getHours();

        let message = "শুভেচ্ছা";

        if (hour >= 5 && hour < 12) {
            message = "🌅 শুভ সকাল";
        } else if (hour >= 12 && hour < 17) {
            message = "☀️ শুভ দুপুর";
        } else if (hour >= 17 && hour < 20) {
            message = "🌆 শুভ সন্ধ্যা";
        } else {
            message = "🌙 শুভ রাত্রি";
        }

        wish.textContent = message;
    }
}

updateDateTime();

setInterval(updateDateTime, 1000);


/* =================================================
   GALLERY TABS
================================================= */

const tabs = document.querySelectorAll(".gallery-tabs .tab");
const sections = document.querySelectorAll(".gallery-section");

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        const category = tab.dataset.category;

        tabs.forEach((item) => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        sections.forEach((section) => {

            if (section.dataset.section === category) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }

        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


/* =================================================
   LIGHTBOX
================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

const closeBtn = document.getElementById("lightboxClose");
const prevBtn = document.getElementById("lightboxPrev");
const nextBtn = document.getElementById("lightboxNext");

const photoCards = Array.from(
    document.querySelectorAll(".photo-card")
);

let currentIndex = 0;


function getVisiblePhotos() {

    const activeSection =
        document.querySelector(".gallery-section.active");

    if (!activeSection) {
        return [];
    }

    return Array.from(
        activeSection.querySelectorAll(".photo-card")
    );

}


function openLightbox(card) {

    const visiblePhotos = getVisiblePhotos();

    currentIndex =
        visiblePhotos.indexOf(card);

    if (currentIndex < 0) {
        currentIndex = 0;
    }

    showPhoto();

    lightbox.classList.add("show");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function showPhoto() {

    const visiblePhotos = getVisiblePhotos();

    if (!visiblePhotos.length) {
        return;
    }

    if (currentIndex < 0) {
        currentIndex =
            visiblePhotos.length - 1;
    }

    if (currentIndex >= visiblePhotos.length) {
        currentIndex = 0;
    }

    const card =
        visiblePhotos[currentIndex];

    const image =
        card.querySelector("img");

    const title =
        card.querySelector("h3");

    if (!image) {
        return;
    }

    lightboxImage.src = image.src;

    lightboxImage.alt =
        image.alt || "";

    if (title) {

        lightboxCaption.textContent =
            title.textContent;

    } else {

        lightboxCaption.textContent =
            image.alt || "";

    }

}


function closeLightbox() {

    lightbox.classList.remove("show");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

    lightboxImage.src = "";
}


photoCards.forEach((card) => {

    card.addEventListener("click", () => {

        openLightbox(card);

    });

});


/* =================================================
   PREVIOUS / NEXT
================================================= */

if (prevBtn) {

    prevBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        currentIndex--;

        showPhoto();

    });

}


if (nextBtn) {

    nextBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        currentIndex++;

        showPhoto();

    });

}


/* =================================================
   CLOSE
================================================= */

if (closeBtn) {

    closeBtn.addEventListener(
        "click",
        closeLightbox
    );

}


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


/* =================================================
   KEYBOARD
================================================= */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("show")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowLeft") {

        currentIndex--;

        showPhoto();

    }

    if (event.key === "ArrowRight") {

        currentIndex++;

        showPhoto();

    }

});


/* =================================================
   MOBILE SWIPE
================================================= */

let touchStartX = 0;
let touchEndX = 0;


lightbox.addEventListener("touchstart", (event) => {

    touchStartX =
        event.changedTouches[0].screenX;

}, { passive: true });


lightbox.addEventListener("touchend", (event) => {

    touchEndX =
        event.changedTouches[0].screenX;

    handleSwipe();

}, { passive: true });


function handleSwipe() {

    const distance =
        touchEndX - touchStartX;

    if (Math.abs(distance) < 50) {
        return;
    }

    if (distance > 0) {

        currentIndex--;

    } else {

        currentIndex++;

    }

    showPhoto();

}


/* =================================================
   IMAGE ERROR HANDLER
================================================= */

document.querySelectorAll(".photo-card img")
    .forEach((image) => {

        image.addEventListener("error", () => {

            image.style.display = "none";

            const card =
                image.closest(".photo-card");

            if (card) {

                card.classList.add(
                    "image-error"
                );

            }

        });

    });

});
