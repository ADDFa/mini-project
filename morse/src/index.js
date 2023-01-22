import decrypt from "./resource/decrypt.js"
import encrypt from "./resource/encrypt.js"
import { el } from "./resource/selector.js"

const code = el("#code textarea")
const button = el("#text button")
const textArea = text.querySelector("#text textarea")

button.addEventListener("click", async function () {
    this.setAttribute("disabled", "")

    const isEncrypt = el("#option select").value === "encrypt"
    const res = isEncrypt ? await encrypt(textArea.value) : await decrypt(textArea.value)
    code.value = res

    this.removeAttribute("disabled")
})