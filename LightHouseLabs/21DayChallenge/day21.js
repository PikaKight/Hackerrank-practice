const parseMissionSummary = (exchanges, missionData) => {
    // Code here!
    let msg = {
        transcription: [],
        missionData: {}
    }

    let transcript;
    exchanges.forEach(element => {
        transcript = `${element.origin}: ${element.message}`
        msg.transcription.push(transcript)
    });

    for (key in missionData) {
        msg.missionData[key] = missionData[key]
    }

    return msg
}

const exchanges = [
    { origin: "MC", message: "So how is it out there?" },
    { origin: "Shuttle", message: "Oh it's pretty nice!" },
    { origin: "MC", message: "How did you like the challenges?" },
]

const missionData = {
    astro: ["...", "..."],
    bio: ["..."],
    physics: ["..."]
}

console.log(parseMissionSummary(exchanges, missionData))