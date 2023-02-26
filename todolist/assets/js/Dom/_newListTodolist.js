import { instanceTodo } from "../TodoStorage/Todo.js";
import { el, event } from "./_function.js";
import { openPopup, setPopupContent, closePopup } from "./_popup.js";
import setTodolist from "./_setTodolist.js";
const contentPopup = (id) => {
    return /* html */ `
        <h4>Tambah Daftar Todolist</h4>

        <div class="input">
            <input type="text" name="name-list-todolist" placeholder="Nama Kegiatan" />
        </div>

        <div class="input">
            <input type="time" name="time-list-todolist" />
        </div>

        <div class="_btn-submit">
            <button type="button" class="btn-submit create-list-todolist" data-id="${id}">Tambah Daftar Todolist</button>
        </div>
    `;
};
const eventCreateListTodolist = event(".create-list-todolist", "click", function () {
    const name = el(`[name="name-list-todolist"]`)
        .value;
    let time = el(`[name="time-list-todolist"]`)
        .value;
    time = time.split(":");
    let date = new Date();
    const hours = time[0] < 10 ? `0${time[0]}` : time[0];
    const minutes = time[1] < 10 ? `0${time[1]}` : time[1];
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
    if (!this.dataset.id)
        return;
    instanceTodo.addListTodo(this.dataset.id, name, date);
    // set new todolist and close popup
    setTodolist();
    closePopup();
});
export const eventNewListTodolist = event(".new-list-todolist", "click", function () {
    if (this.dataset.id) {
        // set content popup
        setPopupContent(contentPopup(this.dataset.id), [
            eventCreateListTodolist
        ]);
        // open popup
        openPopup();
    }
});
