import React from "react";
import Icons from "../../common/Icons";
import Image from "gatsby-image";

export default function DeployCard({ project, image }) {
  return (
    <div className="card mb-4 shadow border-1">
      <Image
        fluid={image?.childImageSharp.fluid}
        alt={`${project.title}`}
        className="img-responsive"
        style={{
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
        }}
      />
      <div className="card-body p-2">
        <p className="lead px-1 mb-2">{project.title}</p>
        <a
          href={project.linkRepo}
          target="blank1"
          className="btn btn-secondary mr-2 mb-md-2 mb-xl-0 "
        >
          <Icons icon="github" className="mr-2" />
          source
        </a>
        <a href={project.linkDemo} target="blank2" className="btn btn-info">
          <Icons icon="globe" className="mr-2" />
          see in browser
        </a>
      </div>
    </div>
  );
}
