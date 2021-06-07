import React from 'react';
import styled from 'styled-components';
import { responsiveTitle3, responsiveTitle4 } from './typography.module.css';

const StyledSubHeading = styled.h4`
  color: var(--damasq-dark-grey);
  text-align: left;
  margin-bottom: 1rem;
  border-bottom: solid var(--damasq-dark-grey) 1px;
  padding: 1rem 0 0.5rem 1rem;
  /* border-radius: 5px;
  background: var(--damasq-light-grey); */
`;

function SubHeading(props) {
  return (
    <StyledSubHeading className={responsiveTitle3}>
      {props.children}
    </StyledSubHeading>
  );
}

export default SubHeading;
