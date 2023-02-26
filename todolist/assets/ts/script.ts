import { el } from "./Dom/_function.js"
import { instanceTodo } from "./TodoStorage/Todo.js"
import { setPopupContent, openPopup } from "./Dom/_popup.js"
import {
    contentPopup as contentPopupNewTodolist,
    eventCreateTodo
} from "./Dom/_newTodolist.js"
import setTodolist from "./Dom/_setTodolist.js"
import "./Dom/_deleteTodolist.js"

const todolistAction = el(".todolist-action")

document.addEventListener("DOMContentLoaded", () => setTodolist())

todolistAction.addEventListener("click", ({ target }) => {
    if ((target as HTMLElement).classList.contains("new-todolist")) {
        // set popup content
        setPopupContent(contentPopupNewTodolist, eventCreateTodo)

        // munculkan popup
        openPopup()
    }

    // remove all todolist
    if ((target as HTMLElement).classList.contains("remove-all-todolist")) {
        if (confirm("Anda Yakin?").valueOf()) {
            instanceTodo.deleteAllTodo()
            setTodolist()
        }
    }
})
