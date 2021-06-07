import { Link } from 'gatsby';
import React from 'react';

import styled from 'styled-components';
import Icon from './icons/Index';
import { cn } from '../lib/helpers';
import styles from './Header.module.css';
import { Logo } from './Logo';
import NavLink from './Nav-link';

// onHideNav is a function that changes the state of showNav to false
// onShowNav is a function that changes the state of showNav to true
// showNav is a boolean

const DonateLink = styled(Link)`
  background-color: var(--damasq-dark-indigo);
  color: var(--color-light-grey);
  border-radius: 10px;
  margin-left: 8px;
`;

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
        // switches showNav variable between true and false
        onClick={showNav ? onHideNav : onShowNav}
        className={cn(styles.toggleNavButton, showNav && styles.buttonActive)}
      >
        {showNav ? <Icon symbol="cross" /> : <Icon symbol="hamburger" />}
      </button>

      {/* conditionally adds showNav to nav class based whether showNav is true or not */}
      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/what-we-do-2/">What We Do</Link>
          </li>
          <li>
            <Link to="/get-involved/">Get Involved</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          {/* <li>
            <Link to="/blog/">Blog</Link>
          </li> */}
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <li>
            <DonateLink to="/donate/" className="donateNavLink">
              Donate
            </DonateLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
