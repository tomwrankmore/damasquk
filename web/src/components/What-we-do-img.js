import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

function WhatWeDoImg() {
  return (
    <StaticImage
      src="../assets/images/WhatWeDo3.png"
      alt="What we do"
      placeholder="blurred"
      layout="fullWidth"
      // style={WhatWeDoImgStyles}
      objectPosition="0 0"
      objectFit="contain"
      className="whatWeDoImgWrapper"
      imgClassName="whatWeDoImg"
    />
  );
}

export default WhatWeDoImg;
