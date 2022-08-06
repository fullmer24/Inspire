import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";



class QuotesService {
    async getQuote() {
        // console.log(`quote service working`);
        let res = await sandboxApi.get('/quotes')
        // console.log(res.data.content);
        ProxyState.quote = res.data.content
    }

    //     async getAuthor() {
    //         let res = await sandboxApi.get('/quotes')
    //         console.log(res.data.author);
    //         ProxyState.author = res.data.author
    // }
}

export const quotesService = new QuotesService()