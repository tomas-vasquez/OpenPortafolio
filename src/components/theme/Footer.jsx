import React from "react";
import Icons from "../common/Icons";

//config
import { banner, footer } from "../../data/config";

export default function Footer() {
  const location = footer.location;
  const icons = banner.icons;

  return (
    <>
      <footer className="py-5 text-light bg-trasparent">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-4 text-center text-lg-left">
              <h5 className="text-uppercase mb-3">Location</h5>
              <p className="m-0">{location}</p>
            </div>

            <div className="col-12 col-md-6 col-xl-4 mt-5 mt-md-0 text-center">
              <h5 className="text-uppercase mb-3">Around the Web</h5>
              {icons.map((icon) => (
                <a
                  key={icon.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.icon}`}
                  className="btn btn-outline-light btn-social mx-1"
                >
                  <Icons icon={icon.icon} />
                </a>
              ))}
            </div>
            <div className="d-none d-xl-block col-xl-4">
              <h5 className="text-uppercase mb-3">About open-portfolio</h5>
              <p className="m-0">
                Project code is open source. Feel free to{" "}
                <a
                  rel="noopener"
                  href="https://github.com/tomasdetloging/open-portafolio"
                  aria-label="My GitHub"
                  style={{ textDecoration: "underline", color: "white" }}
                >
                  clone
                </a>{" "}
                and make your own version.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
