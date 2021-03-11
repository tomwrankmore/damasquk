import React from 'react';
import HamburgerIcon from './Hamburger';
import CloseIcon from './Close';

function Icon(props) {
  switch (props.symbol) {
    case 'cross':
      return <CloseIcon />;
    case 'hamburger':
      return <HamburgerIcon />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
