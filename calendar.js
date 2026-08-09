const banglaMonths = [
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
    "০","১","২","৩","৪","৫","৬","৭","৮","৯"
];

function bnNumber(number){
    return String(number).replace(
        /\d/g,
        d => banglaNumbers[d]
    );
}

/*
   বাংলা ক্যালেন্ডার:
   বর্তমানে ২০২৬ সালের জন্য
   বৈশাখ থেকে চৈত্র পর্যন্ত মাস দেখানো হচ্ছে।
*/

let monthIndex = 0;
let banglaYear = ১৪৩৩;

const monthTitle =
    document.getElementById("banglaMonth");

const yearTitle =
    document.getElementById("banglaYear");

const daysBox =
    document.getElementById("calendarDays");

const prevButton =
    document.getElementById("prevMonth");

const nextButton =
    document.getElementById("nextMonth");


function createCalendar(){

    monthTitle.textContent =
        banglaMonths[monthIndex];

    yearTitle.textContent =
        bnNumber(banglaYear) + " বঙ্গাব্দ";

    daysBox.innerHTML = "";

    /*
       বাংলা মাসে ৩০ দিন ধরে
       ক্যালেন্ডার প্রদর্শন।
    */

    for(let day = 1; day <= 30; day++){

        const box =
            document.createElement("div");

        box.textContent =
            bnNumber(day);

        daysBox.appendChild(box);
    }
}


prevButton.addEventListener("click", function(){

    monthIndex--;

    if(monthIndex < 0){

        monthIndex = 11;
        banglaYear--;

    }

    createCalendar();

});


nextButton.addEventListener("click", function(){

    monthIndex++;

    if(monthIndex > 11){

        monthIndex = 0;
        banglaYear++;

    }

    createCalendar();

});


createCalendar();
