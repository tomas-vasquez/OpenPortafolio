import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

//config
import { about } from "../../../data/config";
import Separator from "../../common/Separator";

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
        <Separator title={aboutHeading} />
        <div className="row">
          <div className="col-12 col-md-auto d-flex">
            <Image
              fixed={avatar}
              alt={`${title} - ${author}`}
              className="mx-auto rounded-circle mt-3 mt-md-0 mb-4 mb-md-0"
            />
          </div>
          <div className="col-12 col-md text-center text-md-left">
            <h2>I am a {author}</h2>
            <p className="lead">{aboutDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
