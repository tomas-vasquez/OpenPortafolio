import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortafolioCard from "./PortafolioCard";

//config
import { portfolio } from "../../../data/config";

export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query portafolioQuery {
      allFile(filter: { ext: { eq: ".jpg" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const proyects = portfolio.proyects;

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          {proyects.map((proyect) => (
            <PortafolioCard
              proyect={proyect}
              image={
                data.allFile.edges.find((edge) => {
                  return edge.node.base === proyect.imgUrl;
                }).node.childImageSharp
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
