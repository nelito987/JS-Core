class Record{
    constructor(temperature, humidity, pressure, windSpeed){
        this.id = Record.getId();
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
    }

    static getId(){
        if (Record.nextId === undefined)
            Record.nextId = 0;
        return Record.nextId++;
    }

    toString(){
        let status  = this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25;
        let isStormy = status == true ? 'Stormy' : 'Not stormy';
        let result = `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${isStormy}`
        return result;
    }
}


let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
console.log('-----------------------');
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());

