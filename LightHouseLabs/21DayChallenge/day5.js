const addJobToAstronaut = (astronaut, job) => {
    // Code here!
    astronaut.job = job;
    // Remember to return a value!
    return astronaut;
}

const exampleAstronaut = {
    firstName:"Chris",
    lastName: "Hadfield",
    nickname:"Space Oddity",
    prefix:"Astronaut"
}

console.log(addJobToAstronaut(exampleAstronaut, "Shuttle DJ"))