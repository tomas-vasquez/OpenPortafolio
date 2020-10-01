import React from "react";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title="All posts">
      <SEO title="All posts" />
      <section class="content-wrap">
        <div class="container">
          <div class="row bg-white py-2" id="post-masonry">
            {posts.length !== 0 ? (
              posts.map((post) => {
                const cover = post.frontmatter.cover?.childImageSharp.fluid;
                const title = post.frontmatter.title || post.fields.slug;
                return (
                  <article
                    class="col-sm-4 post post-masonry post-format-image"
                    key={post.fields.slug}
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <div class="post-wrapper">
                      <div class="featured-content">
                        <Link
                          style={{ boxShadow: `none` }}
                          to={post.fields.slug}
                          itemProp="url"
                        >
                          <Image
                            fluid={cover}
                            alt={`${title}`}
                            className="img-responsive"
                          />
                        </Link>
                      </div>
                      <div class="post-excerpt">
                        <h3 class="post-title">
                          <Link
                            style={{ boxShadow: `none` }}
                            to={post.fields.slug}
                            itemProp="url"
                          >
                            {title}
                          </Link>
                        </h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </div>
                    </div>
                  </article>
                );
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
