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

const ProjectWrapperGrid = styled.div``;

const TextWrapper = styled.div`
  border: solid 1px var(--color-light-grey);
  padding: 1rem 1.5rem;
  margin-right: 0;
  border-radius: 0 0 1rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;

  .moreInfoBtn {
    align-self: flex-end;
  }
`;

function FeaturedProjectPreview(props) {
  console.log('FeaturedProjectPreview', props);
  return (
    <ProjectWrapperGrid>
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
    </ProjectWrapperGrid>
  );
}

export default FeaturedProjectPreview;
