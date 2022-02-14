const chooseLunchWinner = (listOfChoices) => {
    //Code here!
    let choices = {}
    listOfChoices.forEach(element => {
        if (element in choices) {
            choices[element] += 1
        } else {
            choices[element] = 1
        }
    });

    var max = 0;
    let maxChoice = null;
    for (key of Object.keys(choices)) {
        if (choices[key] > max) {
            max = choices[key]
            maxChoice = key
        }
    }
    return maxChoice
}

const listOfChoices = [
    "Chicken Dinner",
    "Chicken Dinner",
    "Chicken Dinner",
    "Ice Cream Sandwich",
    "Ice Cream Sandwich"
]

console.log(chooseLunchWinner(listOfChoices))