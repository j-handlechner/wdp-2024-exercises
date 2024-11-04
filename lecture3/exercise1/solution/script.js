function getLocalTime(timeZone = 'Europe/Vienna', hourElement = null, minuteElement = null) {
    if(!hourElement || !minuteElement) {
        console.error('hourElement or minuteElement not found');
        return;
    }

    let options = { timeZone , hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    let formatter = new Intl.DateTimeFormat([], options);

    let salzburgTime = formatter.format(new Date());

    // am or pm
    const ampm = salzburgTime.split(' ')[1];
    
    return {
        hours: salzburgTime.split(':')[0],
        minutes: salzburgTime.split(':')[1],
        ampm
    }

}

const hourElement = document.querySelector('.js-local-info__hours');
const minuteElement = document.querySelector('.js-local-info__minutes');
const unitElement = document.querySelector('.js-local-info__unit');

setInterval(() => {
    const time = getLocalTime('Europe/Vienna', hourElement, minuteElement);
    hourElement.innerHTML = time.hours;
    minuteElement.innerHTML = time.minutes;
    unitElement.innerHTML = time.ampm;
}, 100);