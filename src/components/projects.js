import React from "react"
import styled from "styled-components"

const ProjectsWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`

const ProjectWrapper = styled.div`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-flow: column wrap;
  width: 300px;

  h3 {
    height: 60px;
    margin-bottom: 0;
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Project = ({ project }) => (
  <ProjectWrapper>
    <h3>{project.title}</h3>
    <p>{project.stack}</p>
    <img src={project.image}></img>
    <a href={project.url}>Live</a>
  </ProjectWrapper>
)

const Projects = props => (
  <ProjectsWrapper>
    <Project project={props.currentProjects.a} />
    <Project project={props.currentProjects.b} />
  </ProjectsWrapper>
)

export default Projects
