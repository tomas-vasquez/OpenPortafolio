import { Link } from "gatsby";
import React, { useState, useEffect } from "react";

// reactstrap components
import { Collapse, Navbar, Container } from "reactstrap";

//config
import { banner } from "../../data/config";

export default function MyNavbar() {
  const [isTop, setIsTop] = useState(true);
  const [isCollapse, setIsCollapse] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 120;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  const FirstName = banner.FirstName;

  return (
    <Container>
      <Navbar
        className={`fixed-top navbar-dark ${
          isTop ? "p-2 " : "p-2 p-lg-0 bg-secondary"
        }`}
        expand="lg"
      >
        <div className="navbar-wrapper">
          <Link to="/">
            <h1 className="pl-3 h3 text-white">{`<${FirstName} />`}</h1>
          </Link>
        </div>
        <button
          onClick={() => {
            setIsCollapse(!isCollapse);
          }}
          className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
        >
          <i class="fas fa-bars"></i>
        </button>

        <Collapse navbar isOpen={isCollapse}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link text-uppercase pt-3 px-0 px-lg-3 rounded text-white"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link text-uppercase pt-3 px-0 px-lg-3 rounded text-white"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link text-uppercase pt-3 px-0 px-lg-3 rounded text-white"
                href="#courses"
              >
                Courses
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link text-uppercase pt-3 px-0 px-lg-3 rounded text-white"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1 border-0">
              <a
                className="nav-link text-uppercase pt-3 px-0 px-lg-3 rounded text-white"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </Collapse>
      </Navbar>
    </Container>
    // <nav
    //   className={` navbar navbar-expand-lg fixed-top ${
    //     isTop ? "p-2 navbar-dark" : "p-2 p-lg-0 bg-secondary"
    //   } `}
    //   id="mainNav"
    // >
    //   <div className="container ">
    //     <Link className="navbar-brand" to="/">
    //       {`<${FirstName} />`}
    //     </Link>

    //     <button
    //       className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarResponsive"
    //       aria-controls="navbarResponsive"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       Menu
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarResponsive">
    //
    //     </div>
    //   </div>
    // </nav>
  );
}
