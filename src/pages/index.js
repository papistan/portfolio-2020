import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Typing from "react-typing-animation"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Switch from "../components/switch"
import Portfolio from "../components/portfolio"

const IndexPage = props => {
  const [lightMode, setLightMode] = useState(false)
  // const switchHandler = () => {
  //   setLightMode(!lightMode)
  // }
  return (
    <StaticQuery
      query={imageQuery}
      render={data => {
        return (
          <Layout location="/" lightMode={lightMode}>
            <SEO
              title="Jay Papisan | Front End Developer"
              keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <Flex>
              <MetaSocialWrapper
                style={{ display: "block", position: "relative" }}
              >
                <SocialWrapper>
                  <Typing>
                    <Typing.Delay ms={6000} />
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
                  </Typing>
                </SocialWrapper>
              </MetaSocialWrapper>
              <SubHeroWrapper>
                <div style={{ height: "700px" }}>
                  <Typing>
                    <Typing.Delay ms={1000} />
                    <p>Hi, I'm</p>
                    <Typing.Delay ms={500} />
                    <Name>Jay Papisan</Name>
                    <p>Front End Engineer</p>
                  </Typing>
                </div>
              </SubHeroWrapper>
            </Flex>
            <Flex>
              <Portfolio lightMode={lightMode} />
              {/* <Switch lightMode={lightMode} onClick={switchHandler} /> */}
            </Flex>
            <Flex
              style={{
                paddingTop: "300px",
                justifyContent: "center",
                flexDirection: "column",
                flexWrap: "wrap",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <Image
                  fixed={data.jay.childImageSharp.fixed}
                  alt="profile pic"
                  style={{
                    borderRadius: `50%`,
                    margin: "auto",
                    height: "200px",
                    width: "200px",
                    marginBottom: "100px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Courier New, Courier, serif",
                  }}
                >
                  👋 connect with me on{" "}
                  <a
                    href="https://www.linkedin.com/in/papisan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                    }}
                  >
                    linkedin
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://twitter.com/papistan1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                    }}
                  >
                    twitter.
                  </a>
                </p>
              </div>
            </Flex>
          </Layout>
        )
      }}
    />
  )
}

const imageQuery = graphql`
  query imageQuery {
    jay: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

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
    padding-bottom: 0;
    padding-top: 0;
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
    flex-direction: column;
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

    @media (max-width: 768px) {
      padding-left: 0;
      display: block;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`

const MetaSocialWrapper = styled(SubHeroWrapper)`
  @media (max-width: 768px) {
    padding-bottom: 10rem;
  }
`

const neonGlow = keyframes`
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6, 0 0 50px #0073e6, 0 0 60px #0073e6, 0 0 70px #0073e6;
  }
`

const Name = styled.h1`
  font-size: 10rem;
  margin-bottom: 5rem;
  line-height: 9rem;
  font-family: Montserrat, sanserif;
  color: #fff;
  animation: ${neonGlow} 1s ease-in-out infinite alternate;

  @media (max-width: 730px) {
    margin-bottom: 2rem;
  }
`

export default IndexPage
