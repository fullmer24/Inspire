import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";



class AuthorsService {
    async getAuthor() {
        let res = await sandboxApi.get('/quotes')
        ProxyState.author = res.data.author
    }
}

export const authorsService = new AuthorsService()