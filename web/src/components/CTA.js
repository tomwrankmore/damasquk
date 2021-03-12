import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import '../styles/vars.css';
import './typography.module.css';

const Wrapper = styled.div`
  background-color: var(--damasq-light-pink);
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  text-align: center;

  p {
    margin: 0 0 3rem 0;
  }

  h1.ctaHeading {
    text-decoration: underline;
    font-size: var(--font-title1-size);
  }

  &.withBackgroundImage {
    background: var(--color-black-transparent);

    h1,
    p {
      color: var(--color-white);
    }
  }

  .cta-para {
    margin-bottom: 2rem;
  }
`;

const CallToAction = ({ myClassName, children }) => (
  <Wrapper className={myClassName}>{children}</Wrapper>
);

export default CallToAction;
