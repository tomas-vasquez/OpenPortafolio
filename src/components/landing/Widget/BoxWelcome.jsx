import React from "react";
import Icons from "../../common/Icons";
import Image from "gatsby-image";
import { Collapse } from "reactstrap";
import { graphql, useStaticQuery } from "gatsby";
import { wathsappWidged, author } from "../../../data/config";

export default function BoxWelcome({ isOpen, onClick }) {
  const data = useStaticQuery(graphql`
    query widgetQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const avatar = data?.avatar?.childImageSharp?.fixed;

  return (
    <Collapse isOpen={isOpen}>
      <div className={`chat-box-welcome__header d-block`}>
        <div className="chat-box__header-text">
          <span className="chat-box-welcome__company-name">Enviar mensage</span>
          <span className="chat-box-toggle" onClick={onClick}>
            <Icons icon="" />
          </span>
        </div>

        <div id="chat-box-welcome__ava">
          <Image
            fixed={avatar}
            className="mx-auto chat-box-welcome_robot rounded-circle"
          />
        </div>

        <div className="chat-box-welcome__welcome-text">
          <p className="mb-0">{author.name}</p>
          <p>{`+${wathsappWidged.codeArea} ${wathsappWidged.phone}`}</p>
        </div>
        <div id="chat"></div>
      </div>
    </Collapse>
  );
}
