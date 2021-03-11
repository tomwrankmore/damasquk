import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const WhatWeDoImgStyles = {
  width: '100%',
  maxWidth: '500px',
};

function WhatWeDoImg() {
  return (
    <StaticImage
      src="../assets/images/WhatWeDo2.png"
      alt="What we do"
      placeholder="blurred"
      layout="fullWidth"
      style={WhatWeDoImgStyles}
      objectPosition="0 0"
      objectFit="contain"
      className="wrappingDivClassNameOption"
      imgClassName="imgClassNameAsWell"
    />
  );
}

export default WhatWeDoImg;
