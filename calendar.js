// ===============================
// বাংলা ক্যালেন্ডার
// ===============================

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

let currentDate = new Date();

const banglaMonth = document.getElementById("banglaMonth");
const englishMonth = document.getElementById("englishMonth");
const calendarDays = document.getElementById("calendarDays");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

function showCalendar(){

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const englishMonthName =
        currentDate.toLocaleString("bn-BD", {
            month: "long"
        });

    englishMonth.textContent =
        englishMonthName + " " + year;

    calendarDays.innerHTML = "";

    // আগের খালি ঘর
    for(let i = 0; i < firstDay; i++){

        const empty = document.createElement("div");

        empty.className = "empty";

        calendarDays.appendChild(empty);

    }

    // তারিখ
    for(let day = 1; day <= totalDays; day++){

        const dateBox = document.createElement("div");

        dateBox.textContent = day;

        const today = new Date();

        if(
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ){

            dateBox.classList.add("today");

        }

        calendarDays.appendChild(dateBox);

    }

    // আপাতত বাংলা মাসের নাম
    const approxBanglaMonth =
        banglaMonths[(month + 8) % 12];

    banglaMonth.textContent =
        approxBanglaMonth + " মাস";
}


// আগের মাস

prevMonth.addEventListener("click", function(){

    currentDate.setMonth(
        currentDate.getMonth() - 1
    );

    showCalendar();

});


// পরের মাস

nextMonth.addEventListener("click", function(){

    currentDate.setMonth(
        currentDate.getMonth() + 1
    );

    showCalendar();

});


// শুরু

showCalendar();
