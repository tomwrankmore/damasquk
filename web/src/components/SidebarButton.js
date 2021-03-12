import { Link } from 'gatsby';
import React from 'react';
import '../styles/vars.css';
import styled from 'styled-components';

const sideBarButtonStyles = {
  textAlign: 'center',
  padding: '1rem',
  borderRadius: '10px',
  border: '0',
  color: 'var(--color-white)',
  fontSize: '1rem',
  transitionDuration: '0.2s',
  cursor: 'pointer',
  outline: 'none',
  display: 'block',
};

const StyledLink = styled(Link)`
  &.donateBtn {
    background-color: var(--damasq-dark-indigo);
  }

  &.donateBtn:hover {
    background-color: var(--damasq-light-pink);
    color: black;
  }

  &.getInvolvedBtn {
    background-color: var(--damasq-dark-indigo);
  }
  &.getInvolvedBtn:hover {
    background-color: var(--damasq-light-pink);
    color: black;
  }

  margin-bottom: 1rem;
`;

const SideBarButton = ({ children, to, myClassName }) => (
  <StyledLink
    to={to}
    style={sideBarButtonStyles}
    className={myClassName}
    activeClassName="active"
  >
    {children}
  </StyledLink>
);

export default SideBarButton;
