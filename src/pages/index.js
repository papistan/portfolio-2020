import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Switch from "../components/switch"
import Portfolio from '../components/portfolio'

// const bulbStyle = {
//   transform: "rotate(180deg)",
//   maxWidth: "60px",
// }

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
      <h1>Jay Papisan </h1>
      <p>Front End Developer</p>
      <p>Currently working in</p>
      <div
        style={{
          display: "flex",
          bottom: "10px",
          justifyContent: "flex-end",
          marginBottom: "0",
        }}
      >
        <Portfolio lightMode={lightMode} />
        <Switch lightMode={lightMode} onClick={switchHandler} />
      </div>
    </Layout>
  )
}

export default IndexPage
