const theTime = document.querySelector('#theTime');
const theSecond = document.querySelector('#seconds');
const theDay = document.querySelector("#whatDay");

function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    theTime.innerText = `${hours} : ${minutes}`;
}

function getSecond() {
    const date = new Date();
    const seconds = String(date.getSeconds()).padStart(2, '0');
    theSecond.innerText = seconds;
}

function getDay() {
    const date = new Date();
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const dayOfWeek = week[date.getDay() - 1];
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December']
    const whatMonth = months[date.getMonth()];

    const dayOfMonth = String(date.getDate());

    theDay.innerText = `${whatMonth} ${dayOfMonth}, ${dayOfWeek}`
}

getTime();
getSecond();
getDay();
setInterval(getTime, 1000);
setInterval(getSecond, 1000);
setInterval(getDay, 1000);