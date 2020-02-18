import React, { useState, useLayoutEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { Button } from '../components/ui-components'

const LinkTag = styled(Link)`
  font-family: "Zilla Slab", serif;
  font-size: 30px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin-right: 15px;
  padding: 0.5rem 1rem;
  &:hover {
    color: black;
    text-decoration: none;
  }
  &:active {
    color: black;
  }
`;

const ATag = styled.a`
  font-family: "Zilla Slab", serif;
  font-size: 30px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin-right: 15px;
  padding: 0.5rem 1rem;
  &:hover {
    color: black;
    text-decoration: none;
  }
  &:active {
    color: black;
  }
`;

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-1.png" }) {
        childImageSharp {
          fixed(height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const toggle = () => setIsOpen(!isOpen);

  useLayoutEffect(() => {
    if (window.innerWidth > 990) {
      setIsOpen(true);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <Img
          fixed={logo.file.childImageSharp.fixed}
          alt="Mozilla Gujarat Logo"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => toggle()}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={isOpen ? `navbar-collapse` : `collapse`} id="navbarNav">
        <div className="mr-auto"></div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <LinkTag to="/about">ABOUT</LinkTag>
          </li>
          <li className="nav-item">
            <LinkTag to="/faq">FAQ</LinkTag>
          </li>
          <li className="nav-item">
            <LinkTag to="/clubs">CLUBS</LinkTag>
          </li>
          <li className="nav-item">
            <ATag href="https://community.mozilla.org/groups/mozilla-gujarat/?view=events" target="_blank">EVENTS</ATag>
          </li>
          <li className="nav-item">
            <Button className="button" href="https://github.com/pransh15/moz-starter-pack" target="_blank">
              GET STARTED
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
