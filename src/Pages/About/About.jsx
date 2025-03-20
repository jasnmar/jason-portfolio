import Employment from "../../components/Employment/Employment"
import "./About.css"
import { jobInfo } from "../../data"

function About() {
  const jobList = jobInfo.map((job) => {
    return <Employment key={job.id} data={job} />
  })


  return (
    <>
      <h1>About Me</h1>
      <h2>Work History</h2>
      {jobList}
      <h2>Other Stuff</h2>
      Web Development
      Avid Motorcyclist
      Amature Machinist / Instructor
      Electronics

    </>
  )
}

export default About