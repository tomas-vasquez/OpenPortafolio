import React from "react";

import Particles from "./Particles";
// import Header from "../theme/Header";
import Navbar from "../theme/Navbar";
import defaultIntro from "../landing/Intro/defaultIntro";
import blogIntro from "../landing/Intro/blogIntro";
import Footer from "../theme/Footer";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let Intro;

  if (location.pathname === rootPath) {
    Intro = defaultIntro;
  } else {
    Intro = blogIntro;
  }

  return (
    <>
      <Particles />
      <Navbar />
      <Intro title={title} />

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
