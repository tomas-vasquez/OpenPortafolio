import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/common/bio";

import Portfolio from "../components/landing/Portfolio";
import AboutMe from "../components/landing/AboutMe";
import Skills from "../components/landing/Skills";
import ContactMe from "../components/landing/ContactMe";
import Courses from "../components/landing/Courses";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />

        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
