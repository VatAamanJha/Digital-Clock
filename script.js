//  For Time
function playAudio(){
    document.getElementById("sound").play();
    }
    setInterval(playAudio, 1000);
function time() {
    let CurrentTime = new Date();
    hour = CurrentTime.getHours();
    if (hour == 13) {
        hour = 1;
    }
    else if (hour == 14) {
        hour = 2;
    }
    else if (hour == 15) {
        hour = 3;
    }
    else if (hour == 16) {
        hour = 4;
    }
    else if (hour == 17) {
        hour = 5;
    }
    else if (hour == 18) {
        hour = 6;
    }
    else if (hour == 19) {
        hour = 7;
    }
    else if (hour == 20) {
        hour = 8;
    }
    else if (hour == 21) {
        hour = 9;
    }
    else if (hour == 22) {
        hour = 10;
    }
    else if (hour == 23) {
        hour = 11;
    }
    else if (hour == 24) {
        hour = 12;
    }
    min = CurrentTime.getMinutes();
    sec = CurrentTime.getSeconds();
    lh = hour.toString().length;
    lm = min.toString().length;
    ls = sec.toString().length;
    if (lm == 1) {
        min = "0" + min;
    }
    if (lh == 1) {
        hour = "0"+ hour;
    }
    if (ls == 1) {
        sec = "0" + sec;
    }
    
    let time = hour + ":" + min + ":" + sec
    document.getElementById('time').innerHTML = time;
}
setInterval(time, 1000);
// /End
// For Day
function day() {
    let CurrentTime = new Date();
    day = CurrentTime.getDay();
    if (day == 0) {
        return "Sunday";
    }
    else if (day == 1) {
        return "Monday";
    }
    else if (day == 2) {
        return "Tuesday";
    }
    else if (day == 3) {
        return "Wednesday";
    }
    else if (day == 4) {
        return "Thursday";
    }
    else if (day == 5) {
        return "Friday";
    }
    else if (day == 6) {
        return "Saturday";
    }
}
CurrentDay = day();
function months() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let CurrentTime = new Date();
    return months[CurrentTime.getMonth()];
}
CurrentMonths = months();
function year() {
    let CurrentTime = new Date();
    return CurrentTime.getFullYear();
}
CurrentYear = year();
function date() {
    let CurrentTime = new Date();
    date = CurrentTime.getDate();
    ld = date.toString().length;
    if (ld == 1) {
        date = "0" + date
    }
    else {
        date = date;
    }
    return date;
}
CurrentDate = date();
day = CurrentMonths + "," + CurrentDay + " " + CurrentDate;
document.getElementById('day').innerHTML = day;
// End
function meridiem() {
    let CurrentTime = new Date();
    hour = CurrentTime.getHours();
    if (hour <= 12) {
        document.getElementById('ampm').innerHTML = "AM";
    }
    else {
        document.getElementById('ampm').innerHTML = "PM";
    }
}
setInterval(meridiem,1000);