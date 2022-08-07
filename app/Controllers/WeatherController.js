import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";


function _drawWeather() {
    // @ts-ignore
    document.getElementById('weather').innerHTML = Math.round(((`${ProxyState.weather}` - 273.15) * 1.8) + 32);
}




export class WeatherController {
    constructor() {
        // console.log(`weather controller loaded`);
        ProxyState.on('weather', _drawWeather)
        this.getWeather()
    }

    async getWeather() {
        try {
            await weathersService.getWeather()
        } catch (error) {
            console.error('[getting weather]', error);
            Pop.error(error)
        }
    }

    fToC() {
        // @ts-ignore
        document.getElementById('weather').innerHTML = Math.round((`${ProxyState.weather}` - 273.15));
    }
}


