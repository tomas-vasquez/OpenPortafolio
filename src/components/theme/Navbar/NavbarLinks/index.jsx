import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper } from "./styles";

const NavbarLinks = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href="#portfolio" className="lead pr-3">
        Projects
      </AnchorLink>
      <AnchorLink href="#about" className="lead pr-3">
        About
      </AnchorLink>
      <AnchorLink href="#courses" className="lead pr-3">
        Courses
      </AnchorLink>
      <AnchorLink href="#skills" className="lead pr-3">
        Skills
      </AnchorLink>
      <AnchorLink href="#contact" className="lead pr-3">
        Contact
      </AnchorLink>
    </Wrapper>
  );
};

export default NavbarLinks;
