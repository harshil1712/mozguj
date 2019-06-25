import React from "react"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Mozilla Gujarat</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <left>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Events</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Upcoming Events
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Previous Events
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </left>
  </Navbar>
)

export default Header
