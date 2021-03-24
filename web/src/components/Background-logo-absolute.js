import React, { useRef, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styles from './Background-logo-absolute.module.css';

export function BackgroundLogoAbs() {
  return (
    <StaticImage
      src="../assets/images/logo-mark-truncated.svg"
      alt="Big Icon"
      placeholder="none"
      layout="fullWidth"
      width={700}
      className={styles.BackgroundLogoAbs}
    />
  );
}
