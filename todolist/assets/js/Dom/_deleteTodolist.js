import { instanceTodo } from "../TodoStorage/Todo.js";
import { event } from "./_function.js";
import setTodolist from "./_setTodolist.js";
export const eventRemoveTodo = event(".delete-todolist", "click", function () {
    if (!confirm("Anda yakin?").valueOf())
        return;
    const id = this.dataset.id;
    instanceTodo.deleteTodo(id);
    setTodolist();
});
