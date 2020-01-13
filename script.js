
window.onload = function() {
    clock();
    
}

function clock() {
    function timer() {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let timeShift = hours >= 12 ?  "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        let time = hours + ":" + minutes + ":" + seconds + " " + timeShift; 
        document.getElementById("time").innerHTML = time;
    }
    timer();
    setInterval(timer, 1000); 

    let today = new Date();
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let date = day[today.getDay()] + " " + month[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
    document.getElementById("date").innerHTML = date; 
}