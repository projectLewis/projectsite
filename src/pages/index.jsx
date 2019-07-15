import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
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
          Home Page
        </div>
      </Layout>
    );
  }
}

export default Index;