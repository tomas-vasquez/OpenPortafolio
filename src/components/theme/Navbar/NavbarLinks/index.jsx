import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper } from "./styles";

const NavbarLinks = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      {document.location.pathname === "/" && (
        <>
          {desktop}
          <AnchorLink href="#portfolio" className="lead pr-3">
            Projects
          </AnchorLink>
          <AnchorLink href="#about" className="lead pr-3">
            About
          </AnchorLink>
          <AnchorLink href="#Blog" className="lead pr-3">
            Posts
          </AnchorLink>
          <AnchorLink href="#skills" className="lead pr-3">
            Skills
          </AnchorLink>
          <AnchorLink href="#contact" className="lead pr-3 mb-0">
            Contact
          </AnchorLink>
          {desktop ? <p className="my-0 pr-3 mr-3 text-white">|</p> : <hr />}
        </>
      )}
      {document.location.pathname !== "/" && (
        <Link to="/" className="lead pr-3">
          Home
        </Link>
      )}
      <Link to="/blog" className="lead pr-3">
        Blog
      </Link>
      <Link to="/proyects" className="lead pr-3">
        Proyects
      </Link>
    </Wrapper>
  );
};

export default NavbarLinks;
