import React, { useState } from "react"
import styled from "styled-components"

const portfolioData = [
  {
    title: "Work",
    a: {
      title: "stuff",
    },
    b: {
      title: "stuff",
    },
  },
  {
    title: "Projects",
    a: {
      title: "stuff",
    },
    b: {
      title: "stuff",
    },
  },
  {
    title: "Awards",
    a: {
      title: "stuff",
    },
    b: {
      title: "stuff",
    },
  },
]

const Portfolio = props => {
  const [subportfolio, setSubportfolio] = useState(portfolioData[0].title)
  return (
    <PortfolioWrapper lightMode={props.lightMode}>
      <TabWrapper>
        {portfolioData.map(tab => (
          <Tab
            title={tab.title}
            subportfolio={subportfolio}
            onClick={() => {
              setSubportfolio(tab.title)
            }}
          >
            {tab.title}
          </Tab>
        ))}
      </TabWrapper>
    </PortfolioWrapper>
  )
}

const PortfolioWrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
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
