import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        {/* change classname */}
        <div className="portfolio-container">
          <Helmet title={`Portfolio | ${config.siteTitle}`} />
          Replace me with a portfolio page
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
