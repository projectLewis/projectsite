import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        {/* change classname */}
        <div className="about-container">
          <Helmet title={`Portfolio | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
