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
          skus {
            id
            name
            title
            featuredImage {
              id
              fluid(maxHeight: 400) {
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
            size
            price
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
          component: path.resolve(`./src/templates/product/index.js`),
          context: {
            ...context,
            ...product,
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
