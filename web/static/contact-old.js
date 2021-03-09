import React from 'react';
import { graphql } from 'gatsby';
import { useForm } from 'react-hook-form';
import Container from '../src/components/Container';
import GraphQLErrorList from '../src/components/Graphql-error-list';
import SEO from '../src/components/Seo';
import Layout from '../src/containers/Layout';

import { responsiveTitle1 } from '../components/typography.module.css';
import BlockContent from '../src/components/block-content/Index';

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      title
      _rawBody
    }
  }
`;

const ContactPageOld = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const { page } = data;

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <h1 className={responsiveTitle1}>{page.title}</h1>
        <BlockContent blocks={page._rawBody || []} />
      </Container>
    </Layout>
  );
};
ContactPage.defaultProps = {
  data: {
    page: {
      title: 'No title',
    },
  },
};
export default ContactPageOld;
