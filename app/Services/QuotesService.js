import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";



class QuotesService {
    async getQuote() {
        let res = await sandboxApi.get('/quotes')
        ProxyState.quote = res.data.content
        ProxyState.author = res.data.author
    }
}

export const quotesService = new QuotesService()