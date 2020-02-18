import React from "react";
import styled from "styled-components";
import { IconContext } from 'react-icons'
import { FaTwitter, FaInstagram } from "react-icons/fa";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  height: 3.5rem;
  width: 100%;
  background: black;
  color: white;
  font-family: "Zilla Slab", serif;
  padding: 1rem;
  font-weight: 700;
`;

const SocialMedia = styled.a`
  font-size: 24px;
  color: white;
  float: right;
  margin-right: 10px;
  vertical-align: middle;
  &:hover {
    color: rgba(255,255,255,.5);
  }
`;

const Footer = () => (
  <StyledFooter style={{ marginBottom: 0 }}>
    Made with <span aria-label="Heart Emoji">❤️</span> by Mozilla Gujarat
    <IconContext.Provider value={{style:{verticalAlign:'middle'}}}>
    <SocialMedia href="https://instagram.com/mozguj" target="_blank">

      <FaInstagram />
    </SocialMedia>
    <SocialMedia href="https://twitter.com/mozguj" target="_blank">
      <FaTwitter />
    </SocialMedia>
    </IconContext.Provider>
  </StyledFooter>
);

export default Footer;
