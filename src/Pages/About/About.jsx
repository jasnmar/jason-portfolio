import Employment from "../../components/Employment/Employment"
import "./About.css"
import { jobInfo } from "../../data"

function About() {
  const jobList = jobInfo.map((job) => {
    return <Employment key={job.id} data={job} />
  })


  return (
    <>
      <h1>About</h1>
      {jobList}
    </>
  )
}

export default About