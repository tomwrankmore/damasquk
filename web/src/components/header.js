import { Link } from 'gatsby';
import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import Icon from './icons/Index';
import { cn } from '../lib/helpers';

import styles from './Header.module.css';
import { Logo } from './Logo';
import NavLink from './Nav-link';

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to="/">
          <Logo />
        </Link>
      </h1>

      <button
        type="button"
        className={styles.toggleNavButton}
        onClick={showNav ? onHideNav : onShowNav}
      >
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/what-we-do/">What We Do</NavLink>
          <NavLink to="/get-involved/">Get Involved</NavLink>
          <NavLink to="/projects/">Projects</NavLink>
          <NavLink to="/blog/">Blog</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
