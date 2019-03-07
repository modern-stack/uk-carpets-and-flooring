const path = require(`path`)

module.exports = async ({ createPage, graphql }) => {
  return graphql(`
    {
      allContentfulProductType {
        edges {
          node {
            id
            name
          }
        }
      }
      allContentfulSku {
        edges {
          node {
            id
            name
            featuredImage {
              id
              fixed {
                base64
                tracedSVG
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
            product {
              id
              productType {
                id
                name
              }
            }
          }
        }
      }
    }
  `).then(result => {
    const { allContentfulSku, allContentfulProductType } = result.data

    allContentfulProductType.edges.forEach(({ node }) => {
      const skus = allContentfulSku.edges
        .filter($ => {
          return (
            $.node.product &&
            $.node.product.length &&
            $.node.product[0].productType &&
            $.node.product[0].productType.name === node.name
          )
        })
        .map($ => {
          return { ...$.node, product: $.node.product[0] }
        })

      createPage({
        path: `${node.name.toLowerCase()}`,
        component: path.resolve(`./src/templates/products.js`),
        context: {
          skus,
        },
      })
    })

    return Promise.resolve()
  })
}
