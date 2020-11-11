import React, { useEffect, useState } from "react";
import { Fade } from "reactstrap";

import Icons from "../../common/Icons";
import ReactTooltip from "react-tooltip";

import { wathsappWidged } from "../../../data/config";

export default function Index() {
  const [fade, setfade] = useState(false);
  const [close, setclose] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollY = e.currentTarget.scrollY;
      const main = document.getElementsByTagName("main")[0];
      const mainHeight = main.scrollHeight;

      if (scrollY && mainHeight && scrollY < mainHeight && scrollY > 100) {
        setfade(true);
      } else {
        setfade(false);
      }
    });
  });

  return (
    <Fade
      className={`${close ? "d-none" : "d-block"}`}
      in={fade}
      onExited={() => {
        setclose(true);
      }}
      onEnter={() => {
        setclose(false);
      }}
    >
      <div className="fab-container">
        <ReactTooltip effect="solid" place="left" />
        {wathsappWidged.buttoms.map((buttom, key) => (
          <a
            key={key}
            href={buttom.href}
            target="_black"
            className="fab-item"
            data-tip={buttom.tooltip}
            style={buttom.style}
          >
            <Icons icon={buttom.icon} className={buttom.className} />
          </a>
        ))}
      </div>
    </Fade>
  );
}
