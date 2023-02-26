import { el } from "./_function.js";
export const setPopupContent = (content, events) => {
    el(".popup-content").innerHTML = content;
    if (events)
        events.map((event) => event());
};
export const openPopup = () => el("._popup").classList.add("active");
export const closePopup = () => el("._popup").classList.remove("active");
el(".popup-close svg").addEventListener("click", () => el("._popup").classList.remove("active"));
