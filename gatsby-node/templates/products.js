const path = require(`path`)

module.exports = async ({ graphql, createPage, products, node, context }) => {
  const formatted = node.slug.replace('/', '')

  const productType = formatted.charAt(0).toUpperCase() + formatted.slice(1)

  const { allContentfulProduct } = await graphql(`
  { 
    allContentfulProduct(filter: {productType: {name: {eq: "${productType}"}}}) {
      edges {
        node {
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
  `).then($ => $.data)

  return new Promise(resolve => {
    const skus = products.edges
      .filter($ => {
        return $.node.product && $.node.product[0].productType
      })
      .map($ => {
        return { ...$.node, product: $.node.product[0] }
      })

    if (allContentfulProduct) {
      allContentfulProduct.edges.map(product => {
        createPage({
          path: `${node.slug.toLowerCase()}/${product.node.name}`,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            ...context,
            skus: skus.filter($ =>
              product.node.productType.name.includes(productType)
            ),
          },
        })
      })
    }

    console.log('Skus >>>>>', skus)

    createPage({
      path: `${node.slug}`,
      component: path.resolve(`./src/templates/products/index.js`),
      context: {
        ...context,
        skus: skus.filter($ =>
          node.slug.includes($.product.productType.name.toLowerCase())
        ),
      },
    })

    return resolve()
  })
}
