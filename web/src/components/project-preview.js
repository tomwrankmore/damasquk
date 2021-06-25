import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { cn, buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import BlockText from './Block-text';
import styles from './Project-preview.module.css';
import { responsiveTitle3 } from './typography.module.css';

const TextInfo = styled.div`
  padding: 0 1rem 1rem;
  height: 100%;
`;

const Excerpt = styled.div``;

const LeadMediaThumb = styled.div`
  overflow: hidden;
`;

const ProjectLink = styled(Link)`
  img {
    transition: all 200ms ease 0s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

function ProjectPreview({ slug, mainImage, _rawExcerpt, title }) {
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
          <Excerpt className={styles.excerpt}>
            <BlockText blocks={_rawExcerpt} />
          </Excerpt>
        )}
      </TextInfo>
    </ProjectLink>
  );
}

export default ProjectPreview;
