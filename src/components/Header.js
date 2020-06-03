import React from "react"
import { Navbar,Nav } from "react-bootstrap"
import { Link } from 'gatsby'
import './layout.css'
 
const Header = () => {
  return (
  <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="pb-0" fixed="top">
  <Navbar.Brand href="#home">
    <img
        src={require('../images/721x346.png')}
        height="100"
        width="210"
        alt="mozguj logo"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"></Nav>
    <Nav className="text-center ntag">
    <Nav.Link className="mr-xl-4 mr-lg-4"><Link to={'/'} className="blink" activeClassName="alink"><h2>HOME</h2></Link></Nav.Link>
      <Nav.Link className="mr-xl-4 mr-lg-4"><Link to={'event'} className="blink" activeClassName="alink"><h2>EVENTS</h2></Link></Nav.Link>
      <Nav.Link className="mr-xl-4 mr-lg-4"><Link to={'club'} className="blink" activeClassName="alink"><h2>CLUBS</h2></Link></Nav.Link>
      <Nav.Link className="mr-xl-4 mr-lg-4"><Link to={'team'} className="blink" activeClassName="alink"><h2>TEAM</h2></Link></Nav.Link>
      <Nav.Link className="mr-xl-4 mr-lg-4"><Link to={'faq'} className="blink" activeClassName="alink"><h2>FAQ</h2></Link></Nav.Link>
      <Nav.Item className="p-0">
        <a className="button mr-xl-2 mr-lg-4 mt-xl-2 mt-lg-2 mt-sm-2 mb-xl-2 mb-lg-0 mb-md-2 mb-sm-2 mb-2" href="https://github.com/pransh15/moz-starter-pack.git" target="_blank">
        <h4 className="px-xl-3 px-lg-3 px-md-3 px-sm-3 px-3 mt-1"><i>GET STARTED</i></h4>
        </a>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
  

export default Header
