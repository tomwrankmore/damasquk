import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../components/Container';
import GraphQLErrorList from '../components/Graphql-error-list';
import Project from '../components/Project';
import SEO from '../components/Seo';
import Layout from '../containers/Layout';
import Person from '../components/Person';

export const query = graphql`
  query PersonTemplateQuery($id: String!) {
    person: sanityPerson(id: { eq: $id }) {
      id
      name
      image {
        asset {
          fluid(maxHeight: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      slug {
        current
      }
      _rawBio
    }
  }
`;

const PersonTemplate = (props) => {
  const { data, errors } = props;
  const person = data && data.person;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {person && <SEO title={person.name || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {<Person {...person} />}
    </Layout>
  );
};

export default PersonTemplate;
