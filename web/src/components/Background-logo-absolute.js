import React, { useRef, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import styles from './Background-logo-absolute.module.css';

export function BackgroundLogoAbs() {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.from(logoRef.current, {
      duration: 2.5,
      autoAlpha: 0,
      x: 30,
      ease: 'none',
    });
  }, []);

  return (
    <StaticImage
      src="../assets/images/logo-mark-truncated.svg"
      alt="Big Icon"
      placeholder="none"
      layout="fullWidth"
      //   width={450}
      className={styles.BackgroundLogoAbs}
    />
  );
}
