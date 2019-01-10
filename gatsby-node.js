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
              skus {
                object
                has_more
                total_count
                url
              }
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
          name: $.node.product.name,
          skus: $.node.product.name.skus,
        },
      })
    })
  })
}
