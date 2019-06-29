import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import styled from "styled-components"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 100,
  },
  title: {
    flexGrow: 10,
  },
}))

const StyledButton = styled.button`
  background: white;
  border-radius: 25px;
  border: 0;
  color: solid black;
  padding: 5px 15px;
  text-transform: "capitalize";
  font-size: 10px;
`

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className="app-bar" color="inherit">
        <Toolbar style={{ zIndex: 500 }}>
          <Typography className={classes.title}>Mozilla Gujarat</Typography>
          <Button className="button-text-class">
            <Typography>home</Typography>
          </Button>
          <Button className="button-text-class">
            <Typography>about</Typography>
          </Button>
          <Button className="button-text-class">
            <Typography>FAQ</Typography>
          </Button>
          <Button className="button-text-class">
            <Typography>events</Typography>
          </Button>
          <StyledButton
            className="margin-space"
            onClick={() => console.log("clicked")}
          >
            <Typography>Get Started</Typography>
          </StyledButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
