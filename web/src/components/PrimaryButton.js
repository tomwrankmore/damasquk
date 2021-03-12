import { Link } from 'gatsby';
import React from 'react';

const primaryButtonStyles = {
  width: 'max-content',
  padding: '1rem',
  borderRadius: '10px',
  border: '0',
  backgroundColor: 'var(--damasq-dark-turqoise)',
  color: 'var(--color-white)',
  fontSize: '1rem',
  transitionDuration: '0.2s',
  cursor: 'pointer',
  outline: 'none',
  display: 'block',
};

const PrimaryButton = ({ children, to, myClassName }) => (
  <Link to={to} style={primaryButtonStyles} className={myClassName}>
    {children}
  </Link>
);

export default PrimaryButton;
