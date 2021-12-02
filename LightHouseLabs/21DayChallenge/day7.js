const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
    // Code here!
    
    let celcius = Math.round((temperature - 32)*(5/9));

    let windSpeed_ms = Math.round(windSpeed/(3600/1609));

    let store = {temperature: celcius, condition: condition, windSpeed: windSpeed_ms, windDirection: windDirection};

    // Remember to return an object!
    return store;
}

const temperature = 32
const condition = "Sunny with small clouds"
const windSpeed = 20
const windDirection = "NNE"

console.log(storeWeatherConditions(temperature,condition,windSpeed,windDirection));