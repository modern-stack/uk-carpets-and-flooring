const path = require(`path`)

module.exports = async ({ createPage, products, node, context }) => {
  console.log('Building product template >>>>>', products)

  return new Promise(resolve => {
    const skus = products.edges
      .filter($ => {
        return (
          $.node.product &&
          $.node.product[0].productType &&
          node.slug.includes($.node.product[0].productType.name.toLowerCase())
        )
      })
      .map($ => {
        return { ...$.node, product: $.node.product[0] }
      })

    skus.map($ =>
      createPage({
        path: `${node.slug}/${$.name}`,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          ...context,
          ...$,
        },
      })
    )

    createPage({
      path: `${node.slug}`,
      component: path.resolve(`./src/templates/products/index.js`),
      context: {
        ...context,
        skus,
      },
    })

    console.log('resolving product template >>>>>', node.slug)

    return resolve()
  })
}
