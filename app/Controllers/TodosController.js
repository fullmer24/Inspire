import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { Pop } from "../Utils/Pop.js"





function _drawTodos() {
    let template = ''
    // @ts-ignore
    ProxyState.todos.forEach(t => template += t.TodosTemplate)
    console.log(ProxyState.todos);
    // @ts-ignore
    document.getElementById('totalTodos').innerText = template
    console.log(`drawing todos`);
    // @ts-ignore
    document.getElementById('toggledTodos').innerHTML = `
    <div>
        <div>
            <div>
            <b>Total Todos:</b> ${ProxyState.todos.length}
            </div>
            <div>
            <b>Finished Todos:</b> ${ProxyState.todos.filter(t => t.checked).length}
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

    // async addTodo() {
    //     try {
    //         console.log(`adding todos`);
    //         await todosService.addTodo()
    //     } catch (error) {
    //         console.error('[Adding Todo]', error)
    //         Pop.error(error)
    //     }
    // }

    // async deleteTodo(id) {
    //     try {
    //         console.log(`deleting todos`);
    //         const yes = await Pop.confirm('Delete Todo')
    //         if (!yes) { return }

    //         await todosService.deleteTodo(id)
    //     } catch (error) {
    //         console.error('[Delete Todo]', error)
    //         Pop.error(error)
    //     }
    // }

    // async toggleTodo(id) {
    //     try {
    //         console.log(`finishing todos`);
    //         await todosService.toggleTodo(id)
    //     } catch (error) {
    //         console.error('[Toggle Todo]', error)
    //         Pop.error(error)
    //     }
    // }



}