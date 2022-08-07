let currentTime = new Date()
let hour = currentTime.getHours()
let minute = currentTime.getMinutes()
let timePeriod = "am"

if (hour > 12) {
    hour = hour - 12
}

if (minute < 10) {
    // @ts-ignore
    minute = '0' + minute
}

if (hour >= 12) {
    timePeriod = "pm"
} else {
    timePeriod = "am"
}

// @ts-ignore
document.getElementById('time').innerHTML = hour + ":" + minute + " " + timePeriod