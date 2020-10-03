import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

const BlogCard = ({ post }) => {
  const cover = post.frontmatter.cover?.childImageSharp.fluid;
  const title = post.frontmatter.title || post.fields.slug;
  return (
    <div className="col-md-6 col-lg-4">
      <article className="mb-4" itemScope itemType="http://schema.org/Article">
        {cover && (
          <Link
            style={{ boxShadow: `none` }}
            to={post.fields.slug}
            itemProp="url"
          >
            <Image
              fluid={cover}
              alt={`${title}`}
              className="img-responsive"
              style={{
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
            />
          </Link>
        )}
        <div
          className="card shadow"
          style={
            cover
              ? {
                  borderTop: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }
              : null
          }
        >
          <div className="card-body p-2">
            <Link
              style={{ boxShadow: `none`, fontSize: "1.5rem", fontWeight: 400 }}
              to={post.fields.slug}
              className="px-1 m-0"
              itemProp="url"
            >
              {title}
            </Link>
            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
              className="p-1 m-0"
            />
          </div>
        </div>
      </article>
    </div>
  );
};
export default BlogCard;
