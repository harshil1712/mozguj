/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import { Container } from "react-bootstrap"

const Layout = (props) => {
  return (
    <>
    <Header/>
    <div className="main">
      <Container>
        <div className="content">
        {props.children}
        </div>
      </Container>
      <Footer/>
    </div>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
