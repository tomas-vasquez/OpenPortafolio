import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Footer from "../components/Footer";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let Header;

  if (location.pathname === rootPath) {
    Header = Banner;
  } else {
    Header = Banner2;
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
