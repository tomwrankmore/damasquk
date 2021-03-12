import React from 'react';
import { graphql } from 'gatsby';

import Container from '../components/Container';
import GraphQLErrorList from '../components/Graphql-error-list';
import PeopleGrid from '../components/People-grid';
import SEO from '../components/Seo';
import Layout from '../containers/Layout';
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers';

import { responsiveTitle1 } from '../components/typography.module.css';
import BlockContent from '../components/block-content/Index';

export const query = graphql`
  query DonatePageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)donate/" }) {
      id
      title
      _rawBody
    }
  }
`;

const DonatePage = (props) => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "Get Involved" page data. Open the studio at http://localhost:3333 and add "Donate" page data and restart the development server.'
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

export default DonatePage;
