import React from 'react';
import {Link} from 'gatsby';
import { Menu, Segment } from 'semantic-ui-react';
import './Navbar.css';

const handleLocation = local => {
// const regEx = `${/\/blog\/lil-sample-test/}`
  if (/\/blog\/.+/.test(local)) {
    return '/blog'
  } if (local === '/blog-list') {
    return '/blog'
  }if (/\/portfolio\/.+/.test(local)) {
    return '/portfolio'
  }
    return null
}

const Navbar = ({location}) => (
  <Segment inverted>
    <Menu inverted pointing secondary>
      <Menu.Item active={location === "/" && 'home'} name='home'>
        <Link to="/">Home</Link> 
      </Menu.Item>

      <Menu.Item active={location === "/portfolio" && 'home'} name='portfolio'>
        <Link to="portfolio">Portfolio</Link>
      </Menu.Item>

      <Menu.Item active={handleLocation(location)} name='blog'>
        <Link to="/blog-list">Blog</Link>
      </Menu.Item>

      <Menu.Item active={location === "/about" && 'about'} name='about'>
        <Link to="about">About</Link>
      </Menu.Item>
    </Menu>
  </Segment>
    )

export default Navbar