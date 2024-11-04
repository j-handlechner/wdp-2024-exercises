// selectors
const hours = document.querySelector('.local-time__hours');
const minutes = document.querySelector('.local-time__minutes');
const seconds = document.querySelector('.local-time__seconds');
const unit = document.querySelector('.local-time__unit');

// function get local time
function getLocalTime(timeZone = 'Europe/Vienna') {
    let options = { 
        timeZone: timeZone , 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };

    let formatter = new Intl.DateTimeFormat([], options);
    let salzburgTime = formatter.format(new Date());
    
    return {
        hours: salzburgTime.split(':')[0],
        minutes: salzburgTime.split(':')[1],
        seconds: salzburgTime.split(':')[2].split(' ')[0],
        unit: salzburgTime.split(' ')[1]
    }
}

// update the display of the time
setInterval(() => {
    const currentLocalTime = getLocalTime('Europe/London');

    hours.innerHTML = currentLocalTime.hours;
    minutes.innerHTML = currentLocalTime.minutes;
    seconds.innerHTML = currentLocalTime.seconds;
    unit.innerHTML = currentLocalTime.unit;
}, 100);