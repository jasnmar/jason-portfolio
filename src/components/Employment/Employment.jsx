import "./Employment.css"
import PropTypes from "prop-types"
import ReactMarkdown from 'react-markdown'
import arrowControl from "../../assets/icons/Arrow - Simple.svg"

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
      return <li className="employment--bullet" key={bullet}>
        <ReactMarkdown>
          {bullet}
        </ReactMarkdown></li>
    })
  }
  let descriptionArray = []
  if(Array.isArray(description)) {
    let i=0
    descriptionArray = description.map((sentence) => {
      i++
      return <ReactMarkdown key={i}>{sentence}</ReactMarkdown>
    })
  }

  const jobId = "job" + data.id
  const descId = jobId + "desc"
  const arrowId = jobId + "arrow"
  
  return (
    <>
      <div id={jobId} className="employment--job-card" >
        <div className="employment--header">
          <img id={arrowId} className="employment--arrow" onClick={clickRespond} src={arrowControl}></img>
          <div className="employment--job-info">
            <div className="employment--job-title">
              <h2>
                {jobTitle} - {employer}, {location}
              </h2>
            </div>
            <h2 className="employment--job-date">
              {startDate} - {endDate}
            </h2>
            
          </div>
        </div>
        <div id={descId} className="employment--description">
          {descriptionArray.length>0 ? 
            descriptionArray : 
            <ReactMarkdown>{description}</ReactMarkdown>}
          {bullets ? <ul>{bullets}</ul> : ""}
        </div>
      </div>
    </>
  )
}

function clickRespond(e) {
  let element = e.target
  if(element.classList?.contains("employment--arrow-open")) {
    element.classList.remove("employment--arrow-open")
  } else {
    element.classList.add("employment--arrow-open")
  }
  let id = element.id
  const jobId = id.slice(0, -5)
  const descId = jobId + "desc"
  const description = document.getElementById(descId)
  if(description.classList?.contains("employment--u-hidden")) {
    description.classList.remove("employment--u-hidden")
  } else {
    description.classList.add("employment--u-hidden")
  }
}

Employment.propTypes = {
  data: PropTypes.object
}

export default Employment