import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Container } from "@material-ui/core"

import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Zilla Slab"',
      '"Open Sans"',
      "X-LocaleSpecific",
      "sans-serif",
    ].join(","),
  },
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ThemeProvider theme={theme}>
          <div>
            <Container maxWidth="lg">{children}</Container>
            {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
          </div>
          <Footer />
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
