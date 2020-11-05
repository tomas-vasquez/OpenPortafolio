import React from "react";

import Languajes from "./languajes";

import { faCodeBranch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PortafolioCard({ project }) {
  const image = `${project.openGraphImageUrl}`;
  return (
    <div
      className="card mb-3 shadow"
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
      {!image.search("https://avatars0") ? null : (
        <a
          style={{
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
          className="m-0"
          href={project.url}
        >
          <img
            className="m-0"
            src={image}
            alt={project.name}
            style={{
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
            }}
          />
        </a>
      )}
      <div className="card-body p-2">
        <a className="lead px-1 m-0" href={project.url}>
          {project.name}
        </a>
        <p className="p-1 m-0">{project.description}</p>
        <small className="text-muted mr-2">
          <FontAwesomeIcon icon={faStar} /> {project.stargazers.totalCount}
        </small>
        <small className="text-muted mr-2">
          <FontAwesomeIcon icon={faCodeBranch} /> {project.forkCount}
        </small>
        <Languajes languages={project.languages} />
      </div>
    </div>
  );
}
