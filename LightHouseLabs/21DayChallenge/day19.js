const organizeData = (receivedData) => {
    // Code here!
    var type = {}

    receivedData.forEach(element => {
        if (element.type in type) {
            type[element.type].push(element.data)
        } else {
            type[element.type] = [element.data]
        }
    });

    return type
}

const listOfReceivedData = [
    { type: "astro", data: "Saturn Data" },
    { type: "bio", data: "Space Potatoes" },
    { type: "physics", data: "Lagrange Points" },
    { type: "bio", data: "OMG Tardigrades" },
    { type: "physics", data: "Material reflectivity" },
    { type: "astro", data: "Mercury is not the hottest" },
]

console.log(organizeData(listOfReceivedData))