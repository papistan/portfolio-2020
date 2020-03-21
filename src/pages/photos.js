import React, { useState } from "react"
import Masonry from "react-masonry-component"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { TabWrapper, Tab } from "../components/portfolio"

const travelLocations = ["pakistan", "vietnam", "morocco", "tibet", "himalayas"]

const Travel = props => {
  const [lightMode, setLightMode] = useState(false)
  const [travelLocation, setTravelLocation] = useState(travelLocations[2])

  return (
    <StaticQuery
      query={travelQuery}
      render={data => {
        console.log(data)

        const selectedPhotos = data[travelLocation].edges.map(img => (
          <TileWrapper tabIndex="0">
            <a href={img.node.childImageSharp.fluid.src}>
              <Img
                title="Header image"
                alt={`images of ${travelLocation}`}
                fluid={img.node.childImageSharp.fluid}
              />
            </a>
          </TileWrapper>
        ))

        const locationTabs = travelLocations.map((locationText, i) => (
          <Tab
            onClick={() => {
              setTravelLocation(locationText)
            }}
            tabIndex="0"
            title={travelLocation}
            subportfolio={locationText}
            key={i}
          >
            {locationText}
          </Tab>
        ))

        return (
          <Layout location="/photos/" lightMode={lightMode}>
            <SEO
              title="Jay Papisan | Front End Developer"
              keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <TabWrapper style={{ marginBottom: "60px" }}>
              {locationTabs}
            </TabWrapper>
            <Masonry>{selectedPhotos}</Masonry>
          </Layout>
        )
      }}
    />
  )
}

const travelQuery = graphql`
  query BlurUpQuery {
    pakistan: allFile(filter: { absolutePath: { regex: "/pakistan/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
    himalayas: allFile(filter: { absolutePath: { regex: "/himalayas/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
    morocco: allFile(filter: { absolutePath: { regex: "/morocco/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
    tibet: allFile(filter: { absolutePath: { regex: "/tibet/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
    vietnam: allFile(filter: { absolutePath: { regex: "/vietnam/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
const TileWrapper = styled.li`
  width: 380px;
  margin-right: 5px;
  list-style: none;
  @media (max-width: 400px) {
    max-width: 320px;
  }
`
export default Travel
