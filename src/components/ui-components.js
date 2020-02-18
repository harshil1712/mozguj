import styled from 'styled-components'

const PageTitle = styled.h1`
    text-align: center;
    text-transform: uppercase;
`
const Container = styled.div`
  font-family: "Zilla Slab", serif;
  line-height: 1.75;
`;

const Button = styled.a`
font-family: "Zilla Slab", serif;
  box-shadow: 6px -6px 0px 0px #000000;
  background-color: #ffffff;
  border: 2px solid #000000;
  display: inline-block;
  cursor: pointer;
  color: #000000;
  font-size: 21px;
  font-style: italic;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
      color: black;
      text-decoration:none;
      background-color: bisque;
  }
`;

export { PageTitle, Container, Button}