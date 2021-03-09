import React from 'react';
import { graphql } from 'gatsby';
import { mapEdgesToNodes } from '../lib/helpers';
import BlogPostPreviewGrid from '../components/Blog-post-preview-grid';
import Container from '../components/Container';
import GraphQLErrorList from '../components/Graphql-error-list';
import SEO from '../components/Seo';
import Layout from '../containers/Layout';

import { responsiveTitle1 } from '../components/typography.module.css';

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          publishedAt
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

const BlogPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1 className={responsiveTitle1}>Blog</h1>
        {postNodes && postNodes.length > 0 && (
          <BlogPostPreviewGrid nodes={postNodes} />
        )}
      </Container>
    </Layout>
  );
};

export default BlogPage;
