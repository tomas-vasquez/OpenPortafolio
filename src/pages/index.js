import React from "react";
import { graphql } from "gatsby";

import Portfolio from "../components/landing/Portfolio";
import AboutMe from "../components/landing/AboutMe";
import Skills from "../components/landing/Skills";
import ContactMe from "../components/landing/ContactMe";
import Courses from "../components/landing/Courses";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <Portfolio />
      <AboutMe />
      <Courses />
      <Skills />
      <ContactMe />
    </Layout>
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
