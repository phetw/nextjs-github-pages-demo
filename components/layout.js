import { Fragment } from "react";
import Header from "./header";
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

const ContentWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 90vh;
  background-color: lightgray;
  padding: 1rem;
`;

const Layout = props => (
  <Fragment>
    <Header />
    <ContentWrapper>{props.children}</ContentWrapper>
  </Fragment>
);

export default Layout;
