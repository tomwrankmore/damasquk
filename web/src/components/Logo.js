import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export function Logo() {
  return (
    <StaticImage
      src="../../static/Logo.png"
      alt="Logo"
      placeholder="tracedSVG"
      layout="fixed"
      height={64}
    />
  );
}
