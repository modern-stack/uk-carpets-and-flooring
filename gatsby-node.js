const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulProduct {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `).then(result => {
    const { allContentfulProduct } = result.data

    allContentfulProduct.edges.map($ => {
      console.log($)
      createPage({
        path: `products/${$.node.name}`,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          id: $.node.id,
        },
      })
    })
  })
}
