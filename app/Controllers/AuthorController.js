import { ProxyState } from "../AppState.js";
import { authorsService } from "../Services/AuthorsService.js";
import { Pop } from "../Utils/Pop.js";



function _drawAuthor() {
    let author = ProxyState.author
    // @ts-ignore
    document.getElementById('author').innerHTML = /*html*/`
        <p>${author}</p>
    `

}


export class AuthorController {
    constructor() {
        ProxyState.on('author', _drawAuthor)
        this.getAuthor()
    }

    async getAuthor() {
        try {
            await authorsService.getAuthor()
        } catch (error) {
            console.error(`[getting author]`);
            Pop.error(error)
        }
    }
}