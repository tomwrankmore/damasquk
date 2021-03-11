import React from 'react';
import Header from './Header';
import '../styles/layout.css';
import styles from './Layout.module.css';

// onHideNav is a function that changes the state of showNav to false
// onShowNav is a function that changes the state of showNav to true
// showNav is a boolean

const Layout = ({
  children,
  companyInfo,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
}) => (
  <>
    {console.log(companyInfo)}
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div className={styles.content}>{children}</div>
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
          {/* {companyInfo.name} */}© Damasq {new Date().getFullYear()}
          {/* , Built with{' '}
          <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
