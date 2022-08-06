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



export class Author {
    constructor(data) {
        this.author = data.quotes.author
    }

    get AuthorTemplate() {
        return `
        <div class="text-danger">${this.author}</div>
        `
    }
}