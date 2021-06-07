import React from 'react';
import { graphql } from 'gatsby';

import styled from 'styled-components';
import Container from '../components/Container';
import GraphQLErrorList from '../components/Graphql-error-list';
import PeopleGrid from '../components/People-grid';
import SEO from '../components/Seo';
import Layout from '../containers/Layout';
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers';
import Hero from '../components/Page-hero-image';
import { responsiveTitle1 } from '../components/typography.module.css';
import BlockContent from '../components/block-content/Index';
import { device } from '../styles/MediaQueries';

export const query = graphql`
  query GetInvolvedPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)getInvolved/" }) {
      id
      title
      _rawBody
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
    }

    people: allSanityPerson {
      edges {
        node {
          id
          slug {
            current
          }
          image {
            asset {
              _id
            }
          }
          name
          _rawBio
        }
      }
    }
    desktop: file(
      relativePath: { eq: "daan-evers-tKN1WXrzQ3s-unsplash.jpeg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const TextOverlapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: 80px 1fr 1fr; */
  grid-auto-rows: min-content;
  @media ${device.mediaMinXLarge} {
    grid-auto-rows: repeat(6, 110px);
  }
  .hero-ting {
    grid-column: 1/-1;
    grid-row: 2/3;
    @media ${device.mediaMinXLarge} {
      grid-column: 1/6;
      grid-row: 2/4;
    }
  }
`;

const Title = styled.h1`
  grid-column: 1/-1;
  grid-row: 1;
  z-index: 10;
  background: white;
  justify-self: flex-start;
  padding: 0;
  align-self: center;
  display: block;
  /* margin: 0; */
  @media ${device.mediaMinXLarge} {
    grid-row: 2;
    padding: 10px 15px;
    margin: 0;
  }
`;

const TextContainer = styled.div`
  grid-column: 1/-1;
  grid-row: 3/4;
  background-color: #ffffffde;
  z-index: 10;
  padding: 1rem 1.5rem 1rem;
  align-self: center;
  border-bottom: solid 10px var(--damasq-dark-turqoise);
  box-shadow: 2px 1px 8px -2px rgb(181 181 181 / 69%);

  a {
    text-decoration: underline;
    &:hover {
      font-weight: bold;
    }
  }
  @media ${device.mediaMinXLarge} {
    padding: 1.5rem 1.875rem 1rem 1.875rem;
    grid-column: 3/-1;
    grid-row: 3/4;
    border-bottom: none;
    border-left: solid 10px var(--damasq-dark-turqoise);
  }
`;

// const TextContainer = styled.div`
//   max-width: 75%;
// `;

const GetInvolvedPage = (props) => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data && data.page;
  const backgroundImageData = data && data.page.image;
  console.log('page._rawBody', page._rawBody);

  const personNodes =
    data &&
    data.people &&
    mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs);

  if (!page) {
    throw new Error(
      'Missing "Get Involved" page data. Open the studio at http://localhost:3333 and add "Get Involved" page data and restart the development server.'
    );
  }
  console.log('personNodes', personNodes);
  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <TextOverlapGrid>
          <Title className={responsiveTitle1}>{page.title}</Title>
          <Hero imageData={backgroundImageData} className="hero-ting" />
          <TextContainer>
            <BlockContent blocks={page._rawBody || []} />
          </TextContainer>
        </TextOverlapGrid>
      </Container>
    </Layout>
  );
};

export default GetInvolvedPage;
