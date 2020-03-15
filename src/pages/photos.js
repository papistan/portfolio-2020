import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Travel = props => {
  const [lightMode, setLightMode] = useState(false)


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
      <p></p>
    </Layout>
  )
}

export default Travel
