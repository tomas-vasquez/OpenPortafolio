import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { rhythm, scale } from "../utils/typography";
import AuthorBlog from "../components/blog/AuthorBlog";
import SocialFedds from "../components/blog/SocialFedds";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={post.frontmatter.title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="container bg-white shadow">
        <div className="row">
          <div className="col-lg-8 pr-lg-0">
            <article
              className="bg-white py-3 px-0 px-lg-3"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <p
                  style={{
                    ...scale(-1 / 5),
                    display: `block`,
                    marginBottom: rhythm(1),
                  }}
                >
                  {post.frontmatter.date}
                </p>
              </header>
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
            </article>
          </div>
          <div className="col-lg-4 pr-lg-0">
            <AuthorBlog />
            <SocialFedds />
          </div>
          <div className="container border-top">
            <div className="row d-flex">
              {previous && (
                <div className="col-md-6">
                  <div className="py-3">
                    <p className="mb-1 ml-4">Previous Articles</p>
                    <h5 className="post-title">
                      <Link to={previous.fields.slug} rel="prev">
                        <FontAwesomeIcon icon={faArrowLeft} />{" "}
                        {previous.frontmatter.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              )}
              {next && (
                <div className="col-md-6 ml-auto">
                  <div className="py-3 text-right">
                    <p className="mb-1 mr-4">Next Articles</p>
                    <h5 className="post-title">
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title}{" "}
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </h5>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
