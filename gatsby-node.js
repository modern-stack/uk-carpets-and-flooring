const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulPage {
        edges {
          node {
            id
            title
            slug
            template
            content {
              ... on ContentfulCarousel {
                id
                name
                slides {
                  title
                  content
                  cta
                  image {
                    fluid(quality: 50, maxHeight: 700, maxWidth: 1240) {
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
              ... on ContentfulBanner {
                id
                title
                subtext
                image {
                  fluid(quality: 50, maxHeight: 700, maxWidth: 1240) {
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
              ... on ContentfulProductHeader {
                id
                title
                subTitle
              }
              ... on ContentfulProductList {
                id
                type
              }
            }
          }
        }
      }
      allContentfulProduct {
        edges {
          node {
            id
            name
            featuredImage {
              fixed {
                width
                height
              }
            }
          }
        }
      }
    }
  `).then(result => {
    const { allContentfulProduct, allContentfulPage } = result.data

    // allContentfulProduct.edges.map($ => {
    //   createPage({
    //     path: `products/${$.node.name}`,
    //     component: path.resolve(`./src/templates/product.js`),
    //     context: {
    //       id: $.node.id,
    //     },
    //   })
    // })

    allContentfulPage.edges.map($ => {
      const { content, slug, template } = $.node

      console.log('>>>>', content, slug, template)

      createPage({
        path: `${slug}`,
        component: path.resolve(`./src/templates/${template.toLowerCase()}.js`),
        context: content,
      })
    })
  })
}

// const getProduct = (product, getNode) => {
//   if (!product || !product.length) return null

//   const $ = getNode(product[0])
//   const { name } = getNode($.productType___NODE)

//   return {
//     id: $.id,
//     productType: name,
//   }
// }

// exports.onCreatePage = async ({ getNodes, getNode, page, actions }) => {
//   const { createPage, deletePage } = actions

//   if (['/carpets/', '/laminates/', 'accessories/'].includes(page.path)) {
//     deletePage(page)

//     const skus = await getNodes()
//       .filter($ => $.internal.type.includes('ContentfulSku'))
//       .map($ => {
//         return {
//           id: $.id,
//           name: $.name,
//           product: getProduct($.product___NODE, getNode),
//         }
//       })

//     const context = skus.filter(
//       $ => !!$.product && $.product.productType === 'Carpets'
//     )

//     createPage({
//       ...page,
//       context,
//     })

//     return Promise.resolve()
//   }
// }
