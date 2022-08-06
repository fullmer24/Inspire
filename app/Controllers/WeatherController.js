import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";


function _drawWeather() {
    // @ts-ignore
    document.getElementById('weather').innerHTML = `${ProxyState.weather}`
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
}

