import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";




class WeathersService {
    async getWeather() {
        // console.log(`weather service working`);
        let res = await sandboxApi.get('/weather')
        // console.log(res.data.main.temp);
        ProxyState.weather = res.data.main.temp
    }
}

export const weathersService = new WeathersService()