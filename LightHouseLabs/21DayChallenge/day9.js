const listAstronautJobs = (roster) => {
    // Code here!
    let jobs = [];
    for (i of roster){
        jobs.push(i.job);
    }
    return jobs
}

const exampleRoster = [
    {
        job:"Shuttle DJ"
    },
    {
        job:"Space Cook"
    }
] 

console.log(listAstronautJobs(exampleRoster))