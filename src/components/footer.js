import React from "react"
import { Typography, Paper } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const FooterPaper = withStyles({
  root: {
    borderTop: "1px solid #989898",
    borderRadius: 0,
    textAlign: "center",
    height: "50px",
  },
  label: {
    textTransform: "capitalize",
    fontSize: 18,
  },
})(Paper)

const Footer = () => (
  <FooterPaper elevation={0}>
    <Typography>
      <span
        style={{
          background: "black",
          color: "white",
          fontWeight: 600,
          lineHeight: 3,
        }}
      >
        Built by MozGuj Volunteers with{" "}
      </span>
      <span role="img" aria-label="heart emoji">
        &#x2764;&#xFE0F;
      </span>
    </Typography>
  </FooterPaper>
)

export default Footer
