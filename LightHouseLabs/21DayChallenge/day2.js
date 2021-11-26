
const generateAstronautTag = (astronaut) => {
    // Code here!
    let astro = `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`
    // Remember to return a value!
    return astro;
  }

const exampleAstronaut = {
    firstName: "Yuri",
    lastName: "Gagarin",
    nickname: "First!",
    prefix: "Cosmonaut"
  }  

console.log(generateAstronautTag(exampleAstronaut))