import Employment from "../../components/Employment/Employment"
import "./About.css"
import { jobInfo } from "../../data"

function About() {
  const jobList = jobInfo.map((job) => {
    return <Employment key={job.id} data={job} />
  })


  return (
    <>
      <h1 className="page-title">About Me</h1>
      <h2 className="page--section-title">Work History</h2>
      {jobList}
      {/* <h2 className="page--section-title">Other Stuff</h2>
      Web Development
      Avid Motorcyclist
      Amature Machinist / Instructor
      Electronics */}

    </>
  )
}

export default About