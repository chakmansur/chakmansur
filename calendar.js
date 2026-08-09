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

    "বৈশাখ": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "পয়লা বৈশাখ",
            "অক্ষয় তৃতীয়া"
        ]
    },

    "জ্যৈষ্ঠ": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "জামাই ষষ্ঠী",
            "জ্যৈষ্ঠ পূর্ণিমা"
        ]
    },

    "আষাঢ়": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "জগন্নাথ রথযাত্রা",
            "উল্টো রথযাত্রা"
        ]
    },

    "শ্রাবণ": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "শ্রাবণী পূর্ণিমা",
            "ঝুলন যাত্রা",
            "জন্মাষ্টমী"
        ]
    },

    "ভাদ্র": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "গণেশ চতুর্থী",
            "বিশ্বকর্মা পূজা"
        ]
    },

    "আশ্বিন": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "মহালয়া",
            "দুর্গাপূজা",
            "বিজয়া দশমী"
        ]
    },

    "কার্তিক": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "কালীপূজা",
            "দীপাবলি",
            "ভাইফোঁটা"
        ]
    },

    "অগ্রহায়ণ": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "নবান্ন",
            "রাস পূর্ণিমা"
        ]
    },

    "পৌষ": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "পৌষ সংক্রান্তি",
            "পৌষ পার্বণ"
        ]
    },

    "মাঘ": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "সরস্বতী পূজা",
            "মাঘী পূর্ণিমা"
        ]
    },

    "ফাল্গুন": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "শিবরাত্রি",
            "দোলযাত্রা",
            "দোল পূর্ণিমা"
        ]
    },

    "চৈত্র": {
        bibaha: "পঞ্জিকা অনুযায়ী শুভ দিন",
        annaprashan: "পঞ্জিকা অনুযায়ী শুভ দিন",
        grihapravesh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        namakaran: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vidyarambh: "পঞ্জিকা অনুযায়ী শুভ দিন",
        vehicle: "পঞ্জিকা অনুযায়ী শুভ দিন",
        festivals: [
            "চৈত্র সংক্রান্তি",
            "চড়ক পূজা",
            "গাজন"
        ]
    }
};


/* বাংলা সংখ্যা */

function banglaNumber(number){

    const digits = [
        "০","১","২","৩","৪",
        "৫","৬","৭","৮","৯"
    ];

    return String(number).replace(
        /\d/g,
        function(digit){
            return digits[digit];
        }
    );
}


/* বর্তমান মাস */

let currentMonth = 3;
let currentYear = 1433;


/* মাস দেখানো */

function showMonth(){

    const month =
        months[currentMonth];

    const info =
        monthInfo[month];


    document.getElementById("monthName")
        .textContent = month;

    document.getElementById("yearName")
        .textContent =
        banglaNumber(currentYear) +
        " বঙ্গাব্দ";


    document.getElementById("bibaha")
        .textContent = info.bibaha;

    document.getElementById("annaprashan")
        .textContent = info.annaprashan;

    document.getElementById("grihapravesh")
        .textContent = info.grihapravesh;

    document.getElementById("namakaran")
        .textContent = info.namakaran;

    document.getElementById("vidyarambh")
        .textContent = info.vidyarambh;

    document.getElementById("vehicle")
        .textContent = info.vehicle;


    const festivalList =
        document.getElementById("festivalList");

    festivalList.innerHTML = "";


    info.festivals.forEach(function(festival){

        const item =
            document.createElement("div");

        item.className =
            "festival-item";

        item.innerHTML =
            "🪔 " +
            "<strong>" +
            festival +
            "</strong>";

        festivalList.appendChild(item);

    });


    createDays();
}


/* বাংলা মাসের ৩০ দিন */

function createDays(){

    const calendarDays =
        document.getElementById("calendarDays");

    calendarDays.innerHTML = "";


    for(let day = 1; day <= 30; day++){

        const cell =
            document.createElement("div");

        cell.textContent =
            banglaNumber(day);

        calendarDays.appendChild(cell);

    }

}


/* আগের মাস */

document.getElementById("prevMonth")
.addEventListener("click", function(){

    currentMonth--;

    if(currentMonth < 0){

        currentMonth = 11;
        currentYear--;

    }

    showMonth();

});


/* পরের মাস */

document.getElementById("nextMonth")
.addEventListener("click", function(){

    currentMonth++;

    if(currentMonth > 11){

        currentMonth = 0;
        currentYear++;

    }

    showMonth();

});


/* প্রথমবার চালু */

showMonth();
