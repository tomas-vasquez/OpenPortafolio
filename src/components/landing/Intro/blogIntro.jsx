import React from "react";
import Separator from "../../common/Separator";

const Banner = ({ title }) => {
  return (
    <>
      <div>
        <div className="jumbotron bg-transparent text-light align-content-center pb-1">
          <div className="container text-center ">
            <Separator title={title} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
