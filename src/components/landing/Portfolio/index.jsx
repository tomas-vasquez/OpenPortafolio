import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortafolioCard from "./PortafolioCard";

// //config
import { portfolio } from "../../../data/config";
import Icons from "../../common/Icons";
import Separator from "../../common/Separator";
import DeployCard from "./DeployCard";

export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query portafolioQuery {
      allFile(filter: { extension: { eq: "jpg" } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
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
  `);

  const repos = data.allGithubData.nodes[0].data.user.repositories.nodes;
  const imageDeploys = data.allFile.nodes;

  console.log(imageDeploys);
  const portfolioHeading = portfolio.portfolioHeading;
  const portfolioHeading2 = portfolio.portfolioHeading2;
  const linkGitHub = portfolio.linkGitHub;
  const portfolioButtomText2 = portfolio.portfolioButtomText2;
  const deploys = portfolio.deploys;

  return (
    <section className="page-section bg-white portfolio" id="portfolio">
      <div className="container">
        <Separator title={portfolioHeading} dark />

        <div class="card-columns py-4">
          {deploys.map((repo, key) => (
            <DeployCard
              key={key}
              proyect={repo}
              image={imageDeploys.find((image) => image.name === repo.image)}
            />
          ))}
        </div>
        <div className="d-flex mb-3">
          
        </div>

        <Separator title={portfolioHeading2} dark />
        <div class="card-columns py-4">
          {repos.map((repo, key) => (
            <PortafolioCard key={key} proyect={repo} />
          ))}
        </div>

        <div className="d-flex">
          <a
            href={linkGitHub}
            className="btn btn-outline-secondary btn-lg mx-auto"
            role="link"
            aria-label="view all posts"
          >
            <Icons icon="github" className="mr-2" />
            {portfolioButtomText2}
          </a>
        </div>
      </div>
    </section>
  );
}
