const timeRemaining = (launchDate, missionName, fakeToday) => {
    const today = fakeToday || new Date() // Do not alter this line!

    // Code here!
    let todayTime = new Date(today).getTime()
    launchDate = new Date(launchDate)
    let launchDateTime = launchDate.getTime()

    let daysRemaining = (launchDateTime - todayTime) / 86400000

    time = {
        missionName: missionName,
        daysRemaining: daysRemaining
    }
    return time
}

const launchDate = "2021-12-12"
const fakeToday = "2021-12-01"
const missionName = "Moon visit"

console.log(timeRemaining(launchDate, missionName, fakeToday))