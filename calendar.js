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

const monthInfo = {

    "বৈশাখ": [
        "পয়লা বৈশাখ",
        "অক্ষয় তৃতীয়া"
    ],

    "জ্যৈষ্ঠ": [
        "জামাই ষষ্ঠী",
        "জ্যৈষ্ঠ পূর্ণিমা"
    ],

    "আষাঢ়": [
        "রথযাত্রা",
        "উল্টো রথযাত্রা"
    ],

    "শ্রাবণ": [
        "শ্রাবণী পূর্ণিমা",
        "ঝুলন যাত্রা",
        "জন্মাষ্টমী"
    ],

    "ভাদ্র": [
        "গণেশ চতুর্থী",
        "বিশ্বকর্মা পূজা"
    ],

    "আশ্বিন": [
        "মহালয়া",
        "দুর্গাপূজা",
        "বিজয়া দশমী"
    ],

    "কার্তিক": [
        "কালীপূজা",
        "দীপাবলি",
        "ভাইফোঁটা"
    ],

    "অগ্রহায়ণ": [
        "নবান্ন",
        "রাস পূর্ণিমা"
    ],

    "পৌষ": [
        "পৌষ সংক্রান্তি",
        "পৌষ পার্বণ"
    ],

    "মাঘ": [
        "সরস্বতী পূজা",
        "মাঘী পূর্ণিমা"
    ],

    "ফাল্গুন": [
        "শিবরাত্রি",
        "দোলযাত্রা",
        "দোল পূর্ণিমা"
    ],

    "চৈত্র": [
        "চৈত্র সংক্রান্তি",
        "চড়ক পূজা",
        "গাজন"
    ]
];

const banglaDigits = [
    "০","১","২","৩","৪",
    "৫","৬","৭","৮","৯"
];

function banglaNumber(number) {
    return String(number).replace(/\d/g, function(d) {
        return banglaDigits[d];
    });
}


/* শ্রাবণ ১৪৩৩ থেকে শুরু */

let currentMonth = 3;
let currentYear = 1433;


/* ক্যালেন্ডারের দিন */

function createCalendar() {

    const calendarDays =
        document.getElementById("calendarDays");

    calendarDays.innerHTML = "";

    for (let day = 1; day <= 30; day++) {

        const cell =
            document.createElement("div");

        cell.textContent =
            banglaNumber(day);

        calendarDays.appendChild(cell);
    }
}


/* মাসের তথ্য */

function updateMonth() {

    const month =
        months[currentMonth];

    document.getElementById("monthName")
        .textContent = month;

    document.getElementById("yearName")
        .textContent =
        banglaNumber(currentYear) +
        " বঙ্গাব্দ";


    const festivals =
        document.getElementById("festivalList");

    festivals.innerHTML = "";


    monthInfo[month].forEach(function(item) {

        const div =
            document.createElement("div");

        div.className =
            "festival-item";

        div.textContent =
            "🪔 " + item;

        festivals.appendChild(div);

    });


    createCalendar();
}


/* আগের মাস */

document.getElementById("prevMonth")
    .addEventListener("click", function() {

        currentMonth--;

        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }

        updateMonth();
    });


/* পরের মাস */

document.getElementById("nextMonth")
    .addEventListener("click", function() {

        currentMonth++;

        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }

        updateMonth();
    });


/* প্রথমবার চালু */

updateMonth();
