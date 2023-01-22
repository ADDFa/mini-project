import { qs, el } from "./selector.js"

const showMessage = (messageText, duration = 1500) => {
    const timeout = 300

    return new Promise(resolve => {
        const message = el("#message")
        message.style.scale = 1
        qs(message, "h2").innerHTML = messageText

        setTimeout(() => message.style.opacity = 1, timeout)
        setTimeout(() => message.style.opacity = 0, duration)
        setTimeout(() => {
            message.style.scale = 0
            resolve()
        }, duration + 1000)
    })
}

export default showMessage