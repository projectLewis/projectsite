import React, { Component } from "react";
import UserLinks from "../UserLinks/UserLinks";
import style from "./Footer.module.css";


class Footer extends Component {
  render() {
    const { config } = this.props;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={style.footer}>
        {/* <UserLinks config={config} labeled /> */}
        <div className={style.noticeContainer}>
          <h4>{copyright}</h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
