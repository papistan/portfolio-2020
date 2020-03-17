import React, { useState } from "react"
import Masonry from "react-masonry-component"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const masonryOptions = {
  transitionDuration: 0,
}

const Travel = props => {
  const [lightMode, setLightMode] = useState(false)
  const [travelLocation, setTravelLocation] = useState("pakistan")

  return (
    <StaticQuery
      query={travelQuery}
      render={data => {
        console.log(data)

        const pakistan = data[travelLocation].edges.map(img => (
          <li
            style={{
              width: "250px",
              marginRight: "10px",
              listStyle: "none",
            }}
          >
            <Img
              title="Header image"
              alt={`images of ${travelLocation}`}
              fixed={img.node.childImageSharp.fixed}
            />
          </li>
        ))

        return (
          <Layout location={props.location} lightMode={lightMode}>
            <SEO
              title="Jay Papisan | Front End Developer"
              keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <h1>In progress...</h1>
            <Masonry
            // className={"my-gallery-class"} // default ''
            // elementType={"ul"} // default 'div'
            // options={masonryOptions} // default {}
            // disableImagesLoaded={false} // default false
            // updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            // imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
              {pakistan}
            </Masonry>
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
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    himalayas: allFile(filter: { absolutePath: { regex: "/himalayas/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
    morocco: allFile(filter: { absolutePath: { regex: "/morocco/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
    tibet: allFile(filter: { absolutePath: { regex: "/tibet/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
    vietnam: allFile(filter: { absolutePath: { regex: "/vietnam/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Travel
