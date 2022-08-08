import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { todosService } from "../Services/TodosService.js"
import { Pop } from "../Utils/Pop.js"


function _drawTodos() {
    let template = ProxyState.todos
    ProxyState.todos.forEach(t => template += t.TodosTemplate)
    console.log(ProxyState.todos);
    // @ts-ignore
    document.getElementById('todo-list').innerText = template
    console.log(`drawing todos`);
    // @ts-ignore
    document.getElementById('todo-counts').innerHTML = `
    <div>
        <div>
            <div>
            <b>Total Todos:</b> ${ProxyState.todos.length}
            </div>
            <div>
            <b>Finished Todos:</b> ${ProxyState.todos.filter(t => t.completed).length}
            </div>
        </div>
    </div>
    `


}

export class TodosController {
    constructor() {
        console.log(`todos controller`)
        ProxyState.on('todos', _drawTodos)
        this.getTodos()
    }


    async getTodos() {
        try {
            console.log(`getting todos`);
            await todosService.getTodos()
        } catch (error) {
            console.error('[Getting todos]', error)
            Pop.error(error)
        }
    }

    async addTodo() {
        try {
            // @ts-ignore
            window.event.preventDefault()
            console.log(`adding todos`);
            // FIXME get the description out of the form
            // look a formData object from gregslist or createPlayer fireside
            // @ts-ignore
            const form = window.event.target
            const formData = {
                id: { type: String, required: true, unique: true },
                completed: { type: Boolean, required: true, default: false },
                user: { type: String, required: true },
                description: { type: String, required: true },
            }

            let newTodo = {
                description: form.description.value,
            }

            await todosService.addTodo(newTodo)
            //                        ^ pass that formData to the service
            // then clear the form
            form.reset()
        } catch (error) {
            console.error('[Adding Todo]', error)
            Pop.error(error)
        }
    }

    async deleteTodo(id) {
        try {
            console.log(`deleting todos`);
            const yes = await Pop.confirm('Delete Todo')
            if (!yes) { return }

            await todosService.deleteTodo(id)
        } catch (error) {
            console.error('[Delete Todo]', error)
            Pop.error(error)
        }
    }

    async toggleTodo(id) {
        try {
            console.log(`finishing todos`);
            await todosService.toggleTodo(id)
        } catch (error) {
            console.error('[Toggle Todo]', error)
            Pop.error(error)
        }
    }



}