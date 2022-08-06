export class Weather {
    constructor(data) {
        this.temp = data.main.temp
    }

    get WeatherTemplate() {
        return `
        <div class="text-light">${this.temp}</div>
        `
    }
}