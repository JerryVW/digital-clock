clock();
window.onload = setInterval(clock, 1000);;

function clock() {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let timeShift = hours >= 12 ?  "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        let time =  `${hours}:${minutes}:${seconds} ${timeShift}`; 
        document.getElementById("time").innerHTML = time;

        
        let date = `${getDay(today)} ${getMonth(today)} ${today.getDate()}, ${today.getFullYear()}`;
        document.getElementById("date").innerHTML = date; 
}

function getDay(date) {
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return day[date.getDay()];
}

function getMonth(date) {
    const month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return month[date.getMonth()]
}