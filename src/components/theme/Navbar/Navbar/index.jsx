import React from "react";
import NavbarLinks from "../NavbarLinks";
import { Link } from "gatsby";

// reactstrap components
import { Navbar } from "reactstrap";

//config
import { banner } from "../../../../data/config";

export default function MyNavbar() {
  const FirstName = banner.FirstName;

  return (
    <Navbar
      style={{ position: "absolute", width: "100%" }}
      className="navbar-dark p-3 px-md-5"
    >
      <div className="navbar-wrapper">
        <Link to="/">
          <h1 className="h4 text-white">{`<${FirstName} />`}</h1>
        </Link>
      </div>
      <NavbarLinks desktop />
    </Navbar>
  );
}
