import "./Project.css";
import PropTypes from "prop-types"
import { v4 as uuidv4 } from 'uuid'



function Project({ data }) {
  const projectGoals = data.goals;
  let goalList = "";
  if (projectGoals?.length > 0) {
    goalList = projectGoals.map((goal) => {
      return <li className="project--item-card" key={goal}>{goal}</li>
    })
  }

  const imageArray = data.images
  let imageList = []
  if(imageArray?.length > 0) {
    imageList = imageArray.map((imageObj) => {
      return <img key={uuidv4()} className="project--image" alt={data.name + " screenshots"} src={imageObj.image}></img>
    })
  } 
  
  return (
    <>
      <section className="project--card">
        <h2 className="project--title">{data.name}</h2>
        <div className="project--main">
          {imageList.length > 0 ? 
            <div className="project--image-container">
              {imageList}
            </div> : 
            <img className="project--main-image" alt={data.name + "screenshots"} src={data.image}></img>}
            
          
          <div className="project--details">
            <p className="project--description">{data.description}</p>
            <div className="project--links">
              <a className="project--link" target="_blank" href={data.source}>
                Source Code
              </a>
              <br></br>
              {data.deploy ? <a className="project--link" target="_blank" href={data.deploy}>
                Deployment
              </a> : <p>Not Deployed</p>}
            </div>
            {goalList ? <p className="project--list-header">Learning Goals</p> : ""}
            {goalList ? <ul className="project--list">{goalList}</ul>: ""}
          </div>
        </div>
      </section>
    </>
  );
}
Project.propTypes = {
  data: PropTypes.object
}
export default Project;
