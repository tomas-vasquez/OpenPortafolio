import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortafolioCard from "./PortafolioCard";

//config
import { portfolio } from "../../../data/config";
import Separator from "../../common/Separator";

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
        <Separator title={portfolioHeading} dark />
        <div className="row py-4">
          <div className="col-md-6 col-lg-4">
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
        <div className="d-flex">
          <a
            href={"hola"}
            className="btn btn-outline-secondary btn-lg mx-auto"
            role="link"
            aria-label="view all posts"
          >
            View all proyects
          </a>
        </div>
      </div>
    </section>
  );
}
