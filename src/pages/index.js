import React from "react"
import { graphql } from "gatsby"
import Masonry from "react-masonry-component"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { SemiCircle, SemiCircleContainer } from "../components/circular"
import { Grid, Typography, GridList } from "@material-ui/core"
import styled from "styled-components"

const StyledButton = styled.button`
  background: white;
  border-radius: 25px;
  border: 0;
  padding: 5px 15px;
  text-transform: "capitalize";
  font-size: 18px;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SemiCircleContainer>
      <SemiCircle color="#049ea8" home />
    </SemiCircleContainer>
    <Grid container spacing={2}>
      <Grid item md={8}>
        <Masonry enableResizableChildren={true} options={{ gutter: 10 }}>
          {data.allImagesJson.edges.map(({ node }) => (
            <div key={node.id}>
              <Img
                fixed={node.image.childImageSharp.fixed}
                style={{ borderRadius: 10 }}
              />
            </div>
          ))}
        </Masonry>
      </Grid>
      <Grid item md={1}></Grid>
      <Grid
        item
        md={3}
        style={{
          textAlign: "right",
          paddingTop: "5rem",
          color: "white",
          zIndex: 500,
        }}
      >
        <GridList cols={1} cellHeight={120}>
          <div>
            <Typography variant="h5" style={{ fontWeight: 700 }}>
              Mozilla Gujarat
            </Typography>
            <Typography variant="caption">
              The most Diverse Mozilla Local Community
            </Typography>
          </div>
          <div>
            <Typography>We are Mozilla Gujarat!</Typography>
            <Typography>
              A highly enthusiastic community of Mozilla lovers in Gujarat,
              India.
            </Typography>
            <Typography variant="inherit" style={{ fontFamily: "Zilla Slab" }}>
              We{" "}
              <span role="img" aria-label="heart emoji">
                &#x2764;&#xFE0F;
              </span>{" "}
              the Web!
            </Typography>
          </div>
        </GridList>
        <StyledButton onClick={() => console.log("clicked")}>
          <Typography>Join Us!</Typography>
        </StyledButton>
      </Grid>
    </Grid>
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
