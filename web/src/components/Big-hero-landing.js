import { format, distanceInWords, differenceInDays } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { StaticImage } from 'gatsby-plugin-image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { AnimLargeLogo } from './animations';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import BlockContent from './block-content/Index';
import Container from './Container';
import RoleList from './Role-list';
import {
  responsiveTitle1,
  responsiveTitle3,
  responsiveTitle5,
} from './typography.module.css';
import styles from './Big-hero-landing.module.css';
import { BackgroundLogoAbs } from './Background-logo-absolute';
import HomeLandingButton from './Home-landing-button';

const BGimgStyles = {
  // position: 'absolute',
  // right: '0vw',
  // top: '35vh',
  // zIndex: '3',
  // maxWidth: '35vw',
  // width: '100%',
  // opacity: '0.65',
};

const MainHeading = styled.h1`
  .lineParent {
    overflow: hidden;
  }
`;

const HeroContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 121px);
  position: relative;
  visibility: hidden;
`;

const LargeLogoWrapper = styled.div`
  width: 100%;
  position: absolute;
  max-width: 35vw;
  top: 35vh;
  right: 0;
`;

const SplashContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

function BigHeroLanding(props) {
  const heroContainer = useRef(null);
  const taglineRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const buttonRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const largeLogoRef = useRef(null);

  useEffect(() => {
    const taglineSplit = new SplitText(taglineRef.current, { type: 'chars' });

    const headingSplitChildLines = new SplitText(headingRef.current, {
      type: 'lines',
      linesClass: 'lineChild',
    });
    const headingSplitParentLines = new SplitText(headingRef.current, {
      type: 'lines',
      linesClass: 'lineParent',
    });

    const tl = gsap.timeline();
    tl.from(heroContainer.current, {
      autoAlpha: 0,
      delay: 0.25,
    });
    tl.from(largeLogoRef.current, {
      autoAlpha: 0,
      ease: 'Power4.inOut',
      duration: 0.875,
      xPercent: '40',
      delay: 0.5,
      onComplete: () =>
        AnimLargeLogo(heroContainer.current, largeLogoRef.current),
    });
    tl.from(
      taglineSplit.chars,
      {
        opacity: 0,
        duration: 0.2,
        x: -5,
        ease: 'back(4)',
        stagger: {
          from: 'start',
          each: 0.025,
        },
      },
      '<'
    );
    tl.from(
      headingSplitChildLines.lines,
      {
        opacity: 0,
        yPercent: 100,
        ease: 'back',
        stagger: { amount: 0.1 },
      },
      '<0.25'
    );
    tl.from(
      subHeadingRef.current,
      {
        opacity: 0,
        yPercent: 100,
      },
      '<0.25'
    );
    tl.from(
      buttonRef.current,
      {
        autoAlpha: 0,
        y: 25,
      },
      '<'
    );
  }, []);

  return (
    <>
      <HeroContainer ref={heroContainer}>
        <BackgroundImage
          className={styles.bigHeroLandingGatsby}
          fluid={props.BackgroundImage}
        >
          <div className={styles.bigHeroLanding} ref={contentWrapperRef}>
            {/* <BackgroundLogoAbs /> */}
            <LargeLogoWrapper ref={largeLogoRef}>
              <StaticImage
                src="../assets/images/logo-mark-truncated.svg"
                alt="Big Icon"
                placeholder="none"
                layout="fullWidth"
                className={styles.BackgroundLogoAbs}
                style={BGimgStyles}
              />
            </LargeLogoWrapper>

            <Container>
              <div className={styles.bigHeroTextContentWrapper}>
                <h5 className={responsiveTitle5} ref={taglineRef}>
                  Give strength with kindess
                </h5>
                <MainHeading className={responsiveTitle1} ref={headingRef}>
                  Damasq is a Leeds based charity focused on uniting communities
                </MainHeading>
                <h3 className={responsiveTitle3} ref={subHeadingRef}>
                  We are always looking for volunteers and donations.
                </h3>
                <HomeLandingButton to="/about/" ref={buttonRef}>
                  Learn more
                </HomeLandingButton>
                {/* </button> */}
              </div>
            </Container>
          </div>
        </BackgroundImage>
      </HeroContainer>
    </>
  );
}

export default BigHeroLanding;
