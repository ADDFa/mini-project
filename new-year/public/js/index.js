const days = document.querySelector('.days p')
const hours = document.querySelector('.hours p')
const minutes = document.querySelector('.minutes p')
const seconds = document.querySelector('.seconds p')
const description = document.querySelector('.description p')

const getDate = now => {
    const newYears = new Date(now.getFullYear(), 12, 0)
    const date = {
        days: newYears.getDate() - now.getDate(),
        hours: 24 - now.getHours(),
        minutes: 60 - now.getMinutes(),
        seconds: 60 - now.getSeconds()
    }

    return date
}

setInterval(() => {
    const now = new Date
    const dates = getDate(now)

    days.textContent = dates.days
    hours.textContent = dates.hours
    minutes.textContent = dates.minutes
    seconds.textContent = dates.seconds

    description.textContent = `${dates.days} Hari, ${dates.hours} Jam : ${dates.minutes} Menit : ${dates.seconds} Detik Lagi`
}, 1000)

// ---------------

const wantOpen = () => document.querySelector('.want').classList.toggle('want-open')
setTimeout(() => wantOpen(), 1500)

const eventClickClose = ['.close', '.want button']
eventClickClose.map(e => document.querySelector(e).addEventListener('click', wantOpen))

// ---------------

const thanksTeksRunning = () => {
    const label = document.querySelector('.want label:nth-child(2)')
    const text = label.textContent.split('')
    const time = 200

    const fillText = () => {
        label.textContent = ''

        text.map((char, i) => {
            setTimeout(() => {
                label.textContent += char
            }, time * i)
        })
    }

    fillText()

    setInterval(fillText, time * text.length - 1)
}

setTimeout(thanksTeksRunning, 2000)

// ---------------

const alerts = document.querySelector('.alert')

const showAlert = () => {
    alerts.style.display = 'initial'

    setTimeout(() => alerts.style.animation = 'alert .4s alternate', 1)
    setTimeout(() => alerts.style.display = 'none', 2000)
}

const doneSendWant = () => {
    alerts.textContent = 'Jawaban Anda Telah Direkam'

    showAlert()
}

const failSendWant = () => {
    alerts.textContent = 'Maaf, Server Error - Mohon Coba Lagi Nanti'

    showAlert()
}

document.querySelector('.want button').addEventListener('click', e => {
    const forms = new FormData

    forms.append('want', e.target.form.querySelector('[name="want"]').value)
    fetch('https://mixtimid.000webhostapp.com/mini-project/new-years/', {
        body: forms,
        method: 'POST'
    })
        .then(e => (e.status) ? doneSendWant() : failSendWant())
})