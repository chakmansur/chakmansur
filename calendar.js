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
    "বৈশাখ": ["পয়লা বৈশাখ", "অক্ষয় তৃতীয়া"],
    "জ্যৈষ্ঠ": ["জামাই ষষ্ঠী", "জ্যৈষ্ঠ পূর্ণিমা"],
    "আষাঢ়": ["রথযাত্রা", "উল্টো রথযাত্রা"],
    "শ্রাবণ": ["শ্রাবণী পূর্ণিমা", "ঝুলন যাত্রা", "জন্মাষ্টমী"],
    "ভাদ্র": ["গণেশ চতুর্থী", "বিশ্বকর্মা পূজা"],
    "আশ্বিন": ["মহালয়া", "দুর্গাপূজা", "বিজয়া দশমী"],
    "কার্তিক": ["কালীপূজা", "দীপাবলি", "ভাইফোঁটা"],
    "অগ্রহায়ণ": ["নবান্ন", "রাস পূর্ণিমা"],
    "পৌষ": ["পৌষ সংক্রান্তি", "পৌষ পার্বণ"],
    "মাঘ": ["সরস্বতী পূজা", "মাঘী পূর্ণিমা"],
    "ফাল্গুন": ["শিবরাত্রি", "দোলযাত্রা", "দোল পূর্ণিমা"],
    "চৈত্র": ["চৈত্র সংক্রান্তি", "চড়ক পূজা", "গাজন"]
};

const banglaDigits = [
    "০","১","২","৩","৪",
    "৫","৬","৭","৮","৯"
];

function bn(number) {
    return String(number).replace(/\d/g, d => banglaDigits[d]);
}


/* শ্রাবণ ১৪৩৩ থেকে শুরু */

let monthIndex = 3;
let banglaYear = 1433;


/* ক্যালেন্ডার তৈরি */

function makeCalendar() {

    const days =
        document.getElementById("calendarDays");

    days.innerHTML = "";

    for (let i = 1; i <= 30; i++) {

        const day =
            document.createElement("div");

        day.innerText = bn(i);

        days.appendChild(day);
    }
}


/* মাসের তথ্য দেখানো */

function updateCalendar() {

    const month =
        months[monthIndex];

    document.getElementById("monthName")
        .innerText = month;

    document.getElementById("yearName")
        .innerText =
        bn(banglaYear) + " বঙ্গাব্দ";


    const list =
        document.getElementById("festivalList");

    list.innerHTML = "";


    festivals[month].forEach(function(name) {

        const item =
            document.createElement("div");

        item.className =
            "festival-item";

        item.innerText = "🪔 " + name;

        list.appendChild(item);

    });


    makeCalendar();
}


/* আগের মাস */

document.getElementById("prevMonth")
    .onclick = function() {

        monthIndex--;

        if (monthIndex < 0) {
            monthIndex = 11;
            banglaYear--;
        }

        updateCalendar();
    };


/* পরের মাস */

document.getElementById("nextMonth")
    .onclick = function() {

        monthIndex++;

        if (monthIndex > 11) {
            monthIndex = 0;
            banglaYear++;
        }

        updateCalendar();
    };


/* প্রথমবার */

updateCalendar();
