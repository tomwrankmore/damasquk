import { Link } from 'gatsby';
import React from 'react';
import '../styles/vars.css';
import styled from 'styled-components';

const StyledNavLink = styled(Link)`
  &.donateNavLink {
    background-color: var(--damasq-dark-indigo);
    color: var(--color-light-grey);
    border-radius: 10px;
    margin-left: 8px;
  }
`;

const linkStyles = {
  //   color: 'var(--color-accent)',
};

const activeStyles = {
  fontWeight: 'bold',
};

const NavLink = ({ children, to, className }) => (
  <li>
    <StyledNavLink
      to={to}
      style={linkStyles}
      activeStyle={activeStyles}
      className={className}
    >
      {children}
    </StyledNavLink>
  </li>
);

export default NavLink;
