import React from "react";
import Navbar from "../theme/Navbar";
import Intro from "../landing/Intro/defaultIntro";
import Intro2 from "../landing/Intro/blogIntro";
import Footer from "../theme/Footer";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let Header;

  if (location.pathname === rootPath) {
    Header = Intro;
  } else {
    Header = Intro2;
  }

  return (
    <>
      <Navbar />
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
