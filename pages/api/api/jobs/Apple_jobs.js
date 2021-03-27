const Apple = [
    {
        id:1,
        JobPosition:"Operations Research",
        url:"https://jobs.apple.com/en-us/details/200232019/operations-research"
    },
    {
        id:2,
        JobPosition:"AI/ML - Annotation Analyst",
        url:"https://jobs.apple.com/en-us/details/200182942/ai-ml-annotation-analyst"
    },
    {
        id:3,
        JobPosition:"Manufacturing Quality Engineer",
        url:"https://jobs.apple.com/en-us/details/200198208/manufacturing-quality-engineer"
    },
    {
        id:4,
        JobPosition:"Games Business Manager",
        url:"https://jobs.apple.com/en-us/details/200190248/games-business-manager-india"
    },
    {
        id:5,
        JobPosition:"Corporate Recruiter, Contract",
        url:"https://jobs.apple.com/en-us/details/200233585/corporate-recruiter-contract"
    }
]
export default (req, res) => {
    res.status(200).json(Apple)
  }