import React from 'react';
import {Link} from 'gatsby'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/blog-list">Blog</Link>
      <Link to="about">About</Link>
      <Link to="portfolio">Portolio</Link>
    </nav>
  )
}

export default Navbar
