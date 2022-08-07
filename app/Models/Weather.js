export class Weather {
    constructor(data) {
        // this.temp = data.main.temp
        this.temp = Math.round(data.main.temp)
    }

    get WeatherTemplate() {
        return `
        <div>${this.temp}</div>
        `
    }
}