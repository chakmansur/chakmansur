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

const festivals = {
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
};


const banglaNumber = function(number) {

    const digits = [
        "০","১","২","৩","৪",
        "৫","৬","৭","৮","৯"
    ];

    return String(number).replace(
        /\d/g,
        function(d) {
            return digits[d];
        }
    );
};


/*
   বাংলা পঞ্জিকা
   শুরু: শ্রাবণ ১৪৩৩
*/

let currentMonth = 3;
let currentYear = 1433;


/* Calendar তৈরি */

function createCalendar() {

    const box =
        document.getElementById("calendarDays");

    if (!box) return;

    box.innerHTML = "";

    for (let i = 1; i <= 30; i++) {

        const day =
            document.createElement("div");

        day.innerText =
            banglaNumber(i);

        box.appendChild(day);
    }
}


/* মাসের উৎসব */

function createFestivals() {

    const list =
        document.getElementById("festivalList");

    if (!list) return;

    list.innerHTML = "";

    const month =
        months[currentMonth];

    const data =
        festivals[month] || [];

    data.forEach(function(name) {

        const item =
            document.createElement("div");

        item.className =
            "festival-item";

        item.innerText =
            "🪔 " + name;

        list.appendChild(item);
    });
}


/* মাস দেখানো */

function updateCalendar() {

    const month =
        months[currentMonth];

    const monthName =
        document.getElementById("monthName");

    const yearName =
        document.getElementById("yearName");


    if (monthName) {
        monthName.innerText = month;
    }


    if (yearName) {
        yearName.innerText =
            banglaNumber(currentYear) +
            " বঙ্গাব্দ";
    }


    createCalendar();

    createFestivals();
}


/* আগের মাস */

const previous =
    document.getElementById("prevMonth");

if (previous) {

    previous.addEventListener(
        "click",
        function() {

            currentMonth--;

            if (currentMonth < 0) {

                currentMonth = 11;
                currentYear--;

            }

            updateCalendar();
        }
    );
}


/* পরের মাস */

const next =
    document.getElementById("nextMonth");

if (next) {

    next.addEventListener(
        "click",
        function() {

            currentMonth++;

            if (currentMonth > 11) {

                currentMonth = 0;
                currentYear++;

            }

            updateCalendar();
        }
    );
}


/* প্রথমবার */

updateCalendar();
