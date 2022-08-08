export class Weather {
    constructor(data) {
        this.temp = Math.round(data.main.temp)
    }

}