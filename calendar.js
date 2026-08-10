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

const banglaNumbers = [
    "০","১","২","৩","৪",
    "৫","৬","৭","৮","৯"
];

function banglaNumber(number){

    return String(number).replace(
        /\d/g,
        function(digit){
            return banglaNumbers[digit];
        }
    );

}


/* বর্তমান বাংলা মাস */

let currentMonth = 3;
let currentYear = 1433;


/* Calendar দেখানো */

function showCalendar(){

    document.getElementById("monthName").innerText =
        months[currentMonth];

    document.getElementById("yearName").innerText =
        banglaNumber(currentYear) + " বঙ্গাব্দ";


    const calendarDays =
        document.getElementById("calendarDays");

    calendarDays.innerHTML = "";


    /*
       সাধারণ বাংলা মাসের দিন
    */

    let totalDays = 30;

    if(currentMonth === 0 ||
       currentMonth === 1 ||
       currentMonth === 2 ||
       currentMonth === 3 ||
       currentMonth === 4){

        totalDays = 31;

    }


    if(currentMonth === 10){

        totalDays = 29;

    }


    for(let day = 1; day <= totalDays; day++){

        const box =
            document.createElement("div");

        box.innerText =
            banglaNumber(day);

        calendarDays.appendChild(box);

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

    showCalendar();

});


/* পরের মাস */

document.getElementById("nextMonth")
.addEventListener("click", function(){

    currentMonth++;

    if(currentMonth > 11){

        currentMonth = 0;
        currentYear++;

    }

    showCalendar();

});


/* আজকের ইংরেজি তারিখ */

function showToday(){

    const today = new Date();

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
        "আজকের ইংরেজি তারিখ: " + englishDate;


    /*
       আপাতত বাংলা তারিখের জায়গায়
       আজকের দিন দেখানো হচ্ছে।
    */

    document.getElementById("todayDate")
        .innerText =
        "আজকের বাংলা তারিখ";


}


/* শুরু */

showCalendar();

showToday();
