const getHour = ({ hour, minute }) => {
    let hours = hour
    if (hour > 12) hours = hour - 12
    let result = hours * 30 + (minute / 2)

    return result
}

runClock = () => {
    const date = new Date
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const hours = {
        hour: date.getHours(),
        minute
    }

    const hour = getHour(hours)

    document.querySelector('.second').style.transform = `rotate(${6 * second}deg)`
    document.querySelector('.minute').style.transform = `rotate(${6 * minute}deg)`
    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
    document.querySelector('.text-times span').textContent = `${(hours.hour < 10) ? '0' + hours.hour : hours.hour} : ${(minute < 10) ? '0' + minute : minute} : ${(second < 10) ? '0' + second : second}`
}

setInterval(runClock, 1000)
