import "./Project.css";
import PropTypes from "prop-types"

function Project({ data }) {
  console.log("data: ", data);
  console.log("data.name: ", data.name);
  const projectGoals = data.goals;
  let goalList = "";
  if (projectGoals?.length > 0) {
    goalList = projectGoals.map((goal) => {
      return <li key={goal}>{goal}</li>
    })
    console.log("projectGoals: ", projectGoals);
  }

  return (
    <>
      <div className="project-card">
        <h2>{data.name}</h2>
        <div className="project-main">
          <img className="project-main-image" src={data.image}></img>
          <div className="project-details">
            <p className="project-description">{data.description}</p>
            <a className="project-link" target="_blank" href={data.source}>
              Source Code
            </a>
            <br></br>
            <a className="project-link" target="_blank" href={data.deploy}>
              Deployment
            </a>
            {goalList ? <p className="project-list-header">Learning Goals:</p> : ""}
            {goalList ? <ul>{goalList}</ul>: ""}

          </div>
        </div>
      </div>
    </>
  );
}
Project.propTypes = {
  data: PropTypes.object
}
export default Project;
