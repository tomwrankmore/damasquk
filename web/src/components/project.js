import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import { Link } from 'gatsby';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

import Container from './Container';
import RoleList from './Role-list';

import styles from './Project.module.css';
import BlockContent from './block-content/Index';
import SideBarButton from './SidebarButton';

function Project(props) {
  const {
    _rawBody,
    title,
    categories,
    mainImage,
    members,
    publishedAt,
    relatedProjects,
  } = props;

  // const slug = members[0].person.slug.current;

  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
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
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {/* {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {members && <RoleList items={members} title="Team Members" />} */}
            {/* {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <Link to={`/category/${category.slug.current}`}>
                      <li key={category._id}>{category.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            )} */}
            {relatedProjects && (
              <div className={styles.relatedProjects}>
                {/* <h3 className={styles.relatedProjectsHeadline}>
                  Related projects
                </h3> */}
                <ul>
                  {relatedProjects.map((project) => (
                    <li key={`related_${project._id}`}>
                      <Link to={`/project/${project.slug.current}`}>
                        {project.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <SideBarButton to="/donate" myClassName="donateBtn">
              Donate
            </SideBarButton>
            <SideBarButton to="/get-involved" myClassName="getInvolvedBtn">
              Get Involved
            </SideBarButton>
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default Project;
