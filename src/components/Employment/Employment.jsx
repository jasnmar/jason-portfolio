import "./Employment.css"
import PropTypes from "prop-types"

function Employment({ data }) {
  console.log('data: ', data)
  const jobTitle = data.position
  const employer = data.employer
  const location = data.location
  const description = data.description
  const startDate = data.startDate
  const endDate = data.endDate
  const jobId = "job" + data.id
  const descId = jobId + "desc"
  return (
    <>
    <div id={jobId} className="employment--job-card" onClick={respond}>
      <div className="employment--header">
        <h2>{jobTitle} - {employer}, {location}</h2>
        <h2>{startDate} - {endDate}</h2>
      </div>
      <p id={descId} className="employment--description">{description}</p>
    </div>

    </>
  )
}

function respond(e) {
  console.log('click')
  console.log('e: ', e.target)
  let element = e.target
  console.log('element.tagName: ', element.tagName)
  if(element.tagName === "H2") {
    element = element.parentElement
  }
  if(element.tagName === "P") {
    element = element.parentElement
  }
  if(element.tagName === "DIV") {
    if(element.classList.contains("employment--header")) {
      element = element.parentElement
    }
  }
  const jobId = element.id
  console.log('jobId: ', jobId)
  const descId = jobId + "desc"
  console.log('descId: ', descId)
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