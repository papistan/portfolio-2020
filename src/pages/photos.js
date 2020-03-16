import React, { useState } from "react"
import Masonry from "react-masonry-component"

import Layout from "../components/layout"
import SEO from "../components/seo"

const masonryOptions = {
  transitionDuration: 0,
}


const Travel = props => {
  const [lightMode, setLightMode] = useState(false)
  // const childElements = props.elements.map(function(element) {
  //   return (
  //     <li className="image-element-class">
  //       <img src={element.src} />
  //     </li>
  //   )
  // })

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
      <h1>Not Found</h1>
      {/* <Masonry
        className={"my-gallery-class"} // default ''
        elementType={"ul"} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {childElements}
      </Masonry> */}
    </Layout>
  )
}

export default Travel
