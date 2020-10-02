import React from "react";

import Languajes from "./languajes";

import { faCodeBranch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PortafolioCard({ proyect }) {
  const image = `${proyect.openGraphImageUrl}`;
  return (
    <>
      <div className="mb-4">
        {!image.search("https://avatars0") ? null : (
          <a className="m-0" href={proyect.url}>
            <img
              className="m-0"
              src={image}
              alt={proyect.name}
              style={{
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
            />
          </a>
        )}
        <div
          className="card"
          style={
            image.search("https://avatars0")
              ? {
                  borderTop: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }
              : null
          }
        >
          <div className="card-body p-2">
            <a className="lead px-1 m-0" href={proyect.url}>
              {proyect.name}
            </a>
            <p className="p-1 m-0">{proyect.description}</p>
            <small className="text-muted mr-2">
              <FontAwesomeIcon icon={faStar} /> {proyect.stargazers.totalCount}
            </small>
            <small className="text-muted mr-2">
              <FontAwesomeIcon icon={faCodeBranch} /> {proyect.forkCount}
            </small>
            <Languajes languages={proyect.languages} />
          </div>
        </div>
      </div>
    </>
  );
}
