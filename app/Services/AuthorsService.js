import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";



class AuthorsService {
    async getAuthor() {
        // console.log(`author service working`);
        let res = await sandboxApi.get('/quotes')
        // console.log(res.data.author);
        ProxyState.author = res.data.author
    }
}

export const authorsService = new AuthorsService()