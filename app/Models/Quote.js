export class Quote {
    constructor(data) {
        this.quote = data.quotes.content
        this.author = data.quotes.author
    }

    get QuoteTemplate() {
        return `
        <div class="text-danger">${this.quote}</div>      
        <div class="text-danger">${this.author}</div>  
        `
    }
}



// export class Author {
//     constructor(data) {
//         this.author = data.quotes.author
//     }

//     get AuthorTemplate() {
//         return `
// {/* <div class="text-danger">${this.author}</div> */}
//         `
//     }
// }