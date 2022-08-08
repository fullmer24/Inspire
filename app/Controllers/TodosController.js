import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { Pop } from "../Utils/Pop.js"





function _drawTodos() {
    let template = ''
    ProxyState.todos.forEach(t => template += t.TodosTemplate)
    console.log(ProxyState.todos);
    document.getElementById('totalTodos').innerHTML = template


}

export class TodosController {
    constructor() {
        ProxyState.on('todos', _drawTodos)
        this.getTodos()
    }


    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            console.error('[Getting todos]', error)
            Pop.error(error)
        }
    }








}