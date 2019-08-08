import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';
import { Menu, Segment } from 'semantic-ui-react';
import style from "./Navbar.module.css";
import logo from '../../../static/logos/logo-white-svg.svg';

const Navbar = () => {
  const [blogActive, setBlogActive] = useState(false)
  useEffect(() => {
    if (document.querySelector('.onBlogPage')) {
      return setBlogActive(true)
    }
    return setBlogActive(false)
  }, []);
  return (
    <Segment inverted style={{boxShadow: "-5px 1px 9px 1px green", padding: "8px"}}>
      <Menu inverted pointing secondary className={style.navContainer}>
        <Menu.Item name='home'>
          <Link to="/"><img alt='project lewis logo' className={style.navlogo} src={logo} style={{marginTop: '-15px', marginBottom: '-10px'}} /></Link> 
        </Menu.Item>
        <Menu.Item style={{alignSelf: 'center', marginTop: '-15px', marginBottom: '-10px'}} name='portfolio'>
          <Link activeClassName="active item" to="/portfolio">Portfolio</Link>
        </Menu.Item>

        <Menu.Item style={{alignSelf: 'center', marginTop: '-15px', marginBottom: '-10px'}} active={blogActive} name='blog'>
          <Link activeClassName="active item" to="/blog-list">Blog</Link>
        </Menu.Item>
      </Menu>
    </Segment>
    )
}

export default Navbar
