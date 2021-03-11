import React from 'react';
import styled from 'styled-components';
import '../styles/media-queries.css';
import '../styles/vars.css';

const FullScreen = styled.div`
  width: 100%;
  background-color: var(--color-light-grey);
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 1440px;
  min-width: 256px;

  padding: 2em;
  margin: 0 auto;
  background-color: var(--color-light-grey);
  /* min-height: 75vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /** Media queries not getting picked up */
  @media (max-width: 449px) {
    padding: 2em;
  }
`;

const ContainerLarge = ({ children }) => (
  <>
    <FullScreen>
      <Wrapper>{children}</Wrapper>
    </FullScreen>
  </>
);

export default ContainerLarge;
