import { format, distanceInWords, differenceInDays } from 'date-fns';
import React, { useRef, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
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
import PrimaryButton from './PrimaryButton';

gsap.registerPlugin(ScrollTrigger, SplitText);

function BigHeroLanding(props) {
  const data = useStaticQuery(graphql`
    query BigHeroQuery {
      bgImg: file(relativePath: { eq: "remi-walle-UOwvwZ9Dy6w-unsplash.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const textContentRef = useRef(null);

  useEffect(() => {
    gsap.from(textContentRef.current, {
      duration: 1,
      autoAlpha: 0,
      y: 30,
      ease: 'back',
    });
  }, []);

  return (
    <>
      <BackgroundImage
        className={styles.bigHeroLandingGatsby}
        fluid={data.bgImg.childImageSharp.fluid}
      >
        <div className={styles.bigHeroLanding}>
          <BackgroundLogoAbs />
          <Container>
            <div
              ref={textContentRef}
              className={styles.bigHeroTextContentWrapper}
            >
              <h5 className={responsiveTitle5}>Give strength with kindess</h5>
              <h1 className={responsiveTitle1}>
                Damasq is a Leeds based charity focused on uniting communities
              </h1>
              <h3 className={responsiveTitle3}>
                We are always looking for volunteers and donations.
              </h3>
              {/* <button type="button" className={styles.learnMore}> */}
              {/* <Link className={primaryButton} to="/about/">
            Learn more
          </Link> */}
              <PrimaryButton to="/about/">Learn more</PrimaryButton>
              {/* </button> */}
            </div>
          </Container>
        </div>
      </BackgroundImage>
    </>
  );
}

export default BigHeroLanding;
