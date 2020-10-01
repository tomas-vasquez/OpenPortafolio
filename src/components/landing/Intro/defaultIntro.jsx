import React from "react";
import Typist from "react-typist";

//config
import { banner } from "../../../data/config";

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
                  <i className={`${icon.image}  fa-3x`} />
                </a>
              ))}
            </div>
            <a
              className="btn btn-outline-light"
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
