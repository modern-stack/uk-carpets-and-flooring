const path = require(`path`)

module.exports = async ({ graphql, createPage, skus, node, context }) => {
  const formatted = node.data.slug.text.replace('/', '')
  const productType = formatted.charAt(0).toUpperCase() + formatted.slice(1)

  const { byProductType } = skus
  const filteredSkus = byProductType[productType] || []

  const { allPrismicProduct } = await graphql(`
  {
    allPrismicProduct(filter: {data: {product_type: {eq: "${productType}"}}}) {
      edges {
        node {
          id
          data {
            name 
            product_type
            featured_image {
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxHeight: 1280, maxWidth: 1920) {
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
              }
            }
          }
        }
      }
    }
  }
  
  `).then($ => $.data)

  return new Promise(resolve => {
    if (allPrismicProduct) {
      allPrismicProduct.edges.map($ => {
        createPage({
          path: `${node.data.slug.text.toLowerCase()}/${$.node.data.name.toLowerCase()}`,
          component: path.resolve(`./src/templates/product/index.js`),
          context: {
            ...context,
            ...$,
            skus: filteredSkus.filter(
              $$ =>
                $$.data.product && $$.data.product.document[0].id === $.node.id
            ),
          },
        })
      })
      createPage({
        path: `${node.data.slug.text}`,
        component: path.resolve(`./src/templates/products/index.js`),
        context: {
          ...context,
          products: allPrismicProduct.edges,
        },
      })
    }

    return resolve()
  })
}
