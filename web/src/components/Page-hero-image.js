import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

const HeroWrapper = styled.div`
  width: 100%;
  height: 500px;
`;

const MainImage = styled.div`
  position: relative;
  background: #eee;
  padding-bottom: calc(9 / 16 * 100%);
  margin-bottom: 2rem;
  /* border-bottom: solid 10px var(--damasq-dark-turqoise); */

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    object-fit: cover;
  }
`;

const bgImgStyles = {
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Hero(props) {
  const { imageData, className } = props;
  return (
    <>
      {imageData && imageData.asset && (
        <MainImage className={className}>
          <img
            src={imageUrlFor(buildImageObj(imageData))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={imageData.asset._id}
          />
        </MainImage>
      )}
    </>
  );
}

export default Hero;
