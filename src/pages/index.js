import React from "react"
import { graphql } from "gatsby"
import Masonry from "react-masonry-component"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Grid, Typography, Button, GridList } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const StyledButton = withStyles({
  root: {
    background: "#049ea8",
    borderRadius: 25,
    border: 0,
    color: "white",
    padding: "5px 15px",
  },
  label: {
    textTransform: "capitalize",
    fontSize: 18,
  },
})(Button)

const IndexPage = ({ data }) => (
  <Layout>
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
      <Grid item md={3} style={{ textAlign: "right", paddingTop: "5rem" }}>
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
            <Typography component="p">
              We{" "}
              <span role="img" aria-label="heart emoji">
                &#x2764;&#xFE0F;
              </span>{" "}
              the Web!
            </Typography>
          </div>
        </GridList>
        <StyledButton>Join Us!</StyledButton>
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
