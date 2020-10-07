import React from "react";
import Icons from "../../common/Icons";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { Collapse } from "reactstrap";
import { wathsappWidged } from "../../../data/config";

export default function Chat({ isOpen, onClick }) {
  const data = useStaticQuery(graphql`
    query chatQuery {
      avatar2: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const avatar2 = data?.avatar2?.childImageSharp?.fixed;

  return (
    <Collapse isOpen={isOpen}>
      <div id="chat-box__wraper" className={`d-block`}>
        <div className="chat-box-header">
          Wathsapp
          <span className="chat-box-toggle" onClick={onClick}>
            <Icons icon="" />
          </span>
        </div>
        <div className="chat-box-overlay"></div>
        <div className="chat-logs">
          <div id="cm-msg-0" className="chat-msg bot">
            <span
              className="msg-avatar"
              style={{ cursor: "pointer" }}
              //   onClick={() => {
              //     setchat(false);
              //   }}
            >
              <Image
                fixed={avatar2}
                className="chat-box-overlay_robot rounded-circle"
              />
            </span>
            <div className="cm-msg-text">{wathsappWidged.message}</div>
          </div>

          <div className="spin-container">
            <div className="spiner">
              <div aria-hidden="true"></div>
              <div aria-hidden="true"></div>
              <div aria-hidden="true"></div>
            </div>
          </div>
        </div>
        {/* chat-log */}
      </div>
    </Collapse>
  );
}
