module.exports = graphql =>
  graphql(`
    {
      allContentfulPage {
        edges {
          node {
            id
            title
            meta
            slug
            template
          }
        }
      }
    }
  `).then($ => $.data)
