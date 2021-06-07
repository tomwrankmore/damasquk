import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const LogoDividerStyles = {
  marginBottom: '1.5rem',
  marginTop: '1.5rem',
};

function LogoDivider() {
  return (
    <StaticImage
      src="../assets/images/logo-divider.svg"
      alt="Logo divider graphic"
      placeholder="blurred"
      layout="fullWidth"
      style={LogoDividerStyles}
    />
  );
}

export default LogoDivider;
