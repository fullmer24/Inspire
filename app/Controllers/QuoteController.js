import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";


function _drawQuote() {
    // @ts-ignore
    document.getElementById('quote').innerHTML = (`${ProxyState.quote}`);
}


export class QuoteController {
    constructor() {
        console.log(`quote controller loaded`);
        ProxyState.on('quote', _drawQuote)
        this.getQuote()
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error('[getting quote]', error);
            Pop.error(error)
        }
    }

    async getAuthor() {
        try {
            await quotesService.getAuthor()
        } catch (error) {
            console.error('[getting author]', error);
            Pop.error(error)
        }
    }
}