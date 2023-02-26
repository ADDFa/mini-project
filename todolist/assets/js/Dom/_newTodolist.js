import { el, event } from "./_function.js";
import { instanceTodo } from "../TodoStorage/Todo.js";
import { closePopup } from "./_popup.js";
import { pushTodolist } from "./_setTodolist.js";
export const contentPopup = /* html */ `
        <h4>Tambah Todolist</h4>

        <div class="input">
            <input type="text" name="name-todolist" placeholder="Judul Todolist" />
        </div>

        <div class="_btn-submit">
            <button type="button" class="btn-submit create-todo">Tambah Todolist</button>
        </div>
    `;
const createNewTodo = () => {
    const name = el(`[name="name-todolist"]`).value;
    const todo = instanceTodo.createTodo(name);
    pushTodolist(todo);
    closePopup();
};
export const eventCreateTodo = [
    event(".create-todo", "click", createNewTodo),
    event(`[name="name-todolist"]`, "keydown", (evt) => {
        if (evt.key !== "Enter")
            return;
        createNewTodo();
    })
];
