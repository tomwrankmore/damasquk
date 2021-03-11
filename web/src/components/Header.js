import { Link } from 'gatsby';
import React from 'react';

import Icon from './icons/Index';
import { cn } from '../lib/helpers';

import styles from './Header.module.css';
import { Logo } from './Logo';
import NavLink from './Nav-link';

// onHideNav is a function that changes the state of showNav to false
// onShowNav is a function that changes the state of showNav to true
// showNav is a boolean

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
      {console.log(showNav)}
      <button
        type="button"
        // switches showNav variable between true and false
        onClick={showNav ? onHideNav : onShowNav}
        className={cn(styles.toggleNavButton, showNav && styles.buttonActive)}
      >
        {showNav ? <Icon symbol="cross" /> : <Icon symbol="hamburger" />}
      </button>

      {/* conditionally adds showNav to nav class based whether showNav is true or no */}
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
