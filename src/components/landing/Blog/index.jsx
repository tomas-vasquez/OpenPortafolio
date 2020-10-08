import { Link } from "gatsby";
import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import BlogCard from "./blogCard";
import Separator from "../../common/Separator";
import { blog } from "../../../data/config";

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
    <section className="page-section bg-white" id="Blog">
      <div className="container">
        <Separator title={blog.blogHeading} dark />
        <div className="row py-4">
          {posts.map((post, key) => (
            <BlogCard post={post} key={key} />
          ))}
        </div>
        <div className="d-flex">
          <Link
            to="/blog"
            className="btn btn-outline-secondary btn-lg mx-auto"
            role="link"
            aria-label="view all posts"
          >
            {blog.blogButtomText}
          </Link>
        </div>
      </div>
    </section>
  );
}
