import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Container from '../components/Container';
import GraphQLErrorList from '../components/Graphql-error-list';
import SEO from '../components/Seo';
import Layout from '../containers/Layout';
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers';
import Hero from '../components/Page-hero-image';
import { device } from '../styles/MediaQueries';
import LogoDivider from '../components/Logo-page-divider';
import {
  responsiveTitle1,
  responsiveTitle2,
  responsiveTitle3,
  responsiveTitle4,
  paragraph,
  small,
} from '../components/typography.module.css';
import PrimaryButton from '../components/PrimaryButton';
import BlockContent from '../components/block-content/Index';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const query = graphql`
  query WhatWeDoPageQueryTwo {
    page: sanityPage(_id: { regex: "/(drafts.|)whatWeDo/" }) {
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

const WaysToHelpWrapper = styled.div`
  padding: 0 0 2rem 0;
`;

const WaysToHelp = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
`;

const Item = styled.div`
  border: solid 1px var(--color-light-grey);
  background-color: var(--color-white);
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

const TextOverlapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: min-content;
  overflow: hidden;
  /* @media ${device.mediaMinXLarge} {
    grid-auto-rows: repeat(6, 110px);
  } */
  .hero-ting {
    grid-column: 1/-1;
    grid-row: 2/3;
    img {
      border-radius: 1rem;
    }
    @media ${device.mediaMinXLarge} {
      grid-column: 1/-1;
      grid-row: 2/4;
    }
  }
`;

const Title = styled.h1`
  visibility: hidden;
  grid-column: 1/-1;
  grid-row: 1;
  z-index: 10;
  background: white;
  justify-self: flex-start;
  padding: 0;
  align-self: center;
  display: block;
  border-radius: 0 1rem 1rem 0;
  background-color: var(--color-body-bg);
  @media ${device.mediaMinXLarge} {
    grid-row: 2;
    padding: 10px 15px;
    margin: 0;
  }
`;

const TextContainer = styled.div`
  grid-column: 1/-1;
  grid-row: 3/4;
  /* background-color: var(--damasq-dark-indigo); */
  background-color: transparent;
  color: var(--color-black);
  z-index: 10;
  padding: 0;
  align-self: center;
  text-align: center;

  h3 {
    color: var(--damasq-dark-grey);
    line-height: 2rem;
    font-weight: normal;
    font-size: var(--font-large-size);

    .lineParent {
      overflow: hidden;
    }
  }

  @media ${device.mediaMinXLarge} {
    text-align: left;
    padding: 0.875rem 2.25rem 1.25rem 2.25rem;
    box-shadow: 1px 1px 8px -2px rgb(181 181 181 / 69%);
    grid-column: 3/-1;
    grid-row: 3/4;
    border-bottom: none;
    border-left: solid 10px var(--damasq-dark-turqoise);
    background-color: #ffffffde;
  }
`;

const SecondTextSection = styled.section`
  padding: 4rem 8rem;
  border-radius: 1rem;
  /* background-color: var(--color-white); */
  margin-bottom: 4rem;

  h3 {
    text-align: center;
    line-height: 2rem;
    font-weight: normal;
  }
`;

const WhatWeDoPage = (props) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const titleTextBox = useRef(null);
  const heroText = useRef([null]);
  const titleRefSpan = useRef(null);
  console.log('titleText = ', heroText.current);

  useEffect(() => {
    const titleSplit = new SplitText(titleRef.current, { type: 'chars' });

    const textSplitChildLines = new SplitText(heroText.current, {
      type: 'lines',
      linesClass: 'lineChild',
    });
    const textSplitParentLines = new SplitText(heroText.current, {
      type: 'lines',
      linesClass: 'lineParent',
    });

    gsap.set(titleRef.current, { xPercent: -100 });
    gsap.set(heroRef.current, { visibility: 'hidden' });
    const tl = gsap.timeline();

    tl.from(heroRef.current, {
      autoAlpha: 0,
      y: 100,
      ease: 'Back.easeInOut',
      duration: 1,
    });
    tl.to(
      titleRef.current,
      {
        xPercent: 0,
        autoAlpha: 1,
        delay: 0.25,
        ease: 'power4.out',
      },
      '<'
    );
    tl.from(
      titleSplit.chars,
      {
        opacity: 0,
        x: -25,
        ease: 'back(4)',
        stagger: {
          from: 'start',
          each: 0.05,
        },
      },
      '<'
    );
    tl.from(
      titleTextBox.current,
      {
        xPercent: 100,
        ease: 'Power2.out',
        duration: 0.4,
      },
      '<'
    );
    tl.from(
      textSplitChildLines.lines,
      {
        yPercent: 100,
        ease: 'back',
        stagger: { amount: 0.1 },
      },
      '-=0.5'
    );
  }, []);

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
  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <TextOverlapGrid ref={heroRef}>
          <Title className={responsiveTitle1} ref={titleRef}>
            <span ref={titleRefSpan}>What We Do</span>
          </Title>
          <Hero imageData={backgroundImageData} className="hero-ting" />
          <TextContainer ref={titleTextBox}>
            {/* <BlockContent blocks={page._rawBody || []} /> */}
            <h3 className={responsiveTitle3} ref={heroText}>
              DAMASQ works to support refugees, asylum seekers, migrants and
              minority communities generally. We do this by helping to alleviate
              poverty through a range of projects and programmes in education,
              enterprise and employment generation.
            </h3>
          </TextContainer>
        </TextOverlapGrid>

        <SecondTextSection>
          <LogoDivider />
          <h3 className={responsiveTitle3}>
            We also work to enrich and support cultural, artistic, sporting and
            heritage activity and awareness. In promoting these activities we
            place value on enhancing social inclusion and good citizenship. We
            aim to help heal divided communities by promoting sustainable
            community development and engagement.
          </h3>
        </SecondTextSection>

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
    </Layout>
  );
};

export default WhatWeDoPage;
