const root = document.getElementById("root")

const pages = page => {
    fetch(`./html/${page}.html`, {
        headers: {
            "Content-Type": "text/html"
        }
    })
        .then(res => res.text())
        .then(res => root.innerHTML = res)
}

export const navigate = to => {
    pages(to)
}

export default pages