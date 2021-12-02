
const countActiveAstronauts = (roster) => {
    // Code here!
    let counter = roster.length;
    return counter;
}

const exampleRoster = [
    {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut",
        job:"Shuttle DJ"
    }
]  

console.log(countActiveAstronauts(exampleRoster))