import React from "react"
import styled from "styled-components"

const Projects = props => (
  <ProjectsWrapper>
    <ProjectContainer project={props.currentProjects.a} />
    <ProjectContainer project={props.currentProjects.b} />
  </ProjectsWrapper>
)

const ProjectsWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`

const Project = ({ project }) => (
  <div>
    <h6>{project.title}</h6>
    <p>{project.stack}</p>
    <img src={project.image}></img>
    <a href={project.url}>Live</a>
  </div>
)

const ProjectContainer = styled(Project)`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`

export default Projects
