import React from "react";
import Typist from "react-typist";

//config
import { banner } from "../../../data/config";
import Icons from "../../common/Icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Banner = () => {
  const FirstName = banner.FirstName;
  const LastName = banner.LastName;
  const MiddleName = banner.MiddleName;
  const devDesc = banner.devDesc;
  const icons = banner.icons;

  return (
    <>
      <div>
        <div
          id="home"
          className="title bg-transparent text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        >
          <div className="container container-fluid text-center mt-2">
            <h1 className="display-3 pt-4 mb-3">
              {FirstName + " " + MiddleName + " " + LastName}
            </h1>
            <div className="mb-4">
              <Typist className="lead"> {devDesc}</Typist>
            </div>
            <div className="mb-5">
              {icons.map((icon) => (
                <a
                  className="socialicons"
                  key={icon.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.icon}`}
                >
                  <Icons icon={icon.icon} size="3x" />
                </a>
              ))}
            </div>
            <AnchorLink
              className="btn btn-outline-light btn-md"
              href="#about"
              role="button"
              aria-label="Learn more about me"
            >
              {banner.buttomText}
            </AnchorLink>
            <div className="mt-2">
              <Icons icon="arrowDown" size="2x" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
