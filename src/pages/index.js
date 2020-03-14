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
          <p>👋, I'm</p>
          <Name>Jay Papisan</Name>
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

    @media (max-width: 768px) {
      padding: 0.5rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`

const Name = styled.h1`
  font-size: 12rem;
  margin-bottom: 5rem;
  line-height: 9rem;
  font-family: Sawarabi Mincho;
`

export default IndexPage
