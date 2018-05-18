import React, { Fragment } from "react";
import styled, { injectGlobal } from "styled-components";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat');
  html {
    height: 100%;
    width: 100%;
  }
  body{
    margin:0;
    padding:0;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: lightgray;
  height: 100vh;
  width: 100vw;
`;

const Title = styled.p`
  color: paleturquoise;
  font-size: 18px;
  margin: 0 1.3rem;
  padding: 1rem 0;
  display: inline-block;
  cursor: pointer;
  :hover {
    text-shadow: 1px 1px 7px black;
  }
`;

const NavWrapper = styled.div`
  background-color: palevioletred;
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
`;

const ContentWrapper = styled.div`
  padding: 1rem;
`;

const Navbar = () => (
  <NavWrapper>
    <Title>Home</Title>
    <Title>About</Title>
    <Title>Contact</Title>
  </NavWrapper>
);

export default () => (
  <Wrapper>
    <Navbar />
    <ContentWrapper>
      <h3>Welcome to Next.js</h3>
      <p>
        Next.js is a minimalistic framework for server-rendered React
        applications.
      </p>
    </ContentWrapper>
  </Wrapper>
);
