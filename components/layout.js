import { Fragment } from "react";
import Header from "./header";
import styled from "styled-components";

const ContentWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: lightgray;
  height: 100vh;
  width: 100vw;
  padding: 1rem;
`;

const Layout = props => (
  <Fragment>
    <Header />
    <ContentWrapper>{props.children}</ContentWrapper>
  </Fragment>
);

export default Layout;
