require('dotenv').config();

const {
  api: { projectId, dataset },
} = requireConfig('../studio/sanity.json');

module.exports = {
  flags: { QUERY_ON_DEMAND: false },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Roboto+Mono:wght@300;400;700`, // you can also specify font weights and styles
          `Roboto:wght@300;400;500;700;900`,
          `Poppins:ital,wght@0,100;0,300;0,400;0,600;0,700;1,400`,
        ],
        display: 'swap',
      },
    },
  ],
};

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

function requireConfig(path) {
  try {
    return require(path);
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    );
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || '',
      },
    };
  }
}
