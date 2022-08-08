import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";




class WeathersService {
    async getWeather() {
        let res = await sandboxApi.get('/weather')
        ProxyState.weather = res.data.main.temp
    }
}

export const weathersService = new WeathersService()