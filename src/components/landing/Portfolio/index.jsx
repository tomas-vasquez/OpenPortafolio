import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortafolioCard from "./PortafolioCard";

//config
import { portfolio } from "../../../data/config";

export default function Portfolio() {
  const data = useStaticQuery(
    graphql`
      query portafolioQuery {
        allGithubData {
          nodes {
            data {
              user {
                repositories {
                  nodes {
                    description
                    forkCount
                    id
                    name
                    primaryLanguage {
                      name
                    }
                    languages {
                      nodes {
                        name
                      }
                    }
                    updatedAt(fromNow: false)
                    readme {
                      text
                    }
                    stargazers {
                      totalCount
                    }
                    openGraphImageUrl
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const repos = data.allGithubData.nodes[0].data.user.repositories.nodes;
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
          <div className="col-md-6 col-lg-4 mb-5">
            {repos.slice(0, 3).map((repo, key) => (
              <PortafolioCard key={key} proyect={repo} />
            ))}
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            {repos.slice(3, 6).map((repo, key) => (
              <PortafolioCard key={key} proyect={repo} />
            ))}
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            {repos.slice(6, 9).map((repo, key) => (
              <PortafolioCard key={key} proyect={repo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
