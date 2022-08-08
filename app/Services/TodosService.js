import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodosService {
    async toggleTodo(id) {

    }

    async deleteTodo(id) {

    }



    async getTodos() {
        let res = await sandboxApi.get('/Kade/todos')
        ProxyState.todos = res.data.map(t => new Todo(t))
        // console.log(ProxyState.todos);
    }

    async addTodo() {

    }
}


export const todosService = new TodosService()