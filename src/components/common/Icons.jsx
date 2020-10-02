import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";

const getIcon = (icon) => {
  switch (icon) {
    case "star":
      return faStar;

    default:
      return faTimes;
  }
};

export default (props) => {
  return <FontAwesomeIcon {...props} icon={getIcon(props.icon)} />;
};
