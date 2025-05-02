import PropTypes from "prop-types"
import "./Certificate.css"
// import { v4 as uuidv4 } from 'uuid'


function Certificate({ cert }) {
  console.log(cert)


  
  return (
    <>
      <div className="certificate--card">
        <a href={cert.certificateLink} target="_blank" rel="noreferrer">
        <div className="certificate--header">
          <h2>{cert.title}</h2>
          <h2>{cert.source && cert.source}</h2>
        </div></a>
        <p className="certificate--description">{cert.description}</p>
        <div className="certificate--footer">
          {cert.level && <p className="certificate--level">{cert.level}</p>}
          {cert.duration && <p className="certificate--duration">{cert.duration}</p>}
        </div>
        
      </div>
    </>
  )
}

Certificate.propTypes = {
  cert: PropTypes.shape({
    title: PropTypes.string.isRequired,
    source: PropTypes.string,
    description: PropTypes.string.isRequired,
    certificateLink: PropTypes.string,
    level: PropTypes.string,
    duration: PropTypes.string
  })
}

export default Certificate
