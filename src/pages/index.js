import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql,useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Row, Col, Button } from "react-bootstrap";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Images{
      moz: file(relativePath:{eq: "Moz.png"}){
        childImageSharp{
          fluid(maxWidth:810, quality: 100){
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
   return (
    <Layout>
      <SEO title="Home" />
      <div className="text-center">
      <h1 style={{fontWeight: `300`}}>WE ARE</h1>
      <div className="mt-4 ml-xl-5 ml-lg-5 ml-md-1">
        <div className="ml-xl-5 ml-lg-2">
        <Img className="ml-xl-5" fluid={data.moz.childImageSharp.fluid}/>
        </div>
        </div>
        <Row>
          <Col md="12" sm="12" className="p1 mt-2">
          <h2><i>The most diverse Mozilla Regional Community</i></h2>          
          </Col>
        </Row>
        <Row className="mt-4 ml-xl-5 ml-lg-5 ml-md-5">
          <Col lg="6" md="6" sm="12">
          <a href="http://bit.ly/moz-guj-slack" target="_blank"><Button className="button px-0 pb-0 ml-xl-5" style={{width: `200px`}}><h5>
              <i>Join Slack</i></h5></Button></a>
          </Col>
          <Col lg="4" md="4" sm="12">
          <a href="https://community.mozilla.org/groups/mozilla-gujarat/" target="_blank"><Button className="button px-0 pb-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-4 mt-4" style={{width: `200px`}}><h5>
            <i>Join Community Portal</i></h5></Button></a>
          </Col>
        </Row>
        <Row className="p2 mt-3">
          <Col md="12" sm="12">
            <h2>A highly enthusiatic community of</h2>
          </Col>
          <Col md="12" sm="12" className="mt-3">
            <h2>Mozilla lovers in Gujarat,India</h2>
          </Col>
          <Col>
            <h2 md="12" sm="12" className="mt-3 mb-5">WE<span aria-label="Heart Emoji"> ❤️ </span>THE WEB</h2>
          </Col>
        </Row>
      </div>
    </Layout>
   )
}

export default IndexPage
