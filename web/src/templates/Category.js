import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import GraphQLErrorList from '../components/Graphql-error-list';
import SEO from '../components/Seo';
import Layout from '../containers/Layout';
import Category from '../components/Category';

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: allSanityPost(
      filter: { categories: { elemMatch: { id: { eq: $id } } } }
    ) {
      edges {
        node {
          id
          title
          publishedAt
          categories {
            _id
            title
            slug {
              current
            }
          }
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          slug {
            current
          }
          _rawBody
          authors {
            _key
            person {
              slug {
                current
              }
              image {
                crop {
                  _key
                  _type
                  top
                  bottom
                  left
                  right
                }
                hotspot {
                  _key
                  _type
                  x
                  y
                  height
                  width
                }
                asset {
                  _id
                }
              }
              name
            }
            roles
          }
        }
      }
    }
  }
`;

const CategoryTemplate = (props) => {
  const { data, errors } = props;
  const categories = data && data.category;
  const items = categories.edges.map((category) => category);

  return (
    <Layout>
      {/* {errors && <SEO title="GraphQL Error" />}
      {categories && <SEO title={person.name || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )} */}
      {errors && <SEO title="GraphQL Error" />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {<Category {...items} />}
    </Layout>
  );
};
export default CategoryTemplate;
