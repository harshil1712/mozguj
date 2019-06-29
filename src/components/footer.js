import React from "react"
import { Typography } from "@material-ui/core"
import styled from "styled-components"

const FooterPaper = styled.div`
  border-top: 1px solid #989898;
  text-align: center;
  height: 50px;
  text-transform: capitalize;
  font-size: 18px;
  font-family: "Zilla Slab";
  bottom: 0px;
  position: absolute;
  width: 100%;
`

const Footer = () => (
  <FooterPaper elevation={0}>
    <Typography variant="inherit">
      <span
        style={{
          background: "black",
          color: "white",
          fontWeight: 600,
          lineHeight: 3,
        }}
      >
        Built by MozGuj Volunteers with
      </span>{" "}
      <span role="img" aria-label="heart emoji">
        &#x2764;&#xFE0F;
      </span>
    </Typography>
  </FooterPaper>
)

export default Footer
