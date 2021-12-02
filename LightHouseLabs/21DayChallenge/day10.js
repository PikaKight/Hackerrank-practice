const averageWindSpeed = (weatherEntries) => {
    // Code here!
    var averageWindSpeed = 0;
    var counter = 0
    for (i of weatherEntries){
        averageWindSpeed += i.windSpeed;
        counter++;
    }

    return Math.round(averageWindSpeed/counter);
}

const exampleEntries = [
    { 
        temperature:0, 
        weather:"sunny", 
        windDirection: "NNE", 
        windSpeed:24
    },
    { 
        temperature:10, 
        weather:"cloudy", 
        windDirection: "NNE", 
        windSpeed:9 
    }
] 

console.log(averageWindSpeed(exampleEntries));
  