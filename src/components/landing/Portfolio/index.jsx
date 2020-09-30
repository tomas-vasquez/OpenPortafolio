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
  const portfolioHeading = portfolio.portfolioHeading;

  return (
    <section className="page-section bg-white portfolio" id="portfolio">
      <div className="container">
        <h2 className="display-4 mb-0 text-center text-uppercase text-secondary mb-0">
          {portfolioHeading}
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          {proyects.map((proyect, key) => (
            <PortafolioCard
              key={key}
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
