import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

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
          about {
            aboutDescription
            aboutHeading
            picUrl
          }
        }
      }
    }
  `);

  const title = data.site.siteMetadata?.title;
  const author = data.site.siteMetadata?.author.name;
  const aboutDescription = data.site.siteMetadata?.about.aboutDescription;
  const aboutHeading = data.site.siteMetadata?.about.aboutHeading;
  const avatar = data?.avatar?.childImageSharp?.fixed;

  return (
    <section
      className="page-section bg-primary text-white mb-0 jumbotron jumbotron-fluid bg-transparent bgstyle text-light "
      id="about"
    >
      <div id="stars"></div>
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
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
        <div className="text-center mt-4"></div>
      </div>
    </section>
  );
}
