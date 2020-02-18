import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Button, Container, PageTitle} from '../components/ui-components';
// import Button from "../components/button";
// import Container from "../components/Container"
// import PageTitle from '../components/PageTitle';

const Title = styled.h1`
  font-weight: bold;
  background: ${props => props.bg || "black"};
  background-clip: text;
  color: transparent;
  background-position: center;
`;

const Para = styled.p`
  font-size: 1.5em;
`;

export default () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fixed(height: 500) {
            src
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Container className="container text-center">
        <PageTitle>We Are</PageTitle>
        <Title
          className="display-1"
          bg={`url('${image.file.childImageSharp.fixed.src}')`}
        >
          Mozilla Gujarat
        </Title>
        <h2>The most diverse Mozilla Local Community</h2>
        <Button href="https://community.mozilla.org/groups/mozilla-gujarat/" target="_blank">Join Us</Button>
        <Para>
          A highly enthusiastic community of Mozilla lovers in Gujarat, India{" "}
          <br />{" "}
          <span className="text-uppercase">
            We <span aria-label="Heart Emoji">❤️</span> Web
          </span>
        </Para>
      </Container>
    </Layout>
  );
};
