import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer"
import SEO from "./SEO";
import './index.css'

import "../bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
