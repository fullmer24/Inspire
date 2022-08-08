import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodosService {
    async getTodos() {
        console.log(`todos`);
        let res = await sandboxApi.get('/Kade/todos')
        ProxyState.todos = res.data.map(t => new Todo(t))
        console.log(ProxyState.todos);
    }

    // async toggleTodo(id) {
    //     // @ts-ignore
    //     let todo = ProxyState.todos.find(t => t.id == id)
    //     if (!todo) {
    //         throw new Error('Bad Todo id')
    //     }
    //     todo.checked = !todo.checked
    //     // @ts-ignore
    //     let todoIndex = ProxyState.todos.indexOf(todo)
    //     let res = await sandboxApi.put(`/Kade/todos/${id}`, todo)
    //     let updatedTodo = new todo(res.data)
    //     // @ts-ignore
    //     ProxyState.todos.splice(todoIndex, 1, updatedTodo)
    //     ProxyState.todos = ProxyState.todos
    // }

    // async deleteTodo(id) {
    //     await sandboxApi.delete(`/Kade/todos/${id}`)
    //     ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    // } 

    // async addTodo() {
    //     if (ProxyState.todos.find(t => t.todo == ProxyState.todos)) {
    //         throw new Error('You already have this todo')
    //     }

    //     let res = await sandboxApi.post('/Kade/todos', ProxyState.todos)

    //     let newTodo = new Todo(res.data)
    //     ProxyState.todos = [...ProxyState.todos, newTodo]
    // }


}


export const todosService = new TodosService()