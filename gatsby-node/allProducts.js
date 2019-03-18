module.exports = graphql =>
  graphql(`
    {
      allContentfulSku {
        edges {
          node {
            id
            name
            price
            colour
            featuredImage {
              id
              fluid(quality: 50, maxWidth: 150, maxHeight: 150) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
            product {
              id
              name
              productType {
                id
                name
              }
            }
          }
        }
      }
    }
  `).then($ => $.data)
