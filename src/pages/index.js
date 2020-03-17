import React, { useState } from "react"
import styled from "styled-components"
import Typing from "react-typing-animation"
import TextLoop from "react-text-loop"
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
              <SubHeroWrapper
                style={{ display: "block", position: "relative" }}
              >
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
                <div style={{ height: "100px" }}>
                  <Typing delay={1000}>
                    <p>Front End Developer</p>
                    <p>
                      Currently having fun with
                      <br />
                      <TextLoop delay={0} interval={1500}>
                        <span>...</span>
                        <span>Gatsby</span>
                        <span>GraphQL</span>
                        <span>React</span>
                        <span>web performance</span>
                        <span>marketing automation</span>
                        <span>CSS animations</span>
                        <span>learning TypeScript</span>
                      </TextLoop>
                    </p>
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
                    linkedin{" "}
                  </a>
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
