// বাংলা পঞ্জিকা - মাস পরিবর্তন

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

function banglaNumber(number) {
    return String(number).replace(
        /\d/g,
        digit => banglaDigits[digit]
    );
}


// শুরু হবে শ্রাবণ ১৪৩৩ থেকে
let monthIndex = 3;
let banglaYear = 1433;


// মাস দেখানো
function showMonth() {

    const month = months[monthIndex];

    document.getElementById("monthName").innerText = month;

    document.getElementById("yearName").innerText =
        banglaNumber(banglaYear) + " বঙ্গাব্দ";


    // ক্যালেন্ডারের তারিখ
    const calendarDays =
        document.getElementById("calendarDays");

    calendarDays.innerHTML = "";


    for (let day = 1; day <= 30; day++) {

        const box = document.createElement("div");

        box.innerText = banglaNumber(day);

        calendarDays.appendChild(box);
    }


    // উৎসব
    const festivalList =
        document.getElementById("festivalList");

    festivalList.innerHTML = "";


    festivals[month].forEach(function(festival) {

        const item =
            document.createElement("div");

        item.className = "festival-item";

        item.innerText = "🪔 " + festival;

        festivalList.appendChild(item);
    });
}


// আগের মাস
document.getElementById("prevMonth").onclick = function() {

    monthIndex--;

    if (monthIndex < 0) {
        monthIndex = 11;
        banglaYear--;
    }

    showMonth();
};


// পরের মাস
document.getElementById("nextMonth").onclick = function() {

    monthIndex++;

    if (monthIndex > 11) {
        monthIndex = 0;
        banglaYear++;
    }

    showMonth();
};


// প্রথমবার চালু
showMonth();
