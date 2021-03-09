import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { cn, buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import BlockText from './Block-text';
import '../styles/media-queries.css';

import styles from './FeaturedProjectPreview.module.css';
import PrimaryButton from './PrimaryButton';
import { responsiveTitle3 } from './typography.module.css';

const ProjectWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const TextWrapper = styled.div`
  border: solid 1px var(--color-light-grey);
  padding: 1rem 1.5rem;
  margin-right: 0;

  border-radius: 0;
  position: relative;
  display: block;
  grid-row: 2;

  @media (min-width: 1024px) {
    border-radius: 1rem 0 0 1rem;
    grid-row: 1;
  }

  a.moreInfoBtn {
    float: right;
    @media (min-width: 1024px) {
      float: none;
    }
  }
`;

function FeaturedProjectPreview(props) {
  console.log('FeaturedProjectPreview', props);
  return (
    <ProjectWrapperGrid>
      <TextWrapper>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <BlockText blocks={props._rawExcerpt} />
          </div>
        )}

        <PrimaryButton
          to={`/project/${props.slug.current}`}
          myClassName="moreInfoBtn"
        >
          More info
        </PrimaryButton>
      </TextWrapper>

      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
    </ProjectWrapperGrid>
  );
}

export default FeaturedProjectPreview;
