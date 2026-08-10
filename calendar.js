const months = [
    "বৈশাখ",
    "জ্যৈষ্ঠ",
    "আষাঢ়",
    "শ্রাবণ",
    "ভাদ্র",
    "আশ্বিন",
    "কার্তিক",
    "অগ্রহায়ণ",
    "পৌষ",
    "মাঘ",
    "ফাল্গুন",
    "চৈত্র"
];

const banglaDigits = [
    "০","১","২","৩","৪",
    "৫","৬","৭","৮","৯"
];

function bn(number) {
    return String(number).replace(/\d/g, function(d) {
        return banglaDigits[d];
    });
}


/* বর্তমানে ১৪৩৩ বঙ্গাব্দ */

let currentMonth = 3;
let currentYear = 1433;


/* Calendar তৈরি */

function showCalendar() {

    document.getElementById("monthName").innerText =
        months[currentMonth];

    document.getElementById("yearName").innerText =
        bn(currentYear) + " বঙ্গাব্দ";

    const calendarDays =
        document.getElementById("calendarDays");

    calendarDays.innerHTML = "";

    for (let day = 1; day <= 30; day++) {

        const box = document.createElement("div");

        box.innerText = bn(day);

        calendarDays.appendChild(box);
    }
}


/* আগের মাস */

document.getElementById("prevMonth").addEventListener(
    "click",
    function() {

        currentMonth--;

        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }

        showCalendar();
    }
);


/* পরের মাস */

document.getElementById("nextMonth").addEventListener(
    "click",
    function() {

        currentMonth++;

        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }

        showCalendar();
    }
);


/* প্রথমবার Calendar চালু */

showCalendar();
