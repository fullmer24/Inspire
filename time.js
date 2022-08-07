let currentTime = new Date()
let hour = currentTime.getHours()
let minute = currentTime.getMinutes()
let timePeriod = "am"

getTime()

function getTime() {
    if (hour > 12) {
        hour = hour - 12
    }

    if (minute < 10) {
        // @ts-ignore
        minute = '0' + minute
    }

    if (hour <= 12) {
        timePeriod = "pm"
    }


    // @ts-ignore
    document.getElementById('time').innerHTML = hour + ":" + minute + " " + timePeriod
}

// setInterval(getTime, 10000)