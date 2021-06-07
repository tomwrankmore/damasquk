import React, { useState } from 'react';
import { graphql } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers';
import BlogPostPreviewGrid from '../components/Blog-post-preview-grid';
import Container from '../components/Container';
import GraphQLErrorList from '../components/Graphql-error-list';
import SEO from '../components/Seo';
import Layout from '../containers/Layout';
import BigHeroLanding from '../components/Big-hero-landing';
import CallToAction from '../components/CTA';
import PrimaryButton from '../components/PrimaryButton';
import FeaturedProjects from '../components/FeaturedProjects';

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    projects: allSanityProject(limit: 8, filter: { selected: { eq: true } }) {
      edges {
        node {
          id
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
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }

    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          publishedAt
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
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
    BigHeroLandingBg: file(
      relativePath: { eq: "remi-walle-UOwvwZ9Dy6w-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bgImg: file(relativePath: { eq: "katt-yukawa-K0E6E0a0R3A-unsplash.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const { site } = data || {};
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : [];
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />

      <BigHeroLanding
        BackgroundImage={data.BigHeroLandingBg.childImageSharp.fluid}
      />
      {/* <Container>
        {postNodes && (
          <BlogPostPreviewGrid
            title="Latest blog posts"
            nodes={postNodes}
            // browseMoreHref="/blog/"
          />
        )}
      </Container> */}
      <CallToAction>
        <h1 className="ctaHeading">We need your help</h1>
        <p>
          We are passionate about bringing communities together and bringing
          strength with kindess.
        </p>
        <PrimaryButton to="/about">Learn More</PrimaryButton>
      </CallToAction>
      <Container>
        {projectNodes && (
          <FeaturedProjects
            title="Featured Project"
            nodes={projectNodes}
            browseMoreHref="/projects/"
          />
        )}
      </Container>
      <BackgroundImage fluid={data.bgImg.childImageSharp.fluid}>
        <CallToAction myClassName="withBackgroundImage">
          <h1 className="ctaHeading">Get Involved</h1>
          <p>
            We are always on the look out for will volunteers to help us on our
            mission.
          </p>
          <PrimaryButton to="/get-involved">Get Involved</PrimaryButton>
        </CallToAction>
      </BackgroundImage>
    </Layout>
  );
};

export default IndexPage;
