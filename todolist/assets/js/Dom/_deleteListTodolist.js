import { instanceTodo } from "../TodoStorage/Todo.js";
import { event } from "./_function.js";
import setTodolist from "./_setTodolist.js";
export const eventDeleteListTodolist = event(".delete-list-todolist", "click", function () {
    // delete list todolist
    instanceTodo.deleteListTodo(this.dataset.todoid, this.dataset.id);
    // refresh todo
    setTodolist();
});
