import React, { Component } from "react";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";


class Footer extends Component {
  render() {
    const { config } = this.props;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <UserLinks config={config} labeled />
        <div className="notice-container" style={{textAlign: 'center'}}>
          <h4>{copyright}</h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
