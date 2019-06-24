import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SemiCircle from "../components/circular"
import { Row, Col, Container } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SemiCircle color="#049ea8" />
    <SEO title="Home" />
    <Container>
      <Row>
        <Col>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
        </Col>
        <Col>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
