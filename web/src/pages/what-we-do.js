import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Container from '../components/Container';
import GraphQLErrorList from '../components/Graphql-error-list';
import SEO from '../components/Seo';
import Layout from '../containers/Layout';
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers';
import WhatWeDoImg from '../components/What-we-do-img';
import MinmaxGrid from '../components/MinmaxGrid';
import SubHeading from '../components/Sub-heading';
import PrimaryButton from '../components/PrimaryButton';
import { device, screenSizes } from '../lib/device';
import CallToAction from '../components/CTA';
import '../styles/vars.css';
import BlockContent from '../components/block-content/Index';
import {
  responsiveTitle1,
  responsiveTitle2,
  responsiveTitle3,
  responsiveTitle4,
  paragraph,
  small,
} from '../components/typography.module.css';

export const query = graphql`
  query WhatWeDoQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)whatWeDo/" }) {
      id
      title
      _rawBody
    }
    whatWeDoImg: file(relativePath: { eq: "WhatWeDo3.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 760) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const MainIntro = styled.div`
  margin-bottom: 2em;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  @media ${screenSizes.mediaMinLarge} {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
  align-items: center;
  text-align: center;

  /* &.whatWeDoImgWrapper {
    width: '100%';
    max-width: '350px';
    margin: 0 auto;
    @media ${screenSizes.mediaMinLarge} {
      max-width: '500px';
      margin: 0;
    }
  } */
`;

const Heading = styled.header`
  /* margin-top: 96px; */
  max-width: 100%;
  margin-bottom: 2rem;
  @media ${screenSizes.mediaMinLarge} {
    max-width: 75%;
    margin-bottom: 0;
  }
`;

const TwoColWrapper = styled.div`
  margin-bottom: 4rem;
  padding-top: 4rem;
  border-top: solid 2px var(--damasq-light-turqoise);
`;

const WaysToHelpWrapper = styled.div`
  padding: 4rem 0;
`;

const WaysToHelp = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
`;

const Item = styled.div`
  border: solid 1px var(--color-light-grey);
  border-radius: 10px;
  text-align: center;
  padding: 0.5rem 2rem 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 1px 1px 8px -2px rgba(102, 102, 102, 0.69);

  .helpOutBtn {
    align-self: flex-end;
    justify-self: flex-end;
  }
`;

const WhatWeDoPage = (props) => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data && data.page;
  // const personNodes =
  //   data &&
  //   data.people &&
  //   mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs);

  if (!page) {
    throw new Error(
      'Missing "What We Do Page" page data. Open the studio at http://localhost:3333 and add "What We Do" page data and restart the development server.'
    );
  }
  // console.log('personNodes', personNodes);
  return (
    <Layout>
      <SEO title={page.title} />
      {/* <SEO title="What we do" /> */}
      <Container>
        {/* <BlockContent blocks={page._rawBody || []} /> */}
        {/* {personNodes && personNodes.length > 0 && (
          <PeopleGrid items={personNodes} title="Our Team" />
        )} */}

        <MainIntro>
          <Heading>
            <h1 className={responsiveTitle1}>{page.title}</h1>
            <p>
              Mozilla is a non-profit organisation working to ensure the
              internet is open and welcoming to all. And we need your help. By
              joining our community, you can help drive innovation, enhance
              accountability and trust and make the internet a better place for
              everyone.
            </p>
          </Heading>

          <WhatWeDoImg />
        </MainIntro>
        <TwoColWrapper>
          <MinmaxGrid>
            <div>
              <SubHeading className={responsiveTitle4}>Advocacy</SubHeading>
              <p>
                The open, global internet is the most powerful communication and
                collaboration resource we have ever seen. It embodies some of
                our deepest hopes for human progress. It enables new
                opportunities for learning, building a sense of shared humanity,
                and solving the pressing problems facing people everywhere.
              </p>
            </div>
            <div>
              <SubHeading className={responsiveTitle4}>Education</SubHeading>
              <p>
                The open, global internet is the most powerful communication and
                collaboration resource we have ever seen. It embodies some of
                our deepest hopes for human progress. It enables new
                opportunities for learning, building a sense of shared humanity,
                and solving the pressing problems facing people everywhere.
              </p>
            </div>
          </MinmaxGrid>
        </TwoColWrapper>

        <WaysToHelpWrapper>
          <h1 className={responsiveTitle1}>Ways to help out</h1>
          <WaysToHelp>
            <Item>
              <h3 className={responsiveTitle3}>Donate</h3>
              <p className={small}>
                We are a not for profit charity and we rely on donations from
                the public to continue our work.
              </p>
              <PrimaryButton to="/donate">Donate</PrimaryButton>
            </Item>
            <Item>
              <h3 className={responsiveTitle3}>Volunteer</h3>
              <p className={small}>
                Please check our Get Involved page for volunteering
                opportunities, or contact us with the subject 'Volunteer'
              </p>
              <PrimaryButton to="/contact">Contact Us</PrimaryButton>
            </Item>
            <Item>
              <h3 className={responsiveTitle3}>Dine with us</h3>
              <p className={small}>
                Come and join us at one of our events. More details will be
                available soon on our Projects page
              </p>
              <PrimaryButton to="/community-cafe">Community Cafe</PrimaryButton>
            </Item>
          </WaysToHelp>
        </WaysToHelpWrapper>
      </Container>
      <CallToAction destination="/about" buttonText="Learn More">
        <h1 className="ctaHeading">We need your help</h1>
        <p>
          We are passionate about bringing communities together and bringing
          strength with kindess.
        </p>
        <PrimaryButton to="/about">Learn More</PrimaryButton>
      </CallToAction>
    </Layout>
  );
};

export default WhatWeDoPage;
