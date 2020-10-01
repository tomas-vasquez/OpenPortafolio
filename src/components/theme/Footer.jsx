import React from "react";

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
            <div className="col-12 col-md-6 col-xl-4">
              <h5 className="text-uppercase mb-4">Location</h5>
              <p className="lead mb-0">{location}</p>
            </div>
            <div className="col-12 col-md-6 col-xl-4 mt-5 mt-md-0">
              <h5 className="text-uppercase mb-4">Around the Web</h5>
              {icons.map((icon) => (
                <a
                  key={icon.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                  className="btn btn-outline-light btn-social mx-1"
                >
                  <i className={`${icon.image}`} />
                </a>
              ))}
            </div>
            <div className="d-none d-xl-block col-xl-4">
              <h5 className="text-uppercase mb-4">About Laveggod Portfolio</h5>
              <p className="lead mb-0">
                Project code is open source. Feel free to{" "}
                <a href="https://github/tomasdetloging/lavegood-portfolio">
                  clone
                </a>{" "}
                and make your own version.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="pb-4 text-center text-white">
        <div className="container">
          made with <i className="fas fa-heart"></i> by{" "}
          <a
            className="badge badge-dark"
            rel="noopener"
            href="https://github.com/tomasdetloging"
            aria-label="My GitHub"
          >
            Tomi
          </a>{" "}
          using <i className="fab fa-react"></i>
          <p className="mb-0">
            <small className="text-muted"> </small>
          </p>
        </div>
      </div>
    </>
  );
}
