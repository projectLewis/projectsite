import React, { Component } from "react";
import { Link } from "gatsby";
import {Icon} from "semantic-ui-react"
import style from "./Footer.module.css";


class Footer extends Component {
  render() {
    return (
      <footer className={style.footer}>
        <div className={style.noticeContainer}>
          <h4>
Photo credit
            {' '}
            <Link to="www.instagram.com/lizrishel">
              <Icon style={{color: '#8a3ab9'}} name="instagram" />
              {' '}
lizreshel
            </Link>
          </h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
