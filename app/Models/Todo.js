export class Todo {
    constructor(data) {
        this.id = data.id
        // FIXME look at the data from the api and match the property names there
        this.description = data.description
        this.completed = data.completed || false
        this.user = data.user
    }

    get TodosTemplate() {
        return `
    <div class="card p-2">
        <p class="p-2">
            <span><button class="mdi mdi-delete" required onclick="app.todosController.deleteTodo('${this.id}')"></button>${this.description}</span>
            <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.todosController.toggleTodo('${this.id}')" class="p-2">
        </p>
    </div>
        `
    }


}