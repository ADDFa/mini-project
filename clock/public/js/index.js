runClock = () => {
    const date = new Date
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    document.querySelector('.second').style.transform = `rotate(${6 * second}deg)`
    document.querySelector('.minute').style.transform = `rotate(${6 * minute}deg)`
<<<<<<< HEAD
    document.querySelector('.hour').style.transform = `rotate(${hour / 4 * 60}deg)`
    document.querySelector('.text-times span').textContent = `${hour} : ${minute} : ${(second < 10) ? '0' + second : second}`
=======
    document.querySelector('.hour').style.transform = `rotate(${hour / 2 * 30}deg)`
    document.querySelector('.text-times span').textContent = `${(hour < 10) ? '0' + hour : hour} : ${(minute < 10) ? '0' + minute : minute} : ${(second < 10) ? '0' + second : second}`
>>>>>>> a9643c9de6e1a88bc57f64b2ace1ea1752d49e18
}

setInterval(runClock, 1000)
