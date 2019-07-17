import React, { Component } from "react";
// import {Link} from 'gatsby'
import style from "./UserLinks.module.css";

class UserLinks extends Component {
  getLinkElements() {
    const { config: {userLinks} } = this.props;
    const { labeled } = this.props;
    return userLinks.map((link, idx) => (
      <a key={idx.toString()} href={link.url}>
        <button type='button' key={link.label} href={link.url}>
          {labeled ? link.label : ""}
        </button>
      </a>
    ));
  }

  render() {
    const { config: {userLinks} } = this.props;
    if (!userLinks) {
      return null;
    }
    return <div className={style.userLinks}>{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
