import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";




class ImagesService {
    async getImages() {
        // console.log(`image service working`);
        let res = await sandboxApi.get('/images')
        // console.log(res.data.largeImgUrl);   
        ProxyState.image = res.data.largeImgUrl
    }
}

export const imagesService = new ImagesService()