import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { rhythm, scale } from "../utils/typography";
import AuthorBlog from "../components/common/AuthorBlog";
import SocialFedds from "../components/blog/SocialFedds";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={post.frontmatter.title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="container bg-white mb-5">
        <div className="row ">
          <div className="col-lg-8 pr-lg-0">
            <article
              className="bg-white p-3"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                {/* <h1
                  itemProp="headline"
                  style={{
                    marginTop: rhythm(1),
                    marginBottom: 0,
                  }}
                >
                  {post.frontmatter.title}
                </h1> */}
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
          <ul className="pager">
            {previous && (
              <li className="px-4 py-3">
                <h5>Previous Articles</h5>
                <h3 className="post-title">
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </h3>
              </li>
            )}
            {next && (
              <li className="px-4 py-3 text-right ml-auto">
                <h5>Next Articles</h5>
                <h3 className="post-title">
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </h3>
              </li>
            )}
          </ul>
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
