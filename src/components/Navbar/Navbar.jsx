import React from 'react';
import {Link} from 'gatsby';
import { Menu, Segment } from 'semantic-ui-react';
import './Navbar.css';
import logo from '../../../static/logos/logo-white-svg.svg';

const handleLocation = local => {
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
    <Menu inverted pointing secondary className='navContainer'>
      <Menu.Item active={location === "/" && 'home'} name='home'>
        <Link to="/"><img alt='project lewis logo' className='navlogo' src={logo} style={{marginTop: '-15px', marginBottom: '-10px'}} /></Link> 
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
