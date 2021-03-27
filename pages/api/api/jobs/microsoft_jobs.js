const Microsoft = 
[
    {
        id:1,
        JobPosition:"Digital Sales Representative",
        url:"https://careers.microsoft.com/us/en/job/1013709/Digital-Sales-Representative?jobsource=linkedin&utm_source=linkedin&utm_medium=linkedin&utm_campaign=linkedin-feed"
    },
    {
        id:2,
        JobPosition:"Consultant",
        url:"https://careers.microsoft.com/us/en/job/1005882/Consultant?jobsource=linkedin&utm_source=linkedin&utm_medium=linkedin&utm_campaign=linkedin-feed"
    },
    {
        id:3,
        JobPosition:"Speacialist",
        url:"https://careers.microsoft.com/us/en/job/1010246/Specialist?jobsource=linkedin&utm_source=linkedin&utm_medium=linkedin&utm_campaign=linkedin-feed"
    },
    {
        id:4,
        JobPosition:"Business Manager",
        url:"https://careers.microsoft.com/us/en/job/1010492/Business-Manager?jobsource=linkedin&utm_source=linkedin&utm_medium=linkedin&utm_campaign=linkedin-feed"
    },
    {
        id:5,
        JobPosition:"Project Manager",
        url:"https://careers.microsoft.com/us/en/job/955140/Project-Manager?jobsource=linkedin&utm_source=linkedin&utm_medium=linkedin&utm_campaign=linkedin-feed"
    }
]
export default (req, res) => {
    res.status(200).json(Microsoft)
  }