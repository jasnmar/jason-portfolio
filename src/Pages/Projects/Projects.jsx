import "./Projects.css"
import Project from "../../components/project/Project"
import { projectInfo } from "../../data"


function Projects() {

  const projectList = projectInfo.map((project) => {
    return <Project key={project.id} data={project} />
  })

  return (
    <>
      <h1 className="page-title">Projects</h1>
      <hr></hr>
      {projectList}
    </>
  )
}

export default Projects