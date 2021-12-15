const checkAllGauges = (gaugeList) => {
    // Code here!
    for (i of gaugeList){
        if (i.current < i.min || i.current > i.max){
                return false
            }
    }
    
    return true
}

  const gaugeList = [
  {
    current:0.4,
    min:0.1,
    max:0.9
  },
  {
    current:1.2,
    min:0.1,
    max:0.6
  }
]  

console.log(checkAllGauges(gaugeList))