const Facebook = 
[
    {
        id:1,
        JobPosition:"Quality Assurance Lead",
        url:"https://www.facebook.com/careers/v2/jobs/1040501543105283/"
    },
    {
        id:2,
        JobPosition:"Leadership Sourcer",
        url:"https://www.facebook.com/careers/v2/jobs/914319862655480/"
    },
    {
        id:3,
        JobPosition: "Director Strategy and Operations",
        url:"https://www.facebook.com/careers/v2/jobs/256465682496859/"
    },
    {
        id:4,
        JobPosition:"Program Manager, Process and Tools",
        url:"https://www.facebook.com/careers/v2/jobs/251907799879050/"
    },
    {
        id:5,
        JobPosition:"Enterprise Operations Manager",
        url:"https://www.facebook.com/careers/v2/jobs/337541854344223/"
    }

]
export default (req, res) => {
    res.status(200).json(Facebook)
  }