export class Quote {
    constructor(data) {
        this.quote = data.quotes.content
    }

    get QuoteTemplate() {
        return `
        <div class="text-danger">${this.quote}</div>      
    `
    }
}



