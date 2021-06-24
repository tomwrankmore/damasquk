import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Project-preview-grid.module.css';
import ProjectPreview from './Project-preview';

gsap.registerPlugin(ScrollTrigger);

const ProjectListItem = styled.li`
  border-radius: 10px;
  border: solid 1px #ccc;
  overflow: hidden;
  box-shadow: rgb(225, 225, 225) 0.2rem 0.2rem 0.5rem;
  background-color: white;
  visibility: hidden;
`;

function ProjectPreviewGrid({ title, browseMoreHref, nodes }) {
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
    <div className={styles.root}>
      {title && (
        <h2 className={styles.headline}>
          {browseMoreHref ? <Link to={browseMoreHref}>{title}</Link> : title}
        </h2>
      )}
      <ul className={styles.grid}>
        {nodes &&
          nodes.map((node) => (
            <ProjectListItem key={node.id} ref={addToRefs}>
              <ProjectPreview {...node} />
            </ProjectListItem>
          ))}
      </ul>
      {browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
};

export default ProjectPreviewGrid;
