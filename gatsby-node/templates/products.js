const path = require(`path`)

module.exports = async ({ createPage, graphql, node, context }) => {
  return graphql(`
    {
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
    const { allContentfulSku } = result.data

    const skus = allContentfulSku.edges
      .filter($ => {
        return (
          $.node.product &&
          $.node.product.length &&
          $.node.product[0].productType &&
          node.slug.includes($.node.product[0].productType.name)
        )
      })
      .map($ => {
        return { ...$.node, product: $.node.product[0] }
      })

    console.log('skus >>>>>', skus)

    // createPage({
    //   path: `${slug}`,
    //   component: path.resolve(`./src/templates/products.js`),
    //   context: {
    //     ...context,
    //     skus,
    //   },
    // })

    return Promise.resolve()
  })
}
