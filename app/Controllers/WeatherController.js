import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";


function _drawWeather() {
    let weather = Math.round(((parseInt(ProxyState.weather.toString()) - 273.15) * 1.8) + 32)
    // @ts-ignore
    document.getElementById('weather').innerHTML = `
        <div>${weather}</div>
    `
}

let clicks = 1

export class WeatherController {
    constructor() {
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

    drawWeather() {
        let weather = parseInt(ProxyState.weather.toString()) - 273.15

        if (clicks % 2) {
            weather = Math.round(weather)
        } else {
            weather = Math.round((weather * 1.8) + 32)
        }

        clicks++

        let template = `
            <div>${weather}</div>
        `
        // @ts-ignore
        document.getElementById('weather').innerHTML = template
    }
}


