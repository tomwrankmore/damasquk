import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import BlockContent from './block-content/Index';
import Container from './Container';

import styles from './Person.module.css';

function Person(props) {
  const { id, name, image, slug, _rawBio } = props;

  const bio = _rawBio[0].children[0].text;
  return (
    <article className={styles.root}>
      <Container>
        {/* <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{name}</h1>
            <Img
              className={styles.personImage}
              fluid={image.asset.fluid}
              alt={name}
            />

            {_rawBio && <BlockContent blocks={_rawBio || []} />}
            <p>{bio}</p>
          </div>
          <aside className={styles.metaContent}>
            <p>Speciality</p>
          </aside>
        </div> */}
        <p>hi</p>
      </Container>
    </article>
  );
}

export default Person;
