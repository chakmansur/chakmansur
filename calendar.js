document.addEventListener("DOMContentLoaded", function () {

    console.log("Calendar JavaScript loaded successfully");

    const monthName = document.getElementById("monthName");
    const yearName = document.getElementById("yearName");
    const calendarDays = document.getElementById("calendarDays");

    if (!monthName || !yearName || !calendarDays) {
        console.log("Calendar HTML elements not found");
        return;
    }

    monthName.innerText = "শ্রাবণ";
    yearName.innerText = "১৪৩৩ বঙ্গাব্দ";

    calendarDays.innerHTML = "";

    for (let i = 1; i <= 30; i++) {

        const day = document.createElement("div");

        day.innerText = i
            .toString()
            .replace(/0/g, "০")
            .replace(/1/g, "১")
            .replace(/2/g, "২")
            .replace(/3/g, "৩")
            .replace(/4/g, "৪")
            .replace(/5/g, "৫")
            .replace(/6/g, "৬")
            .replace(/7/g, "৭")
            .replace(/8/g, "৮")
            .replace(/9/g, "৯");

        calendarDays.appendChild(day);
    }

});
