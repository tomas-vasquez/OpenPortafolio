import React from "react";

import { aboutHeading, aboutDescription, picUrl } from "../config";

export default function AboutMe() {
  return (
    <section
      className="page-section bg-primary text-white mb-0"
      id="about"
      style={{ backgroundColor: "#08b391" }}
    >
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
              alt="profilepicture"
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
