type ListTodoT = {
    id: number | null
    name: string
    time: string
}

export type TodoT = {
    id: number
    title: string
    listTodo: [ListTodoT]
}

export default class Todo {
    #name: string = "Todo"
    #listTodo: ListTodoT = {
        id: null,
        name: "",
        time: ""
    }
    #todo: TodoT = {
        id: 0,
        title: "",
        listTodo: [this.#listTodo]
    }

    constructor() {
        if (!localStorage.getItem(this.#name)) {
            console.log("Create Todo Collection")
            localStorage.setItem(this.#name, "[]")
        }
    }

    #get(): [TodoT] {
        return JSON.parse(localStorage.getItem(this.#name) || "[]")
    }

    #findIndexById = (
        data: [TodoT | ListTodoT],
        id: string,
        i: number = 0
    ): number => {
        return data[i].id === parseInt(id)
            ? i
            : this.#findIndexById(data, id, i + 1)
    }

    getTodo(): [TodoT] {
        return JSON.parse(localStorage.getItem(this.#name) || "[]")
    }

    deleteAllTodo(): void {
        localStorage.setItem(this.#name, "[]")
    }

    createTodo(title: string): TodoT {
        this.#todo.id = new Date().getTime()
        this.#todo.title = title
        this.#listTodo = {
            id: null,
            name: "",
            time: ""
        }

        const todo = this.#get()
        todo.push(this.#todo)
        localStorage.setItem(this.#name, JSON.stringify(todo))
        return this.#todo
    }

    deleteTodo(id: string | undefined): boolean {
        if (!id) return false

        const todo = this.#get()
        const index = this.#findIndexById(todo, id)
        todo.splice(index, 1)
        localStorage.setItem(this.#name, JSON.stringify(todo))

        return true
    }

    addListTodo(
        id: string | undefined,
        name: string,
        time: Date
    ): ListTodoT | undefined {
        if (!id) return

        const hours = time.getHours()
        const minutes = time.getMinutes()

        this.#listTodo.id = time.getTime()
        this.#listTodo.name = name
        this.#listTodo.time = `${hours} : ${minutes}`

        // find todo by id and push
        const todo = this.#get()
        const todoTarget = this.#findIndexById(todo, id)
        todo[todoTarget].listTodo.push(this.#listTodo)

        localStorage.setItem(this.#name, JSON.stringify(todo))

        return this.#listTodo
    }

    deleteListTodo(
        todoId: string | undefined,
        id: string | undefined
    ): boolean {
        if (!todoId || !id) return false
        const todo = this.#get()

        const todoIndex = this.#findIndexById(todo, todoId)
        const listTodoIndex = this.#findIndexById(todo[todoIndex].listTodo, id)
        todo[todoIndex].listTodo.splice(listTodoIndex, 1)

        localStorage.setItem(this.#name, JSON.stringify(todo))

        return true
    }
}

export let instanceTodo: InstanceType<typeof Todo>
const InstanceTodo = (): InstanceType<typeof Todo> => {
    if (!instanceTodo) instanceTodo = new Todo()
    return instanceTodo
}
InstanceTodo()
