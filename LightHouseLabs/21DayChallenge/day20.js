const confirmReentryPlans = (speed, missionData, checks) => {
    // Code here!

    let checkSpeed = speed >= checks.minSpeed && speed <= checks.maxSpeed
    let check = true;
    for (i in missionData) {
        check = missionData[i].length == checks.dataEntries[i] && check
    }

    let status = checkSpeed && check
    return status
}

const speed = 35
const missionData = {
    astro: ["...", "...", "..."],
    bio: ["..."],
}

const checks = {
    maxSpeed: 50,
    minSpeed: 20,
    dataEntries: {
        astro: 2,
        bio: 1,
    }
}

console.log(confirmReentryPlans(speed, missionData, checks))