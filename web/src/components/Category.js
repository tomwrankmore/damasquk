import React from 'react';
import { Link } from 'gatsby';
import { buildImageObj, getBlogUrl, cn } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import Container from './Container';
import styles from './Blog-post-preview.module.css';
import { responsiveTitle1, responsiveTitle3 } from './typography.module.css';

function Category(items) {
  const {
    _rawBody,
    authors,
    categories,
    title,
    mainImage,
    publishedAt,
  } = items;

  const posts = Object.values(items);
  const categoryName = posts[0].node.categories[0].title;

  return (
    <article className={styles.root}>
      <Container>
        <h1 className={responsiveTitle1}>Posts relating to: {categoryName}</h1>
        <div className={styles.blogByCategoryGrid}>
          {posts.map((post) => (
            <Link
              to={getBlogUrl(post.node.publishedAt, post.node.slug.current)}
            >
              <div className={styles.leadMediaThumb}>
                {post.node.mainImage && post.node.mainImage.asset && (
                  <img
                    src={imageUrlFor(buildImageObj(post.node.mainImage))
                      .width(600)
                      .height(Math.floor((9 / 16) * 600))
                      .url()}
                    alt={post.node.mainImage.alt}
                  />
                )}
              </div>
              <h3 className={cn(responsiveTitle3, styles.title)}>
                {post.node.title}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </article>
  );
}

export default Category;
