import React from 'react';
import styled from 'styled-components';
import { responsiveTitle4 } from './typography.module.css';

const StyledSubHeading = styled.h4`
  color: var(--damasq-dark-indigo);
`;

function SubHeading(props) {
  return (
    <StyledSubHeading className={responsiveTitle4}>
      {props.children}
    </StyledSubHeading>
  );
}

export default SubHeading;
