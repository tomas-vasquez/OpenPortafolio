import { Link } from "gatsby";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import {
  navbar,
  portfolio,
  about,
  blog,
  skills,
  contactMe,
} from "../../../data/config";
import Icons from "../../common/Icons";

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
        // desktop={true}
      >
        {location.pathname === rootPath && (
          <>
            {desktop}
            <AnchorLink href="#portfolio" className="lead pr-4">
              {portfolio.portfolioHeading}
            </AnchorLink>
            <AnchorLink href="#about" className="lead pr-4">
              {about.aboutHeading}
            </AnchorLink>
            <AnchorLink href="#Blog" className="lead pr-4">
              {blog.blogHeading}
            </AnchorLink>
            <AnchorLink href="#skills" className="lead pr-4">
              {skills.skillsHeading}
            </AnchorLink>
            <AnchorLink href="#contact" className="lead pr-4 mb-0">
              {contactMe.contactMeTitle}
            </AnchorLink>
            {desktop ? <span className="my-0 pr-4 text-white">|</span> : <hr />}
          </>
        )}
        {navbar.links.map((link) => (
          <Link to={link.href} className="lead pr-4">
            {link.icon && <Icons icon={link.icon} className="mr-2" />}
            {link.title}
          </Link>
        ))}
        <Link to="" className="lead pr-4"></Link>
      </div>
    </>
  );
};

export default NavbarLinks;
