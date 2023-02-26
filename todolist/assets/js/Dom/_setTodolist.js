import { el, event } from "./_function.js";
import { instanceTodo } from "../TodoStorage/Todo.js";
import { eventRemoveTodo } from "./_deleteTodolist.js";
import { eventNewListTodolist } from "./_newListTodolist.js";
import { eventDeleteListTodolist } from "./_deleteListTodolist.js";
const eventActionListTodolist = event(`[data-target="action-list-todolist"]`, "click", function () {
    el(`.${this.dataset.target}`).classList.toggle("active");
});
export const setTodolist = () => {
    const dataTodo = instanceTodo.getTodo();
    let todolistContent = "";
    dataTodo.map(({ id, title, listTodo }) => {
        const parentId = id;
        // set list-todolist element
        let listTodolistContent = "";
        listTodo.map(({ id, name, time }) => {
            if (!id)
                return;
            listTodolistContent += listTodolist(time, name, id, parentId);
        });
        // set todolist
        todolistContent += todolist(parentId, title, listTodolistContent);
    });
    el(".todolist-content").innerHTML = todolistContent;
    // running event
    eventRemoveTodo();
    eventNewListTodolist();
    eventDeleteListTodolist();
    eventActionListTodolist();
};
export const pushTodolist = (todo) => {
    let listTodolistContent = "";
    todo.listTodo.map(({ id, time, name }) => {
        if (id)
            listTodolistContent += listTodolist(time, name, id, todo.id);
    });
    el(".todolist-content").innerHTML += todolist(todo.id, todo.title, listTodolistContent);
    // running event
    eventRemoveTodo();
    eventNewListTodolist();
    eventDeleteListTodolist();
};
const listTodolist = (time, name, id, parentId) => {
    return /* html */ `
        <li>
            <span class="time">${time}</span>
            <span class="name">${name}</span>
            <div class="action-list-todolist">
                <ul class="action-list">
                    <li>
                        <button data-id="${id}" data-todoId="${parentId}" class="delete-list-todolist">Tandai Selesai</button>
                    </li>
                </ul>

                <svg data-target="action-list-todolist" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /></svg>
            </div>
        </li>
    `;
};
const todolist = (id, title, listTodolist) => {
    return /* html */ `
        <div class="list-todolist-action">
            <span class="delete-todolist" title="Hapus Todolist Ini" data-id="${id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
            </span>
            <span class="new-list-todolist" title="Tambah Daftar Todolist" data-id="${id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-dotted" viewBox="0 0 16 16"><path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg>
            </span>
        </div>

        <div class="todolist">
            <h2 class="todolist-title">${title}</h2>
            <ul class="list-todolist">${listTodolist}</ul>
        </div>
    `;
};
export default setTodolist;
