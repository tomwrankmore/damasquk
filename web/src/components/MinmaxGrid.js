import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 4rem;
  @media (max-width: 960px) {
    gap: 1.5rem;
  }
  margin-bottom: 3rem;
`;

function MinmaxGrid(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

export default MinmaxGrid;
