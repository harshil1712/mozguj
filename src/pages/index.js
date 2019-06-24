// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage

import React from "react"
import { Link, graphql } from "gatsby"
import Masonry from "react-masonry-component"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import SemiCicle from "../components/semicircle"

const masonryOptions = {
  columnWidth: 155,
}

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <Row>
        <Col md={6}>
          <Masonry options={masonryOptions}>
            {data.allImagesJson.edges.map(({ node }) => (
              <div key={node.id}>
                <Img
                  fixed={node.image.childImageSharp.fixed}
                  style={{ borderRadius: 15 }}
                />
              </div>
            ))}
          </Masonry>
        </Col>
        <Col md={6}>
          <SemiCicle>
            <div style={{ marginTop: 50 }}>Hello</div>
          </SemiCicle>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allImagesJson {
      edges {
        node {
          id
          title
          image {
            id
            childImageSharp {
              fixed(width: 250) {
                src
                ...GatsbyImageSharpFixed
              }
            }
          }
          caption
        }
      }
    }
  }
`
