import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Switch from "../components/switch"

const bulbStyle = {
  transform: "rotate(180deg)",
  maxWidth: "60px",
}

const IndexPage = props => {
  const [lightMode, setLightMode] = useState(true)
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
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "-40px",
          justifyContent: "flex-end",
        }}
      >
        <Switch lightMode={lightMode} onClick={switchHandler} />
      </div>
      <h1>Jay Papisan </h1>
      <p>Front End Developer</p>
      <p>Currently working in</p>
      <Link to="/blog/">
        <Button marginTop="35px">Go to Blog</Button>
      </Link>
    </Layout>
  )
}

export default IndexPage
