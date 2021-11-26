const checkGaugeStatus = (gauge) => {
    // Code here!
    if (gauge.current >= gauge.min && gauge.current <= gauge.max){
        return true;
    }
    return false;
    // Remember to return a value!
}

const exampleGauge = {
    current:0.4,
    min:0.1,
    max:0.9
}

console.log(checkGaugeStatus(exampleGauge))
  