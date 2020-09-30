import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

//config
import { about } from "../../../data/config";

export default function AboutMe() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 190, height: 190) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          author {
            name
          }
        }
      }
    }
  `);

  const title = data.site.siteMetadata?.title;
  const author = data.site.siteMetadata?.author.name;
  const avatar = data?.avatar?.childImageSharp?.fixed;

  const aboutDescription = about.aboutDescription;
  const aboutHeading = about.aboutHeading;

  return (
    <section className="page-section mb-0 bg-transparent text-light" id="about">
      <div className="container">
        <h2 className="display-4 mb-0 text-center text-uppercase">
          {aboutHeading}
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Image
              fixed={avatar}
              alt={`${title} - ${author}`}
              className="mx-auto rounded-circle mb-4 mb-md-0"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-8 my-auto">
            <p
              className="lead"
              style={{
                fontWeight: 400,
              }}
            >
              {aboutDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
