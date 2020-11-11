import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

//config
import { about } from "../../../data/config";
import Separator from "../../common/Separator";
import Icons from "../../common/Icons";

export default function AboutMe() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
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

  const aboutDescription = about.aboutDescription;
  const aboutAvatar = about.picUrl;
  const aboutHeading = about.aboutHeading;
  const aboutMeButtomText = about.aboutMeButtomText;

  return (
    <section className="page-section mb-0 bg-transparent text-light" id="about">
      <div className="container">
        <Separator title={aboutHeading} />
        <div className="row">
          <div className="col-12 col-md-3 d-flex">
            <img
              style={{
                width: 150,
                height: 150,
              }}
              src={aboutAvatar}
              alt={`${title} - ${author}`}
              className="mx-auto rounded-circle mt-3 mt-md-0 mb-4 mb-md-0"
            />
          </div>
          <div className="col-12 col-md text-center text-md-left">
            <h2>Hello!</h2>
            <p className="lead">{aboutDescription}</p>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <Link
          className="btn btn-outline-light btn-lg mx-auto"
          href="/cv"
          role="button"
          aria-label="Learn more about me"
        >
          <Icons icon="file" className="mr-2" />
          {aboutMeButtomText}
        </Link>
      </div>
    </section>
  );
}
