// variable for username
let userName = prompt("Adınız: ")

let myName = document.querySelector("#myName")

// Check username and assing myName
myName.innerHTML = `${userName.length > 0 ? userName : "Guest"}`

const myClock = document.querySelector("#myClock");

// Get the Day
function getDayString(dayNumber) {
const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
return days[dayNumber]
}

// Get the Current Time
function getTimeAndDay(){
    const date = new Date();
    let currentTimeAndDate;

    const options = { hour12: false }
    currentTimeAndDate = `${date.toLocaleTimeString('tr-TR', options)} ${getDayString(date.getDay())}`;
    return currentTimeAndDate;
}

function showTime(){
    myClock.innerHTML = getTimeAndDay();
}

//Run and Refresh Every Time

setInterval(showTime);