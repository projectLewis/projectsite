import React from 'react';
import {Link} from 'gatsby';
import { Menu, Segment } from 'semantic-ui-react';
import style from "./Navbar.module.css";
import logo from '../../../static/logos/logo-white-svg.svg';

const handleLocation = local => {
  if (/\/blog\/.+/.test(local)) {
    return true
  } if (local === '/blog-list') {
    return true
  }
    return false
}

const Navbar = ({location}) => (
  <Segment inverted>
    <Menu inverted pointing secondary className={style.navContainer}>
      <Menu.Item active={location === "/" && true} name='home'>
        <Link to="/"><img alt='project lewis logo' className={style.navlogo} src={logo} style={{marginTop: '-15px', marginBottom: '-10px'}} /></Link> 
      </Menu.Item>
      <Menu.Item active={location === "/portfolio" && true} name='portfolio'>
        <Link to="/portfolio">Portfolio</Link>
      </Menu.Item>

      <Menu.Item active={handleLocation(location)} name='blog'>
        <Link to="/blog-list">Blog</Link>
      </Menu.Item>

      <Menu.Item active={location === "/about" && true} name='about'>
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  </Segment>
    )

export default Navbar
