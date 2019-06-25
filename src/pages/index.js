import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SemiCircle from "../components/circular"
import { Grid } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SemiCircle color="#049ea8" />
    <SEO title="Home" />
    <Grid container>
      <Grid item md={6}>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
      </Grid>
      <Grid item md={6}>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
