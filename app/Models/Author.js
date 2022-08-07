export class Author {
    constructor(data) {
        this.author = data.quotes.author
    }

    get AuthorTemplate() {
        return `
        <div">${this.author}</div>
        `
    }
}