import React from "react";

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getColor = function (language) {
  switch (language) {
    case "CSS":
      return "#563d7c";

    case "SCSS":
      return "#c76494";

    case "HTML":
      return "#dd4b25";

    case "JavaScript":
      return "#f1e05a";

    case "PHP":
      return "#4f5d95";

    default:
      return "#586069";
  }
};

export default function languajes({ languages }) {
  return (
    <>
      {languages.nodes.map((lang, key) => (
        <small key={key} className="mr-2">
          <small style={{ color: getColor(lang.name) }}>
            <FontAwesomeIcon icon={faCircle} />{" "}
          </small>
          {lang.name}
        </small>
      ))}
    </>
  );
}
