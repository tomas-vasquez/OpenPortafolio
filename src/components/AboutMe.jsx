import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function AboutMe() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
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
  const picUrl = data.site.siteMetadata?.about.picUrl;

  return (
    <section
      className="page-section bg-primary text-white mb-0 jumbotron jumbotron-fluid bg-transparent bgstyle text-light "
      id="about"
      style={{ backgroundColor: "#08b391", zIndex: 60 }}
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
            <img
              style={{ width: 200 }}
              className="mx-auto rounded-circle mb-4 mb-md-0"
              src={picUrl}
              alt={`${title} - ${author}`}
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
