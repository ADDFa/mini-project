import { el } from "./_function.js"
import { event } from "./_function.js"

export const setPopupContent = (
    content: string,
    events: ReturnType<typeof event>[] | null
) => {
    el(".popup-content").innerHTML = content
    if (events) events.map((event) => event())
}

export const openPopup = (): void => el("._popup").classList.add("active")
export const closePopup = (): void => el("._popup").classList.remove("active")

el(".popup-close svg").addEventListener("click", () =>
    el("._popup").classList.remove("active")
)
