import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import '../styles/media-queries.css';
import { responsiveTitle4 } from './typography.module.css';
import FeaturedProjectPreview from './FeaturedProjectPreview';

const FeaturedProjectWrapper = styled.div`
  justify-content: center;
  height: 75vh;
  display: flex;
  flex-direction: column;

  .headline {
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
    margin: 2rem 0;

    @nest & a {
      color: inherit;
      text-decoration: none;
    }
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

  @media (min-width: 960px) {
    border-radius: 1rem 0 0 1rem;
    grid-row: 1;
  }

  a.moreInfoBtn {
    float: right;
    @media (min-width: 960px) {
      float: none;
    }
  }
`;

function FeaturedProject(props) {
  console.log(props);
  return (
    <FeaturedProjectWrapper>
      {' '}
      {props.title && (
        <h3 className={responsiveTitle4}>
          {' '}
          {props.browseMoreHref ? (
            <Link to={props.browseMoreHref} className="headline">
              {props.title}
            </Link>
          ) : (
            props.title
          )}{' '}
        </h3>
      )}{' '}
      {props.nodes &&
        props.nodes.map((project) => (
          <section key={project.id}>
            {' '}
            <FeaturedProjectPreview {...project} />{' '}
          </section>
        ))}
    </FeaturedProjectWrapper>
  );
}
FeaturedProject.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
};
export default FeaturedProject;
