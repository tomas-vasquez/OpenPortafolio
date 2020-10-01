import React, { useState } from "react";

import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";
import { Wrapper, Overlay } from "./styles";

export default function Header() {
  const [sidebar, toggle] = useState(false);

  return (
    <Wrapper>
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
}
