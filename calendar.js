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

function bn(number){
    return String(number).replace(/\d/g, function(d){
        return banglaDigits[d];
    });
}


/* =========================
   ২০২৬ সালের বাংলা পঞ্জিকা
   ========================= */

const banglaMonths = [

    {
        name: "বৈশাখ",
        year: ১৪৩৩,
        days: 31
    },

    {
        name: "জ্যৈষ্ঠ",
        year: ১৪৩৩,
        days: 31
    },

    {
        name: "আষাঢ়",
        year: ১৪৩৩,
        days: 31
    },

    {
        name: "শ্রাবণ",
        year: ১৪৩৩,
        days: 31
    },

    {
        name: "ভাদ্র",
        year: ১৪৩৩,
        days: 31
    },

    {
        name: "আশ্বিন",
        year: ১৪৩৩,
        days: 30
    },

    {
        name: "কার্তিক",
        year: ১৪৩৩,
        days: 30
    },

    {
        name: "অগ্রহায়ণ",
        year: ১৪৩৩,
        days: 30
    },

    {
        name: "পৌষ",
        year: ১৪৩৩,
        days: 30
    },

    {
        name: "মাঘ",
        year: ১৪৩৩,
        days: 30
    },

    {
        name: "ফাল্গুন",
        year: ১৪৩৩,
        days: 29
    },

    {
        name: "চৈত্র",
        year: ১৪৩৩,
        days: 30
    }

];


/* =========================
   Current month
========================= */

let currentMonth = 3;


/* =========================
   Calendar show
========================= */

function showCalendar(){

    const month =
        banglaMonths[currentMonth];

    document.getElementById("monthName")
        .innerText = month.name;

    document.getElementById("yearName")
        .innerText = "১৪৩৩ বঙ্গাব্দ";


    const container =
        document.getElementById("calendarDays");

    container.innerHTML = "";


    for(let i = 1; i <= month.days; i++){

        const day =
            document.createElement("div");

        day.innerText = bn(i);

        container.appendChild(day);

    }

}


/* =========================
   Previous month
========================= */

document.getElementById("prevMonth")
.addEventListener("click", function(){

    currentMonth--;

    if(currentMonth < 0){
        currentMonth = 11;
    }

    showCalendar();

});


/* =========================
   Next month
========================= */

document.getElementById("nextMonth")
.addEventListener("click", function(){

    currentMonth++;

    if(currentMonth > 11){
        currentMonth = 0;
    }

    showCalendar();

});


/* =========================
   Today's date
========================= */

function showToday(){

    const today =
        new Date();

    const englishDate =
        today.toLocaleDateString(
            "bn-BD",
            {
                day:"numeric",
                month:"long",
                year:"numeric"
            }
        );


    document.getElementById("todayEnglish")
        .innerText =
        "আজ: " + englishDate;


    /*
       আপাতত বাংলা তারিখ
       পরে আসল পঞ্জিকা data বসানো হবে
    */

    document.getElementById("todayDate")
        .innerText =
        "আজকের বাংলা তারিখ";


}


/* =========================
   Start
========================= */

showCalendar();

showToday();
