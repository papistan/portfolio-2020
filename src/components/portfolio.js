import React, { useState } from "react"
import Projects from "./projects"
import styled from "styled-components"

const portfolioData = [
  {
    title: "Work",
    a: {
      title: "launchdarkly.com",
      image: "launchdarkly",
      url: "https://launchdarkly.com/",
      stack: "js, react, graphql",
    },
    b: {
      title: "opionato survey results",
      image: "opionato",
      url: "https://www.opionato.com/",
      stack: "js, react, css",
    },
  },
  {
    title: "Projects",
    a: {
      title: "frontendtrivia.com",
      image: "frontendtrivia",
      code: "https://github.com/papistan/FrontEndTrivia",
      stack: "js, react, redux",
    },
    b: {
      title: "scouter",
      image: "scoutr",
      code: "https://github.com/papistan/Scoutr/blob/master/README.md",
      stack: "react native => ruby on rails",
    },
  },
  {
    title: "Awards",
    a: {
      title: "angelHack 1st prize",
      image: "angelhack",
      url: "https://www.hackathon.io/projects/16197",
      stack: "ruby on rails",
    },
    b: {
      title: "launchDarkly hackathon winner",
      image: "moonshot",
      stack: "js, css + launchdarkly",
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
            tabIndex="0"
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
  flex-wrap: wrap;
  width: 100%;
  text-decoration: inherit;
  margin-top: 120px;
  border: 1px solid ${props => (props.lightMode ? "black" : "white")};

  @media (max-width: 400px) {
    padding-left: 0;
  }
`
export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 30px;
  width: 100%;
  padding-top: 10px;
`
export const Tab = styled.div`
  min-width: 100px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  height: 30px;
  color: inherit;
  font-family: Montserrat, sanserif;
  opacity: ${props => (props.subportfolio === props.title ? "38%" : "100%")};
  border-bottom: none;
  transition: border-bottom: 1s;

  &:hover {
    border-bottom: 2px solid ${props =>
      props.lightMode ? "black" : "#f9fff8"};
  }
`

export default Portfolio
