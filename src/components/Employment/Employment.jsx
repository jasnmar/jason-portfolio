import "./Employment.css"
import PropTypes from "prop-types"
import ReactMarkdown from 'react-markdown'

function Employment({ data }) {
  const jobTitle = data.position
  const employer = data.employer
  const location = data.location
  const description = data.description
  const startDate = data.startDate
  const endDate = data.endDate
  const bulletList = data.bullets
  let bullets = []
  if(bulletList?.length > 0) {
    bullets = bulletList.map((bullet) => {
      return <li key={bullet}>
        <ReactMarkdown>
          {bullet}
        </ReactMarkdown></li>
    })
  }
  const jobId = "job" + data.id
  const descId = jobId + "desc"
  return (
    <>
    <div id={jobId} className="employment--job-card" onClick={clickRespond}>
      <div className="employment--header">
        <h2>{jobTitle} - {employer}, {location}</h2>
        <h2>{startDate} - {endDate}</h2>
      </div>
      <div id={descId} className="employment--description">
        <ReactMarkdown>
          {description}
        </ReactMarkdown>
      {bullets ? <ul>{bullets}</ul>: ""}
      </div>
    </div>

    </>
  )
}

function clickRespond(e) {
  let element = e.target
  const cl = element.classList.contains("employment--header")
  while(element.tagName != "DIV" && !cl) {
    element = element.parentElement
  }
  element = element.parentElement
  const jobId = element.id
  const descId = jobId + "desc"
  const description = document.getElementById(descId)
  if(description.classList.contains("employment--u-hidden")) {
    description.classList.remove("employment--u-hidden")
  } else {
    description.classList.add("employment--u-hidden")
  }

}

Employment.propTypes = {
  data: PropTypes.object
}

export default Employment