
window.onload = function() {
    clock();
    
}

function clock() {
    let today = new Date();
    let hours = today.getHours();
    let timeShift = hours >= 12 ? "PM" : "AM";
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    //let date = today.toDateString();
    
    function timer() {
        let today = new Date();
        let t = (hours < 10 ? "0" : "") + today.getHours() % 12 + 
        ":" + (today.getMinutes() < 10 ? "0" : "") + today.getMinutes() + 
        ":" + (today.getSeconds() < 10 ? "0" : "") + today.getSeconds() +
        " " + timeShift;
        document.getElementById("time").innerHTML = t;
        console.log("Timer is running!");
    }
    timer();
    setInterval(timer, 1000); 

    let date = day[today.getDay()] + " " + month[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear();
    document.getElementById("date").innerHTML = date;
          
}

