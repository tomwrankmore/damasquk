import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import GraphQLErrorList from '../components/Graphql-error-list';
import ProjectPreviewGrid from '../components/Project-preview-grid';
import SEO from '../components/Seo';
import Layout from '../containers/Layout';
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers';

import { responsiveTitle1 } from '../components/typography.module.css';

export const query = graphql`
  query ProjectsPageQuery {
    projects: allSanityProject(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ProjectsPage = (props) => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const projectNodes =
    data &&
    data.projects &&
    mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs);
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <h1 className={responsiveTitle1}>Projects</h1>
        {projectNodes && projectNodes.length > 0 && (
          <ProjectPreviewGrid nodes={projectNodes} />
        )}
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
