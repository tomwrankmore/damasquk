import { Link } from 'gatsby';
import React from 'react';
import '../styles/vars.css';

const sideBarButtonStyles = {
  width: '100%',
  textAlign: 'center',
  padding: '1rem',
  borderRadius: '10px',
  border: '0',
  backgroundColor: 'var(--damasq-light-pink)',
  color: 'var(--color-white)',
  fontSize: '1rem',
  transitionDuration: '0.2s',
  cursor: 'pointer',
  outline: 'none',
  display: 'block',
};

const SideBarButton = ({ children, to, myClassName }) => (
  <Link to={to} style={sideBarButtonStyles} className={myClassName}>
    {children}
  </Link>
);

export default SideBarButton;
