import { findChildElementByClassName } from "./main.mjs"

const el = element => document.querySelector(`${element}`)

const clock = el(".clock")

const setTime = () => {
    const time = findChildElementByClassName(clock, "time")

    const timeElement = timeNumber =>
        /* html */
        `
        <span class="area">
            <span>${timeNumber}</span>
        </span>
        `

    for (let i = 0; i < 12; i++) {
        time.innerHTML += (i === 0) ? timeElement(12) : timeElement(i)
    }
}

window.addEventListener("DOMContentLoaded", setTime)

const getHourRotation = ({ hour, minute }) => {
    let hours = hour
    if (hour > 12) hours = hour - 12
    let result = hours * 30 + (minute / 2)

    return result
}

const runClock = () => {
    const date = new Date
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const hours = {
        hour: date.getHours(),
        minute
    }

    const needle = el(".needle")

    findChildElementByClassName(needle, "second").style.transform = `rotate(${6 * second}deg)`
    findChildElementByClassName(needle, "minute").style.transform = `rotate(${6 * minute}deg)`
    findChildElementByClassName(needle, "hour").style.transform = `rotate(${getHourRotation(hours)}deg)`
    el('.text-times span').textContent = `${(hours.hour < 10) ? '0' + hours.hour : hours.hour} : ${(minute < 10) ? '0' + minute : minute} : ${(second < 10) ? '0' + second : second}`
}

setInterval(runClock, 1000)
