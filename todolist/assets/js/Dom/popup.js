import { el } from "./_function";
const popup = el("._popup");
const todolistAction = el(".todolist-action");
todolistAction.addEventListener("click", () => {
    // munculkan popup
    popup.classList.add("active");
});
