const path = require(`path`)

module.exports = async ({ graphql, createPage, skus, node, context }) => {
  const formatted = node.slug.replace('/', '')
  const productType = formatted.charAt(0).toUpperCase() + formatted.slice(1)

  const { byProductType } = skus
  const filteredSkus = byProductType[productType] || []

  const { allContentfulProduct } = await graphql(`
    {
      allContentfulProduct(
        filter: { productType: { name: { eq: "${productType}" } } }
      ) {
        edges {
          node {
            id
            name
            productType {
              name
              priceCalculator {
                name
              }
            }
          }
        }
      }
    }
  `).then($ => $.data)

  return new Promise(resolve => {
    const filters = {
      colors: Array.from(
        new Set(
          filteredSkus
            .filter(
              $ => $.product.productType.name.includes(productType) && !!$.color
            )
            .map($ => {
              return {
                name: $.color,
                count: filteredSkus.filter($$ => $$.color === $.color).length,
              }
            })
        )
      ),

      collection: Array.from(
        new Set(filteredSkus.map($ => $.product.name))
      ).map($ => {
        return {
          name: $,
          count: filteredSkus.filter($$ => $$.product.name === $).length,
        }
      }),
    }

    if (allContentfulProduct) {
      allContentfulProduct.edges.map($ => {
        console.log('product >>>>', $)
        createPage({
          path: `${node.slug.toLowerCase()}/${$.node.name}`,
          component: path.resolve(`./src/templates/product/index.js`),
          context: {
            ...context,
            ...$,
            skus: filteredSkus,
          },
        })
      })
    }

    createPage({
      path: `${node.slug}`,
      component: path.resolve(`./src/templates/products/index.js`),
      context: {
        ...context,
        skus: filteredSkus,
        filters,
      },
    })

    return resolve()
  })
}
