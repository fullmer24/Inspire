import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";



class QuotesService {
    async getQuote() {
        // console.log(`quote service working`);
        let res = await sandboxApi.get('/quotes')
        // console.log(res.data.content);
        ProxyState.quote = res.data.content
    }
}

export const quotesService = new QuotesService()