const Amazon = [
    {
        id:1,
        JobPosition :"Sr SDE",
        url:"https://www.amazon.jobs/en/jobs/1496809/sr-sde"

    },
    {
        id:2,
        JobPosition:"Front-End Emgineer",
        url:"https://www.amazon.jobs/en/jobs/1495987/front-end-engineer"
    },
    {
        id:3,
        JobPosition:"ICT design Engineer",
        url:"https://www.amazon.jobs/en/jobs/1495777/ict-design-engineer"
    },
    {
        id:4,
        JobPosition:"IT Deployment Program Manager",
        url:"https://www.amazon.jobs/en/jobs/1494963/it-deployment-program-manager"
    },
    {
        id:5,
        JobPosition:"Cloud Support Engineer I - Networks",
        url:"https://www.amazon.jobs/en/jobs/1493845/cloud-support-engineer-i-networks"
    }
]
export default (req, res) => {
    res.status(200).json(Amazon)
  }