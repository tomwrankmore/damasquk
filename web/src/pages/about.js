import React from 'react';
import { graphql } from 'gatsby';

import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Container from '../components/Container';
import ContainerLarge from '../components/ContainerLarge';
import GraphQLErrorList from '../components/Graphql-error-list';
import PeopleGrid from '../components/People-grid';
import SEO from '../components/Seo';
import Layout from '../containers/Layout';
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from '../lib/helpers';
import BlockContent from '../components/block-content/Index';
import CallToAction from '../components/CTA';
import PrimaryButton from '../components/PrimaryButton';
import AboutStaticImage from '../components/AboutImage';
import HandshakeDivider from '../components/HandshakeDividerImg';
import MinmaxGrid from '../components/MinmaxGrid';
import SubHeading from '../components/Sub-heading';

import '../styles/vars.css';

import {
  responsiveTitle1,
  responsiveTitle2,
  responsiveTitle3,
  responsiveTitle4,
  paragraph,
} from '../components/typography.module.css';

const MainTitle = styled.h1`
  text-align: center;
`;

const AboutStatement = styled.div`
  margin-bottom: 4rem;
`;

const AboutStatementParagraph = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: var(--font-title3-size);
  line-height: 2.3rem;
`;

const Paragraph = styled.p`
  padding: 0 0.875rem;
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 4rem;
  margin-bottom: 3rem;
`;

const Testimonials = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 4rem;
`;

const Testimonial = styled.div`
  border-radius: 0 0 25px 0;
  padding: 0 2rem;

  .testimonial-name {
    text-align: right;
  }

  p {
    font-size: var(--font-title3-size);
    line-height: var(--font-title4-line-height);
  }
`;

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody
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
    bgImg: file(relativePath: { eq: "remi-walle-UOwvwZ9Dy6w-unsplash.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    journeyImg: file(relativePath: { eq: "about-circles.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const AboutPage = (props) => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data && data.page;
  const personNodes =
    data &&
    data.people &&
    mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs);

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    );
  }
  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <MainTitle className={responsiveTitle1}>{page.title}</MainTitle>
        {/* <BlockContent blocks={page._rawBody || []} /> */}
        <AboutStatement>
          <AboutStatementParagraph>
            Based in Leeds, DAMASQ originated directly from the first-hand
            experience of migrants. Dating from our formation in 2016 we took
            the initiative and the responsibility to support new migrants, to
            help empower them, and to make them feel welcomed and valued.
          </AboutStatementParagraph>
          <AboutStatementParagraph>
            We have also learned that migrants can add value, experience
            knowledge and skills to the communities in which they live, and
            therefore everyone benefits. DAMASQ works to support migrants, to
            enhance and project a positive vision of their roles and
            contributions to the communities in which they live. DAMASQ is
            committed to be open, inclusive and fair to all.
          </AboutStatementParagraph>
        </AboutStatement>

        <AboutStaticImage />
        <HandshakeDivider />

        <MinmaxGrid>
          <div>
            <SubHeading className={responsiveTitle3}>Our Vision</SubHeading>
            <Paragraph className={paragraph}>
              Our vision embraces the idea that communities and individuals
              prosper most when society has a positive view of the potential of
              all its members. DAMASQ believes that migrants can contribute to
              the community institutions structures and values which allow all
              citizens to flourish. We aim to help to create a fair society for
              all in which with equal opportunities are promoted within a
              culture which is inclusive, caring, supportive and in which people
              are valued and respected.
            </Paragraph>
          </div>
          <div>
            <SubHeading className={responsiveTitle3}>Our Mission</SubHeading>
            <Paragraph className={paragraph}>
              Damasq recognises challenges that face new migrants and people in
              need. We believe in the power of connection and connecting
              communities by promoting cultural and intercultural awareness, and
              by promoting action, services and community resources. By
              connecting services with people though events, projects, dialogue,
              guidance and education our vision in action is to enhance
              community cohesion and development. In this way we see DAMASQ
              acting as an opinion and action leader in the promotion of the
              City of Leeds as a location of outstanding practice in welcoming
              migrants and in enabling their role in making the city a
              pioneering centre for the values of peace, development and
              community cohesion.
            </Paragraph>
          </div>
        </MinmaxGrid>
      </Container>
      {/* <ContainerLarge>
        <MainTitle className={responsiveTitle1}>What People Say</MainTitle>
        <Testimonials>
          <Testimonial>
            <Paragraph className={paragraph}>
              "The open, global internet is the most powerful communication and
              collaboration resource we have ever seen. It embodies some of our
              deepest hopes for human progress."
            </Paragraph>
            <SubHeading className={cn(responsiveTitle4, 'testimonial-name')}>
              Person One
            </SubHeading>
          </Testimonial>
          <Testimonial>
            <Paragraph className={paragraph}>
              "The open, global internet is the most powerful communication and
              collaboration resource we have ever seen. It embodies some of our
              deepest hopes for human progress."
            </Paragraph>
            <SubHeading className={cn(responsiveTitle4, 'testimonial-name')}>
              Person Two
            </SubHeading>
          </Testimonial>
          <Testimonial>
            <Paragraph className={paragraph}>
              "The open, global internet is the most powerful communication and
              collaboration resource we have ever seen. It embodies some of our
              deepest hopes for human progress."
            </Paragraph>
            <SubHeading className={cn(responsiveTitle4, 'testimonial-name')}>
              Person Three
            </SubHeading>
          </Testimonial>
        </Testimonials>
      </ContainerLarge> */}
      <BackgroundImage fluid={data.bgImg.childImageSharp.fluid}>
        <CallToAction
          myClassName="withBackgroundImage"
          destination="/about"
          buttonText="Get Involved"
        >
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

export default AboutPage;
