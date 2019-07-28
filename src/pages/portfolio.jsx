import React, { Component } from "react";
import Helmet from "react-helmet";
import PortfolioWrapper from "../components/Portfolio/PortfolioWrapper";
import Layout from "../layout";
import config from "../../data/SiteConfig";


class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Portfolio | ${config.siteTitle}`} />
        <PortfolioWrapper />
      </Layout>
    );
  }
}

export default AboutPage;
