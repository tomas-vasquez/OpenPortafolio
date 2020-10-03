import React from "react";
import { Link } from "gatsby";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location} title={"Ooops!"}>
      <SEO title="Ooops" />
      <section className="bg-white py-5">
        <div className="container">
          <div className="row d-flex">
            <div className="col-auto ml-auto">
              <div class="notfound-404">
                <h1>:(</h1>
              </div>
            </div>
            <div className="col-auto mr-auto">
              <div class="bg-white">
                <h2 className="display-4">404 - Page not found</h2>
                <p className="lead">
                  The page you are looking for might have been removed
                  <br />
                  had its name changed or is temporarily unavailable.
                </p>
                <Link className="lead" to="/">
                  home page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="notfound "></div>
    </Layout>
  );
};

export default NotFoundPage;
