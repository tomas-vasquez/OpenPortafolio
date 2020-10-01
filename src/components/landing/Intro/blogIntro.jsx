import React from "react";

const Banner = ({ title }) => {
  return (
    <>
      <div>
        <div
          id="home"
          className="jumbotron bg-transparent text-light align-content-center m-0"
        >
          <div id="stars"></div>
          <div className="container container-fluid text-center ">
            <h1 className="display-4 mt-3 mb-0">{title}</h1>
            <div className="divider-custom divider-light mb-0">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
