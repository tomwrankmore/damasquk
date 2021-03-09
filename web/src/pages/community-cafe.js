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

// export const query = graphql`
//   query AboutPageQuery {
//     page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
//       id
//       title
//       _rawBody
//     }
//     people: allSanityPerson {
//       edges {
//         node {
//           id
//           slug {
//             current
//           }
//           image {
//             asset {
//               _id
//             }
//           }
//           name
//           _rawBio
//         }
//       }
//     }
//   }
// `;

const CommunityCafe = (props) => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  //   const page = data && data.page;
  //   const personNodes =
  //     data &&
  //     data.people &&
  //     mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs);

  //   if (!page) {
  //     throw new Error(
  //       'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
  //     );
  //   }
  //   console.log('personNodes', personNodes);
  return (
    <Layout>
      {/* <SEO title={page.title} /> */}
      <Container>
        {/* <h1 className={responsiveTitle1}>{page.title}</h1>
        <BlockContent blocks={page._rawBody || []} />
        {personNodes && personNodes.length > 0 && (
          <PeopleGrid items={personNodes} title="Our Team" />
        )} */}
        <h1 className={responsiveTitle1}>Community Cafe</h1>
      </Container>
    </Layout>
  );
};

export default CommunityCafe;
