import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"
import { Pop } from "../Utils/Pop.js";



function _drawImg() {
    // @ts-ignore
    document.getElementById('bg-img').style.backgroundImage = `url(${ProxyState.image})`
}

export class ImageController {
    constructor() {
        // console.log(`image controller loaded`);
        ProxyState.on('image', _drawImg)
        this.getImages()
    }

    async getImages() {
        try {
            await imagesService.getImages()
        } catch (error) {
            console.error('[getting image]', error);
            Pop.error(error)
        }
    }







}