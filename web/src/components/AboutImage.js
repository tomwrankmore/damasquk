import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const AboutStaticImageStyle = {
  height: '100%',
  maxHeight: '350px',
  marginBottom: '4rem',
};

function AboutStaticImage() {
  return (
    <StaticImage
      src="../assets/images/joel-muniz-A4Ax1ApccfA-unsplash.jpg"
      alt="Replace alt text"
      placeholder="blurred"
      layout="fullWidth"
      style={AboutStaticImageStyle}
      objectPosition="0 0"
      className="wrappingDivClassNameOption"
      imgClassName="imgClassNameAsWell"
    />
  );
}

export default AboutStaticImage;
