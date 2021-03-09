import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styles from './Logo.module.css';

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
