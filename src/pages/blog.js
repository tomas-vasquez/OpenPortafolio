import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import BlogCard from "../components/landing/Blog/blogCard";

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title="All posts">
      <SEO title="All posts" />
      <section className="mb-4">
        <div className="container bg-white" fluid>
          <div class="card-columns py-4">
            {posts.length !== 0 ? (
              posts.map((post) => {
                return <BlogCard post={post} />;
              })
            ) : (
              <p>
                No blog posts found. Add markdown posts to "content/blog" (or
                the directory you specified for the "gatsby-source-filesystem"
                plugin in gatsby-config.js).
              </p>
            )}
          </div>
        </div>
      </section>
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
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          is_favorite
        }
      }
    }
  }
`;
