const google_job = [
    {
        id : 1,
        JobPosition : "Software Engineer , FullStack",
        url : "https://careers.google.com/jobs/results/77787983882658502-software-engineer-full-stack/?utm_campaign=google_jobs_apply&utm_medium=organic&utm_source=google_jobs_apply"

    },
    {
        id :2,
        JobPosition: "Director , Go-To-Market, Media-Ops",
        url:"https://careers.google.com/jobs/results/119985996851749574-director-go-to-market-mediaops/?company=Google&company=YouTube&hl=en&jlo=en-US&location=Gurugram,%20Haryana,%20India&utm_campaign=google_jobs_apply&utm_medium=organic&utm_source=google_jobs_apply"

    },
    {
        id : 3,
        JobPosition : "Associate Lead , Staffing",
        url:"https://careers.google.com/jobs/results/119310432184738502-associate-lead-staffing/?company=Google&company=YouTube&hl=en&jlo=en-US&location=Gurgaon,%20Haryana,%20India&location=Gurugram,%20Haryana,%20India&utm_campaign=google_jobs_apply&utm_medium=organic&utm_source=google_jobs_apply"
    },
    {
        id:4,
        JobPosition:"Product Lead",
        url:"https://careers.google.com/jobs/results/133392485922546374-product-lead/?utm_campaign=google_jobs_apply&utm_medium=organic&utm_source=google_jobs_apply"
    },
    {
        id:5,
        JobPosition : "Product Analyst , Engineering",
        url : "https://careers.google.com/jobs/results/96929057091789510-product-analyst-engineering/?utm_campaign=google_jobs_apply&utm_medium=organic&utm_source=google_jobs_apply"
    },

]
export default (req, res) => {
    res.status(200).json(google_job)
}