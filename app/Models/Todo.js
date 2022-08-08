import { generateId } from "../Utils/generateId.js";

export class Todo {
    constructor(data) {
        this.id = data.id || generateId
        this.todo = data.todo
        this.checked = data.checked || false
    }

    get TodosTemplate() {
        return `
    <div class="card p-2">
        <div id="totalTodos"></div>
        <div id="totalChecked"></div>
        <h1>ToDos:</h1>
        <p class="p-2">
            <span><button class="mdi mdi-delete" onclick="app.todosController.deleteTodo('${this.id}')"></button>${this.todo}</span>
            <input type="checkbox" ${this.checked ? 'checked' : ''} onchange="app.todosController.toggleTodo(${this.id})" class="p-2">
        </p>
        <form onsubmit="app.todosController.createTodo()">
            <div class="input-group">
                <label for="name" class="visually-hidden"></label>
                <input type="text" id="todoForm" name="name" class="form-control p-2" required>
                <button class="p-2" type="submit">Add ToDo</button>
            </div>
        </form>
    </div>
        `
    }
}