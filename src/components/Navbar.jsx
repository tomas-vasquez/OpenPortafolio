import React, { useState, useEffect } from "react";
import { FirstName } from "../config";

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 200;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isTop ? "navbar-dark" : "p-2 bg-secondary"
      } `}
      id="mainNav"
    >
      <div className="container ">
        <a className="navbar-brand" href="#page-top">
          {`<${FirstName} />`}
        </a>

        <button
          className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link text-uppercase pt-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link text-uppercase pt-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1 border-0">
              <a
                className="nav-link text-uppercase pt-3 px-0 px-lg-3 rounded js-scroll-trigger "
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
