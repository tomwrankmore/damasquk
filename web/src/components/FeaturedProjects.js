import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import '../styles/media-queries.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { responsiveTitle4 } from './typography.module.css';
import FeaturedProjectPreview from './FeaturedProjectPreview';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjectWrapper = styled.div``;

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

const FeaturedProjectGrid = styled.ul`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 1fr;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FeaturedProjectListItem = styled.li`
  border-radius: 10px;
  border: solid 1px #ccc;
  overflow: hidden;
  box-shadow: rgb(225, 225, 225) 0.2rem 0.2rem 0.5rem;
  background-color: white;
  visibility: hidden;
`;

function FeaturedProject(props) {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const projectItems = revealRefs.current;

  useEffect(() => {
    gsap.set(projectItems, { y: 100 });
    ScrollTrigger.batch(projectItems, {
      start: 'top 85%',
      onEnter: (batch) =>
        gsap.to(batch, {
          ease: 'back',
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          // overwrite: true,
        }),
    });
  }, []);

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
      <FeaturedProjectGrid>
        {props.nodes &&
          props.nodes.map((node) => (
            <FeaturedProjectListItem key={node.id} ref={addToRefs}>
              <FeaturedProjectPreview {...node} />{' '}
            </FeaturedProjectListItem>
          ))}
      </FeaturedProjectGrid>
    </FeaturedProjectWrapper>
  );
}
FeaturedProject.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
};
export default FeaturedProject;
