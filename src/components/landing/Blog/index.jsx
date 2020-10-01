import { Link } from "gatsby";
import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

export default function Blog() {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allMarkdownRemark(
        filter: { frontmatter: { is_favorite: { eq: true } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
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
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.nodes;

  return (
    <section className="page-section bg-white Blog" id="Blog">
      <div className="container">
        <h2 className="display-4 mb-0 text-center text-uppercase text-secondary mb-0">
          Blog
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          {posts.map((post) => {
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
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="d-flex">
          <Link
            to="/blog"
            className="btn btn-outline-dark mx-auto"
            role="link"
            aria-label="view all posts"
          >
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
}
