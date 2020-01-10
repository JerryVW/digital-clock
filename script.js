
window.onload = function() {
    time();
}

function time() {
    let today = new Date();
    let hours = today.getHours() % 12;
    let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let date = today.toDateString();
    let time = (today.getHours() < 10 ? "0" : "") + today.getHours() + 
                ":" + (today.getMinutes() < 10 ? "0" : "") + today.getMinutes() + 
                ":" + (today.getSeconds() < 10 ? "0" : "") + today.getSeconds() +
                " " + (hours >= 12 ? "PM" : "AM");
                 
    
    time = document.getElementById("time").innerHTML = time;
    date = document.getElementById("date").innerHTML = date;

    
}
setInterval(time, 1000);
 