module.exports = graphql =>
  graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            data {
              name {
                html
                text
              }
              slug {
                text
              }
              template
            }
          }
        }
      }
    }
  `).then($ => $.data)
