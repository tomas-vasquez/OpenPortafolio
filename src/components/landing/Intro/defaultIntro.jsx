import React from "react";
import Typist from "react-typist";
import { useStaticQuery, graphql } from "gatsby";

const Banner = () => {
  const data = useStaticQuery(graphql`
    query BannerQuery {
      site {
        siteMetadata {
          banner {
            FirstName
            MiddleName
            LastName
            devDesc
            icons {
              id
              image
              url
            }
          }
        }
      }
    }
  `);

  const FirstName = data.site.siteMetadata?.banner.FirstName;
  const LastName = data.site.siteMetadata?.banner.LastName;
  const MiddleName = data.site.siteMetadata?.banner.MiddleName;
  const devDesc = data.site.siteMetadata?.banner.devDesc;
  const icons = data.site.siteMetadata?.banner.icons;

  return (
    <>
      <div>
        <div
          id="home"
          className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        >
          <div id="stars"></div>
          {/* <div id="stars2"></div> */}
          <div className="container container-fluid text-center ">
            <h1 className="display-3">
              {FirstName + " " + MiddleName + " " + LastName}
            </h1>
            <Typist className="lead"> {devDesc}</Typist>
            <div className="py-5">
              {icons.map((icon) => (
                <a
                  className="socialicons"
                  key={icon.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                >
                  <i className={`fab ${icon.image}  fa-3x`} />
                </a>
              ))}
            </div>
            <a
              className="btn btn-outline-light btn-lg"
              href="#aboutme"
              role="button"
              aria-label="Learn more about me"
            >
              More about me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
