import pages, { navigate } from "./src/pages.js"
import pushData from "./src/pushData.js"

pages("home")

document.addEventListener("click", e => {
    if (e.target.classList.contains("navigate")) {
        e.preventDefault()
        navigate(e.target.getAttribute("href"))
    }

    if (e.target.classList.contains("send")) pushData(e.target)
})