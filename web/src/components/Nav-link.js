import { Link } from 'gatsby';
import React from 'react';
import '../styles/vars.css';

const linkStyles = {
  //   color: 'var(--color-accent)',
};

const activeStyles = {
  fontWeight: 'bold',
  textDecoration: 'underline',
};

const NavLink = ({ children, to }) => (
  <li>
    <Link to={to} style={linkStyles} activeStyle={activeStyles}>
      {children}
    </Link>
  </li>
);

export default NavLink;
