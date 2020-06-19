const date = new Date();

date.setDate(1);
console.log(date.getDay())

const monthDays = document.querySelector('.days');

const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

const firstDayIndex = date.getDay();

const months = [
    "Janurary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

document.querySelector('.date h1').innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = date.toDateString();

let days = "";

for(let x = firstDayIndex; x>0; x--) {
    days += `<div class="prev-date">${prevLastDay-x}</div>`;
}

for(let i = 1; i<=lastDay; i++) {
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
}