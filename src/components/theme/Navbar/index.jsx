/* eslint-disable */
import React, { useState } from "react";
import { Link } from "gatsby";

import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";

import { Navbar as NavBar } from "reactstrap";

//config
import { defaultTitle } from "../../../data/config";
import NavbarLinks from "./NavbarLinks";

export default function Navbar(props) {
  const [sidebar, toggle] = useState(false);

  return (
    <div className="my-navbar">
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <div
        className="my-navbar-overlay"
        role="buttom"
        onClick={() => toggle(!sidebar)}
      />
      <NavBar
        style={{ position: "absolute", width: "100%" }}
        className="navbar-dark p-3 px-md-5"
      >
        <div className="navbar-wrapper">
          <Link to="/" className="text-white">
            <h1 className="display-4">{defaultTitle}</h1>
          </Link>
        </div>
        <div className="d-none d-lg-flex">
          <NavbarLinks desktop {...props} />
        </div>
      </NavBar>
      <Sidebar sidebar={sidebar} toggle={toggle} {...props} />
    </div>
  );
}
