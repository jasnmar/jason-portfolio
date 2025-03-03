import "./Projects.css"
import Project from "../../components/project/Project"
import { projectInfo } from "../../data"

function Projects() {

  const projectList = projectInfo.map((project) => {
    return <Project key={project.id} data={project} />
  })
  console.log('projectList: ', projectList)

  return (
    <>
      <h1>My Work</h1>
      <h2>Offroad Driving Instructor</h2>
      <hr></hr>
      <p className="projects-text"></p>
      {projectList}
    </>
  )
}

export default Projects