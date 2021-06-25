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

const ProjectItemWrapper = styled.div``;

const ProjectListItem = styled.li`
  border-radius: 10px;
  border: solid 1px #ccc;
  overflow: hidden;
  box-shadow: rgb(225, 225, 225) 0.2rem 0.2rem 0.5rem;
  background-color: white;
  visibility: hidden;
`;

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

const TextInfo = styled.div`
  padding: 0 1rem 1rem;
  height: 100%;
`;

const LeadMediaThumb = styled.div`
  overflow: hidden;
`;

const ProjectLink = styled(Link)`
  height: 100%;
  img {
    transition: all 200ms ease 0s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

function FeaturedProjectPreview({ slug, mainImage, _rawExcerpt, title }) {
  return (
    <ProjectLink className={styles.root} to={`/project/${slug.current}`}>
      <LeadMediaThumb className={styles.leadMediaThumb}>
        {mainImage && mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={mainImage.alt}
          />
        )}
      </LeadMediaThumb>
      <TextInfo>
        <h3 className={cn(responsiveTitle3, styles.title)}>{title}</h3>
        {_rawExcerpt && (
          <div className={styles.excerpt}>
            <BlockText blocks={_rawExcerpt} />
          </div>
        )}

        {/* <PrimaryButton
          to={`/project/${props.slug.current}`}
          myClassName="moreInfoBtn"
        >
          More info
        </PrimaryButton> */}
      </TextInfo>
    </ProjectLink>
  );
}

export default FeaturedProjectPreview;
