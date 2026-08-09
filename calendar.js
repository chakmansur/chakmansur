const banglaMonths = [
    "বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ",
    "ভাদ্র", "আশ্বিন", "কার্তিক", "অগ্রহায়ণ",
    "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"
];

const englishMonths = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let currentDate = new Date();

const banglaMonth = document.getElementById("banglaMonth");
const englishMonth = document.getElementById("englishMonth");
const calendarDays = document.getElementById("calendarDays");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");


function getBanglaDate(date) {

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    // বাংলা নববর্ষ ১৪ এপ্রিল থেকে ধরা হচ্ছে
    let banglaYear;

    if (month > 3 || (month === 3 && day >= 14)) {
        banglaYear = year - 593;
    } else {
        banglaYear = year - 594;
    }

    // বাংলা মাসের আনুমানিক শুরু
    const starts = [
        [3,14],
        [4,15],
        [5,15],
        [6,16],
        [7,17],
        [8,17],
        [9,17],
        [10,16],
        [11,16],
        [0,15],
        [1,14],
        [2,15]
    ];

    let bMonth = 0;

    for(let i = 0; i < starts.length; i++){

        const startMonth = starts[i][0];
        const startDay = starts[i][1];

        if(
            month > startMonth ||
            (month === startMonth && day >= startDay)
        ){
            bMonth = i;
        }

    }

    const [startMonth, startDay] = starts[bMonth];

    let startYear = year;

    if(startMonth > month){
        startYear--;
    }

    const startDate =
        new Date(startYear, startMonth, startDay);

    const diff =
        Math.floor(
            (date - startDate) / 86400000
        );

    const banglaDay = diff + 1;

    return {
        year: banglaYear,
        month: banglaMonths[bMonth],
        day: banglaDay
    };
}


function showCalendar(){

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay =
        new Date(year, month, 1).getDay();

    const totalDays =
        new Date(year, month + 1, 0).getDate();

    const firstBangla =
        getBanglaDate(
            new Date(year, month, 1)
        );

    banglaMonth.textContent =
        firstBangla.month + " " +
        firstBangla.year;

    englishMonth.textContent =
        englishMonths[month] + " " + year;

    calendarDays.innerHTML = "";

    // Empty boxes
    for(let i = 0; i < firstDay; i++){

        const empty =
            document.createElement("div");

        empty.className = "empty";

        calendarDays.appendChild(empty);
    }


    // Dates
    for(let day = 1; day <= totalDays; day++){

        const box =
            document.createElement("div");

        const date =
            new Date(year, month, day);

        const bangla =
            getBanglaDate(date);

        box.innerHTML =
            `<strong>${day}</strong>
             <small>${bangla.day}</small>`;

        const today = new Date();

        if(
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ){
            box.classList.add("today");
        }

        calendarDays.appendChild(box);
    }
}


// Previous month

prevMonth.addEventListener("click", () => {

    currentDate.setMonth(
        currentDate.getMonth() - 1
    );

    showCalendar();

});


// Next month

nextMonth.addEventListener("click", () => {

    currentDate.setMonth(
        currentDate.getMonth() + 1
    );

    showCalendar();

});


// Start

showCalendar();
