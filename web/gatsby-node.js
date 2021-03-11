const { format } = require('date-fns');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node;
    const dateSegment = format(publishedAt, 'YYYY/MM');
    const path = `/blog/${dateSegment}/${slug.current}/`;

    reporter.info(`Creating blog post page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/Blog-post-old.js'),
      context: { id },
    });
  });
}

async function createProjectPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const projectEdges = (result.data.allSanityProject || {}).edges || [];

  projectEdges.forEach((edge) => {
    const { id } = edge.node;
    const slug = edge.node.slug.current;
    const path = `/project/${slug}/`;

    reporter.info(`Creating project page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/Project.js'),
      context: { id },
    });
  });
}

async function createPeoplePages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSanityPerson {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const { data } = result;
  const people = (data.allSanityPerson || {}).nodes || [];
  // const people = data.allSanityPerson.nodes;

  people.forEach((person) => {
    const { id } = person;
    console.log(id);
    const slug = person.slug.current;
    const path = `/person/${slug}/`;

    reporter.info(`Creating project page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/Person.js'),
      context: { id },
    });
  });
}

async function createCategoryPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSanityCategory {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const { data } = result;
  const categories = (data.allSanityCategory || {}).edges || [];

  categories.forEach((category) => {
    const { id } = category.node;
    const slug = category.node.slug.current;
    const { title } = category.node;
    const path = `/category/${slug}/`;

    console.log('title:', title);

    reporter.info(`Creating project page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/Category.js'),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter);
  await createProjectPages(graphql, actions, reporter);
  await createPeoplePages(graphql, actions, reporter);
  await createCategoryPages(graphql, actions, reporter);
};
