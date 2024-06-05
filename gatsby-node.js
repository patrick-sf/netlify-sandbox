exports.createPages = async function ({ actions }) {
  const { createPage } = actions;

  const pagesSlugs = ['page-1', 'page-2'];
  pagesSlugs.forEach((slug) => {
    createPage({
      path: `pages/${slug}`,
      component: require.resolve(`./src/ui/templates/PageTemplate.tsx`),
      context: { slug },
    });
  });
};
