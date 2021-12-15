
const switchAllTogglesOn = (toggleList) => {
    // Code here!
    for (i of toggleList){
        i.isOn = true;
    }
    return toggleList;
}

const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]

console.log(switchAllTogglesOn(toggleList))