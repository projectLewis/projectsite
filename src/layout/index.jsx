import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import 'semantic-ui-css/semantic.min.css'
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
        <Navbar location={location.pathname} />
        {children}
        <Footer config={config} />
      </div>
    );
  }
}
