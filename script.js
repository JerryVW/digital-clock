
window.onload = function() {
    time();
}

function time() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let date = (today.getMonth() + 1) + " " + today.getDate() + ", " + today.getFullYear();
    
    
    time = document.getElementById("time").innerHTML = time;
    date = document.getElementById("date").innerHTML = date;

    let clockTick = function() {
        today.getSeconds()++;
        return setInterval(clockTick, 1000);
    }

    console.log(clockTick());
}

