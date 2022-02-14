const getAverageSpeed = (firstPosition, secondPosition) => {
    // code here!
    let avgSpeed = (secondPosition.altitude - firstPosition.altitude) / (secondPosition.time - firstPosition.time)
    return Math.round(avgSpeed * 10) / 10
}



const firstPosition = {
    time: 1637074462,
    altitude: 1100
}
const secondPosition = {
    time: 1637074558,
    altitude: 2200
}

console.log(getAverageSpeed(firstPosition, secondPosition))