import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavbarLinks = ({ location, desktop }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <>
      {/* eslint-dsable-next-line*/}
      <div
        className="nav-links"
        style={{
          display: !desktop ? "inline-grid" : "flex",
        }}
        desktop={true}
      >
        {location.pathname === rootPath && (
          <>
            {desktop}
            <AnchorLink href="#portfolio" className="lead pr-4">
              Projects
            </AnchorLink>
            <AnchorLink href="#about" className="lead pr-4">
              About
            </AnchorLink>
            <AnchorLink href="#Blog" className="lead pr-4">
              Posts
            </AnchorLink>
            <AnchorLink href="#skills" className="lead pr-4">
              Skills
            </AnchorLink>
            <AnchorLink href="#contact" className="lead pr-4 mb-0">
              Contact
            </AnchorLink>
            {desktop ? <spam className="my-0 pr-4 text-white">|</spam> : <hr />}
          </>
        )}
        {(location.pathname === rootPath) !== "/" && (
          <Link to="/" className="lead pr-4">
            Home
          </Link>
        )}
        <Link to="/blog" className="lead pr-4">
          Blog
        </Link>
        <Link to="/proyects" className="lead pr-4">
          Proyects
        </Link>
      </div>
    </>
  );
};

export default NavbarLinks;
