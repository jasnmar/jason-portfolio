import "./About.css"
import Employment from "../../components/Employment/Employment"
import Certificate from "../../components/Certificate/Certificate"
import { jobInfo } from "../../data"
import { certificateData } from "../../content/certificates"
import { v4 as uuidv4 } from 'uuid'



function About() {
  const jobList = jobInfo.map((job) => {
    return <Employment key={job.id} data={job} />
  })

  const certificateList = certificateData.map((cert) => {
    return <Certificate key={uuidv4()} cert={cert} />
  })

  return (
    <>
      <h1 className="page-title">About Me</h1>
      <section>
        <h2 className="page--section-title">Work History</h2>
        {jobList}
      </section>
      <section>
        <h2 className="page--section-title">Certificates</h2>
        {certificateList}
      </section>
      {/* <h2 className="page--section-title">Other Stuff</h2>
      Web Development
      Avid Motorcyclist
      Amature Machinist / Instructor
      Electronics */}

    </>
  )
}

export default About