import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
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

export default () => (
  <Layout>
    <h3>Welcome to Next.js</h3>
    <p>
      Next.js is a minimalistic framework for server-rendered React
      applications.
    </p>
  </Layout>
);
