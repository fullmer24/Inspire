import { ProxyState } from "../AppState.js";
import { authorsService } from "../Services/AuthorsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawAuthor() {
    // @ts-ignore
    document.getElementById('author').innerHTML = (`${ProxyState.author}`);
}



export class AuthorController {
    constructor() {
        // console.log(`author controller loaded`);
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