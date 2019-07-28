import React from "react";
import Helmet from "react-helmet";
// config
import config from "../../data/SiteConfig";
// components
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
// styles
import 'semantic-ui-css/semantic.min.css';
import style from "./index.module.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={style.viewContainer}>
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
