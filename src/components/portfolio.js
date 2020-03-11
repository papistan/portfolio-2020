import React, { useState } from "react"
import Projects from "./projects"
import styled from "styled-components"

const portfolioData = [
  {
    title: "Work",
    a: {
      title: "Launchdarkly.com",
      image: "https://picsum.photos/200",
      code: "google.com",
      url: "launchdarkly.com",
      stack: "js, react, graphql",
    },
    b: {
      title: "Opionato survey results",
      image: "https://picsum.photos/200",
      code: "google.com",
      url: "opionato.com",
      stack: "js, react, graphql",
    },
  },
  {
    title: "Projects",
    a: {
      title: "Frontendtrivia.com",
      image: "https://picsum.photos/200",
      code: "google.com",
      url: "google.com",
      stack: "js, react, graphql",
    },
    b: {
      title: "Scouter",
      image: "https://picsum.photos/200",
      code: "google.com",
      url: "google.com",
      stack: "js, react, graphql",
    },
  },
  {
    title: "Awards",
    a: {
      title: "AngelHack 1st Prize",
      image: "https://picsum.photos/200",
      code: "google.com",
      url: "google.com",
      stack: "js, react, graphql",
    },
    b: {
      title: "LaunchDarkly Hackathon Winner",
      image: "https://picsum.photos/200",
      code: "google.com",
      url: "google.com",
      stack: "js, react, graphql",
    },
  },
]

const Portfolio = props => {
  const [subportfolio, setSubportfolio] = useState(portfolioData[0])

  return (
    <PortfolioWrapper lightMode={props.lightMode}>
      <TabWrapper>
        {portfolioData.map(tab => (
          <Tab
            title={tab.title}
            subportfolio={subportfolio.title}
            onClick={() => {
              setSubportfolio(tab)
            }}
          >
            {tab.title}
          </Tab>
        ))}
      </TabWrapper>
      <Projects currentProjects={subportfolio} />
    </PortfolioWrapper>
  )
}

const PortfolioWrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 100%;
  text-decoration: inherit;
  border: 1px solid ${props => (props.lightMode ? "black" : "white")};
`
const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  width: 100%;
`
const Tab = styled.div`
  min-width: 100px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  height: 30px;
  color: ${props => (props.subportfolio === props.title ? "grey" : "inherit")};
  border-bottom: none;
  transition: border-bottom: 1s;

  &:hover {
    border-bottom: 2px solid ${props =>
      props.lightMode ? "black" : "#f9fff8"};
  }
`

export default Portfolio
