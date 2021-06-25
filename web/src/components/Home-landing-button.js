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
  visibility: 'hidden',
};

// const PrimaryButton = ({ children, to, myClassName }) => (
//   <Link to={to} style={primaryButtonStyles} className={myClassName}>
//     {children}
//   </Link>
// );

const HomeLandingButton = React.forwardRef((props, ref) => (
  <Link
    ref={ref}
    to={props.to}
    style={primaryButtonStyles}
    className={props.myClassName}
  >
    {props.children}
  </Link>
));

export default HomeLandingButton;
