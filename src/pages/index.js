import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Switch from "../components/switch"
import Portfolio from "../components/portfolio"

const IndexPage = props => {
  const [lightMode, setLightMode] = useState(false)
  const switchHandler = () => {
    setLightMode(!lightMode)
  }

  return (
    <Layout
      location={props.location}
      lightMode={lightMode}
      title="Jay Papisan | Front End Developer "
    >
      <SEO
        title="Jay Papisan | Front End Developer"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Flex>
        <SubHeroWrapper style={{ display: "block", position: "relative" }}>
          <SocialWrapper>
            <a
              href="https://github.com/papistan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/papisan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a
              href="https://twitter.com/papistan1"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
            <a
              href="https://medium.com/@jpapisan"
              target="_blank"
              rel="noopener noreferrer"
            >
              medium
            </a>
            <a href="/JayPapisanResume2020.pdf">resume</a>
          </SocialWrapper>
        </SubHeroWrapper>
        <SubHeroWrapper>
          <p>Hi, I'm</p>
          <Name>Jay Papisan</Name>
          <p>Front End Developer</p>
          <p>
            Currently having fun working with <span>Gatsby</span>
          </p>
        </SubHeroWrapper>
      </Flex>
      <Flex>
        <Portfolio lightMode={lightMode} />
        {/* <Switch lightMode={lightMode} onClick={switchHandler} /> */}
      </Flex>
    </Layout>
  )
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
`

const SubHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  padding: 10rem 0;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    font-family: Courier New, Courier, serif;
  }
`

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  transform: rotate(90deg);
  margin-top: 0rem;
  margin-right: 22rem;

  @media (max-width: 768px) {
    transform: rotate(0deg);
    margin-top: 0rem;
    margin-right: 0rem;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: inherit;
    padding: 1rem;
    margin-top: 0;
    font-family: Courier New, Courier, serif;
    text-decoration @media (max-width: 768px) {
      padding: 0.5rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`

const Name = styled.h1`
  font-size: 10rem;
  margin-bottom: 5rem;
  line-height: 9rem;
  font-family: Montserrat, sanserif;
`

export default IndexPage
