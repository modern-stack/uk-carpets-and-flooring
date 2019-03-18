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

    const filters = {
      colours: Array.from(
        new Set(
          skus
            .filter(
              $ =>
                $.product.productType.name.includes(productType) && !!$.colour
            )
            .map($ => {
              return {
                name: $.colour,
                count: skus.filter($$ => $$.colour === $.colour).length,
              }
            })
        )
      ),

      collection: Array.from(
        new Set(
          skus
            .filter($ => $.product.productType.name.includes(productType))
            .map($ => $.product.name)
        )
      ).map($ => {
        return {
          name: $,
          count: skus.filter($$ => $$.product.name === $).length,
        }
      }),
    }

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
            filters,
          },
        })
      })
    }

    createPage({
      path: `${node.slug}`,
      component: path.resolve(`./src/templates/products/index.js`),
      context: {
        ...context,
        skus: skus.filter($ =>
          node.slug.includes($.product.productType.name.toLowerCase())
        ),
        filters,
      },
    })

    return resolve()
  })
}
