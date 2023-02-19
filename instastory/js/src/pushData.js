import { base_api_url, el, setAlert } from "./function/global.js"

const pushData = target => {
    const path = target.dataset.url

    return new Promise((resolve, reject) => {
        fetch(`${base_api_url}${path}`, {
            method: "POST",
            body: new FormData(target.form)
        })
            .then(res => {
                if (res.ok) {
                    setAlert()
                    return res.json()
                }
                return reject(res)
            })
            .then(res => resolve(res))
    })
}

export default pushData