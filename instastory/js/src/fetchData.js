import { base_api_url } from "./function/global.js"

const fetchData = path => {
    return new Promise((resolve, reject) => {
        fetch(`${base_api_url}${path}`)
            .then(res => {
                if (res.ok) return res.json()
                return reject(res)
            })
            .then(res => resolve(res))
    })
}

export default fetchData