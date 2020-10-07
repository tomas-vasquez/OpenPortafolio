import React from "react";
import { graphql } from "gatsby";

import Portfolio from "../components/landing/Portfolio";
import AboutMe from "../components/landing/AboutMe";
import Skills from "../components/landing/Skills";
import ContactMe from "../components/landing/ContactMe";
import Blog from "../components/landing/Blog";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import Widget from "../components/landing/Widget";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <Portfolio />
        <AboutMe />
        <Blog />
        <Skills />
        <ContactMe />
      </Layout>
      <Widget />
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
