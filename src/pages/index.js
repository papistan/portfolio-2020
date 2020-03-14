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
            <a href="github">github</a>
            <a href="github">linkedin</a>
            <a href="github">twitter</a>
            <a href="github">resume</a>
          </SocialWrapper>
        </SubHeroWrapper>
        <SubHeroWrapper>
          <h1 style={{ fontSize: "8rem", marginBottom: "5rem" }}>
            Jay Papisan{" "}
          </h1>
          <p>Front End Developer</p>
          <p>Currently working in</p>
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

    &:hover {
      text-decoration: underline;
    }
  }
`

export default IndexPage
