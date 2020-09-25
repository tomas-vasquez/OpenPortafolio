import React from "react";

export default function Courses() {
  return (
    <section className="page-section Courses" id="Courses">
      <div className="container">
        {/*Courses Section Heading*/}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Courses
        </h2>
        {/*Icon Divider*/}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/*Courses Grid Items*/}
        <div className="row">
          {/*Courses Item 1*/}
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="Courses-item mx-auto">
              <div className="Courses-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="Courses-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid mb-0"
                src="img/Courses/portafolio.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
