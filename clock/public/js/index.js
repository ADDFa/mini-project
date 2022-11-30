runClock = () => {
    const date = new Date
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    document.querySelector('.second').style.transform = `rotate(${6 * second}deg)`
    document.querySelector('.minute').style.transform = `rotate(${6 * minute}deg)`
    document.querySelector('.hour').style.transform = `rotate(${hour / 8 * 60}deg)`
    document.querySelector('.text-times span').textContent = `${(hour < 10) ? '0' + hour : hour} : ${(minute < 10) ? '0' + minute : minute} : ${(second < 10) ? '0' + second : second}`
}

setInterval(runClock, 1000)
