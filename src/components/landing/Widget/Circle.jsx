import React from "react";
import Icons from "../../common/Icons";
import ReactTooltip from "react-tooltip";
import { wathsappWidged } from "../../../data/config";

export default function Circle({ onClick }) {
  return (
    <>
      <ReactTooltip effect="solid" place="left" />
      <div
        id="chat-circle"
        data-tip={wathsappWidged.tooltip}
        onClick={onClick}
        className="btn btn-raised"
      >
        {/* <div id="chat-overlay"/> */}
        <Icons icon="wathsapp" className="fa-2x" />
      </div>
    </>
  );
}
