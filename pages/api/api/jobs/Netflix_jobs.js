const Netflix  = 
[
    {
        id:1,
        JobPosition:"Associate, Production Finance",
        url:"https://jobs.netflix.com/jobs/60890920"
    },
    {
        id:2,
        JobPosition:"Manager, Risk & Intelligence",
        url:"https://jobs.netflix.com/jobs/64406610"
    },
    {
        id:3,
        JobPosition:"Localization Project Manager",
        url:"https://jobs.netflix.com/jobs/46491033"
    },
    {
        id:4,
        JobPosition:"Manager, Public Policy",
        url:"https://jobs.netflix.com/jobs/65633911"
    },
    {
        id:5,
        JobPosition:"IT Operations and Support Specialist",
        url:"https://jobs.netflix.com/jobs/47596809"
    }
]
export default (req, res) => {
    res.status(200).json(Netflix)
  }