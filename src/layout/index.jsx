import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div id='viewContainer'>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Navbar />
        {children}
        <Footer config={config} />
      </div>
    );
  }
}
