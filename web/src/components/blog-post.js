import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import { Link } from 'gatsby';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import BlockContent from './block-content/Index';
import Container from './Container';
import RoleList from './Role-list';

import styles from './Blog-post.module.css';

function BlogPost(props) {
  const {
    _rawBody,
    authors,
    categories,
    title,
    mainImage,
    publishedAt,
  } = props;

  // const slug = authors[0].person.slug.current;

  // let slug;

  // if (authors.length) {
  //   slug = authors[0].person.slug.current;
  // } else {
  //   slug = '';
  // }

  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {authors && <RoleList items={authors} title="Authors" />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <Link
                      className={styles.authorLink}
                      to={`/category/${category.slug.current}`}
                      key={category._id}
                    >
                      <li>{category.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
