export const el = element => document.querySelector(`${element}`)

export const base_api_url = "https://mixtimid.000webhostapp.com/"

export const setAlert = () => {
    const alert = document.createElement("div")
    alert.classList.add("alert", "alert-primary")
    alert.textContent = "Thank You"

    const root = el("#root")
    root.insertBefore(alert, el("form"))
}