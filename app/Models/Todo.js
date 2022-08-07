import { generateId } from "../Utils/generateId.js";

export class Todo {
    constructor(data) {
        this.id = data.id || generateId

    }
}