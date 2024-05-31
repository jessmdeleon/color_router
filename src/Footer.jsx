import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blue">Blue</Link></li>
        <li><Link to="/red">Red</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
