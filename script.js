const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

// Menu Open / Close
menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    sideMenu.classList.toggle("active");
});

// বাইরে ক্লিক করলে Menu বন্ধ হবে
document.addEventListener("click", function (e) {
    if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        sideMenu.classList.remove("active");
    }
});

// Menu-এর লিংকে ক্লিক করলে Menu বন্ধ হবে
const links = sideMenu.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click", () => {
        sideMenu.classList.remove("active");
    });
});
