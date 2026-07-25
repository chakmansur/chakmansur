const menu = document.getElementById("menu");
const menuBtn = document.querySelector(".menu-btn");

let isOpen = false;

menuBtn.addEventListener("click", function () {
    if (isOpen) {
        menu.style.left = "-250px";
    } else {
        menu.style.left = "0";
    }
    isOpen = !isOpen;
});
