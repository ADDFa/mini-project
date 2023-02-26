var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Todo_instances, _Todo_name, _Todo_listTodo, _Todo_todo, _Todo_get, _Todo_findIndexById;
export default class Todo {
    constructor() {
        _Todo_instances.add(this);
        _Todo_name.set(this, "Todo");
        _Todo_listTodo.set(this, {
            id: null,
            name: "",
            time: ""
        });
        _Todo_todo.set(this, {
            id: 0,
            title: "",
            listTodo: [__classPrivateFieldGet(this, _Todo_listTodo, "f")]
        });
        _Todo_findIndexById.set(this, (data, id, i = 0) => {
            return data[i].id === parseInt(id)
                ? i
                : __classPrivateFieldGet(this, _Todo_findIndexById, "f").call(this, data, id, i + 1);
        });
        if (!localStorage.getItem(__classPrivateFieldGet(this, _Todo_name, "f"))) {
            console.log("Create Todo Collection");
            localStorage.setItem(__classPrivateFieldGet(this, _Todo_name, "f"), "[]");
        }
    }
    getTodo() {
        return JSON.parse(localStorage.getItem(__classPrivateFieldGet(this, _Todo_name, "f")) || "[]");
    }
    deleteAllTodo() {
        localStorage.setItem(__classPrivateFieldGet(this, _Todo_name, "f"), "[]");
    }
    createTodo(title) {
        __classPrivateFieldGet(this, _Todo_todo, "f").id = new Date().getTime();
        __classPrivateFieldGet(this, _Todo_todo, "f").title = title;
        const todo = __classPrivateFieldGet(this, _Todo_instances, "m", _Todo_get).call(this);
        todo.push(__classPrivateFieldGet(this, _Todo_todo, "f"));
        localStorage.setItem(__classPrivateFieldGet(this, _Todo_name, "f"), JSON.stringify(todo));
        return __classPrivateFieldGet(this, _Todo_todo, "f");
    }
    deleteTodo(id) {
        if (!id)
            return false;
        const todo = __classPrivateFieldGet(this, _Todo_instances, "m", _Todo_get).call(this);
        const index = __classPrivateFieldGet(this, _Todo_findIndexById, "f").call(this, todo, id);
        todo.splice(index, 1);
        localStorage.setItem(__classPrivateFieldGet(this, _Todo_name, "f"), JSON.stringify(todo));
        return true;
    }
    addListTodo(id, name, time) {
        if (!id)
            return;
        const hours = time.getHours();
        const minutes = time.getMinutes();
        __classPrivateFieldGet(this, _Todo_listTodo, "f").id = time.getTime();
        __classPrivateFieldGet(this, _Todo_listTodo, "f").name = name;
        __classPrivateFieldGet(this, _Todo_listTodo, "f").time = `${hours} : ${minutes}`;
        // find todo by id and push
        const todo = __classPrivateFieldGet(this, _Todo_instances, "m", _Todo_get).call(this);
        const todoTarget = __classPrivateFieldGet(this, _Todo_findIndexById, "f").call(this, todo, id);
        todo[todoTarget].listTodo.push(__classPrivateFieldGet(this, _Todo_listTodo, "f"));
        localStorage.setItem(__classPrivateFieldGet(this, _Todo_name, "f"), JSON.stringify(todo));
        return __classPrivateFieldGet(this, _Todo_listTodo, "f");
    }
    deleteListTodo(todoId, id) {
        if (!todoId || !id)
            return false;
        const todo = __classPrivateFieldGet(this, _Todo_instances, "m", _Todo_get).call(this);
        const todoIndex = __classPrivateFieldGet(this, _Todo_findIndexById, "f").call(this, todo, todoId);
        const listTodoIndex = __classPrivateFieldGet(this, _Todo_findIndexById, "f").call(this, todo[todoIndex].listTodo, id);
        todo[todoIndex].listTodo.splice(listTodoIndex, 1);
        localStorage.setItem(__classPrivateFieldGet(this, _Todo_name, "f"), JSON.stringify(todo));
        return true;
    }
}
_Todo_name = new WeakMap(), _Todo_listTodo = new WeakMap(), _Todo_todo = new WeakMap(), _Todo_findIndexById = new WeakMap(), _Todo_instances = new WeakSet(), _Todo_get = function _Todo_get() {
    return JSON.parse(localStorage.getItem(__classPrivateFieldGet(this, _Todo_name, "f")) || "[]");
};
export let instanceTodo;
const InstanceTodo = () => {
    if (!instanceTodo)
        instanceTodo = new Todo();
    return instanceTodo;
};
InstanceTodo();
