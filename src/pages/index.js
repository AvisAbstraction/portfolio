// import { Link } from "gatsby"
// import Image from "../components/image"

import React from "react"
import {
  // SEO,
  SideMenu,
  Home,
  About,
  Stack,
  Contact,
  Projects,
  Studies,
} from "../components"
import "../components/index.css"

/* <SEO title="Home" /> */

const IndexPage = props => (
  <div className="overall-container">
    <div className="main-container">
      <div className="sidemenu-container">
        <SideMenu />
      </div>
      <div>
        <Home />
        <About />
        <Studies />
        <Stack />
        <Projects />
        <Contact />
      </div>
    </div>
  </div>
)

export default IndexPage
