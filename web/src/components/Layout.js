import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import '../styles/layout.css';
import styles from './Layout.module.css';

// onHideNav is a function that changes the state of showNav to false
// onShowNav is a function that changes the state of showNav to true
// showNav is a boolean

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  /* min-height: calc(100% - 54px - 152px); */
  flex: 1 0 auto;

  /* @media ${device.mediaMinSmall} {
    min-height: calc(100% - 90px - 169px);
  } */
`;

const Layout = ({
  children,
  companyInfo,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
}) => (
  <Wrapper>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <Content className={styles.content}>{children}</Content>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        {/* <div className={styles.companyAddress}>
          {companyInfo && (
            <div>
              {companyInfo.name}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.zipCode} {companyInfo.city}
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </div>
          )}
        </div> */}

        <div className={styles.siteInfo}>
          {/* {companyInfo.name} */}© Damasq {new Date().getFullYear()}, Company
          Number: 10607104
          {/* , Built with{' '}
          <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </div>
      </div>
    </footer>
  </Wrapper>
);

export default Layout;
