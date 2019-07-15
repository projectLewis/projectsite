import React from 'react';
import {Link} from 'gatsby';
import { Menu, Segment } from 'semantic-ui-react';
import './Navbar.css';

const Navbar = ({location}) => (
  <Segment inverted>
    <Menu inverted pointing secondary>
      <Menu.Item active={location === "/" && 'home'} name='home'>
        <Link to="/">Home</Link> 
      </Menu.Item>

      <Menu.Item active={location === "/portfolio" && 'portfolio'} name='portfolio'>
        <Link to="portfolio">Portfolio</Link>
      </Menu.Item>

      <Menu.Item active={location === "/blog-list" && 'blog'} name='blog'>
        <Link to="/blog-list">Blog</Link>
      </Menu.Item>

      <Menu.Item active={location === "/about" && 'about'} name='about'>
        <Link to="about">About</Link>
      </Menu.Item>
    </Menu>
  </Segment>
    )

export default Navbar