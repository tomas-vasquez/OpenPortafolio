import React from "react";

const Banner = ({ title }) => {
  return (
    <>
      <div>
        <div
          id="home"
          className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light d-flex align-content-center align-items-center flex-wrap m-0"
        >
          <div id="stars"></div>
          <div className="container container-fluid text-center ">
            <h1 className="display-4 mt-3">{title}</h1>
            <div className="divider-custom divider-light">
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
