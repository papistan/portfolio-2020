import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const ProjectsWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const ProjectWrapper = styled.div`
  padding: 10px;
  padding-top: 40px;
  border-radius: 5px;
  display: flex;
  flex-flow: column wrap;
  width: 340px;
  text-align: center;

  h3 {
    height: 60px;
    margin-bottom: 0;
    line-height: 1.5rem;
    font-family: Montserrat, sanserif;
  }

  p {
    font-family: Courier New, Courier, serif;
    padding-bottom: 20px;
  }

  a {
    text-decoration: none;
    padding-top: 10px;
    color: inherit;
    font-family: Courier New, Courier, serif;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Project = ({ project }) => (
  <StaticQuery
    query={ProjectQuery}
    render={data => {
      return (
        <ProjectWrapper>
          <h3>{project.title}</h3>
          <p>{project.stack}</p>
          <Image
            fixed={data[project.image].childImageSharp.fixed}
            alt={project.title}
            style={{
              marginBottom: 0,
              minWidth: 50,
            }}
          />
          {project.url && <a href={project.url}>live</a>}
          {project.code && <a href={project.code}>code</a>}
        </ProjectWrapper>
      )
    }}
  />
)

const Projects = props => (
  <ProjectsWrapper>
    <Project project={props.currentProjects.a} />
    <Project project={props.currentProjects.b} />
  </ProjectsWrapper>
)

const ProjectQuery = graphql`
  query ProjectQuery {
    launchdarkly: file(absolutePath: { regex: "/launchdarkly.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    opionato: file(absolutePath: { regex: "/opionato.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    angelhack: file(absolutePath: { regex: "/angelhack.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    frontendtrivia: file(absolutePath: { regex: "/frontendtrivia.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    scoutr: file(absolutePath: { regex: "/scoutr.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    moonshot: file(absolutePath: { regex: "/moonshot.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Projects
