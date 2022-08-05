export class Image {
    constructor(data) {
        this.img = data.images.largeImgUrl
    }

    get Template() {
        return `
        <img src="${this.img}" alt="">
        `
    }
}