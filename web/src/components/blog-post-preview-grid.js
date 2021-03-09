import { Link } from 'gatsby';
import React from 'react';
import BlogPostPreview from './Blog-post-preview';

import styles from './Blog-post-preview-grid.module.css';

import { responsiveTitle4 } from './typography.module.css';

function BlogPostPreviewGrid(props) {
  console.log(props.browseMoreHref);
  return (
    <div className={styles.root}>
      {props.title && (
        <h1 className={responsiveTitle4}>
          {props.browseMoreHref ? (
            <Link to={props.browseMoreHref}>{props.title}</Link>
          ) : (
            props.title
          )}
        </h1>
      )}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
      {/* if this prop is passed, render this div, super HELPFUL logic here */}
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
};

export default BlogPostPreviewGrid;
