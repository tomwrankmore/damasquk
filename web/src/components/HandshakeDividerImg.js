import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const HandshakeStyles = {
  marginBottom: '3rem',
};

function HandshakeDivider() {
  return (
    <StaticImage
      src="../assets/images/hand-shake-divider.svg"
      alt="Handshake divider graphic"
      placeholder="blurred"
      layout="fullWidth"
      //   width={450}
      // className={styles.HandshakeDivider}
      style={HandshakeStyles}
    />
  );
}

export default HandshakeDivider;
