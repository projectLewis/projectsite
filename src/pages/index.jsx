import React from "react";
import Helmet from "react-helmet";

import Layout from "../layout";
import About from "../components/About/About";

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        {/* change classname */}
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <About />
          {/* <h1>Project Lewis</h1>
          <h3>The Home of Seth Lewis</h3>
          <p>Seth Lewis is a web developer with a focus on backend technologies and dedication to continous learning.</p> */}
        </div>
      </Layout>
    );
  }
}

export default Index;