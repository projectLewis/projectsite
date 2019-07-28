import React, { Component } from "react";
import Helmet from "react-helmet";
import Portfolio from "../components/Portfolio/Portfolio";
import Layout from "../layout";
import config from "../../data/SiteConfig";


class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Helmet title={`Portfolio | ${config.siteTitle}`} />
          <Portfolio />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
