const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allStripeSku {
        edges {
          node {
            product {
              id
              name
            }
          }
        }
      }
    }
  `).then(result => {
    const { allStripeSku } = result.data

    allStripeSku.edges.map($ => {
      createPage({
        path: `products/${$.node.product.name}`,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          id: $.node.product.id,
          // name: $.node.product.name,
          // skus: $.node.product.name.skus,
        },
      })
    })
  })
}
