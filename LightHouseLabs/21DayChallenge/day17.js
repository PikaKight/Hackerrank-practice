const switchSpecificToggle = (toggleList, specificToggle) => {
    // Code here!
    toggleList.forEach(element => {
        if (element.name === specificToggle) {
            element.isOn = !element.isOn
        }
    });

    return toggleList
}

const toggleList = [{
        name: "toggleA",
        isOn: false
    },
    {
        name: "toggleB",
        isOn: true
    }
]
const specificToggle = "toggleA"

console.log(switchSpecificToggle(toggleList, specificToggle))