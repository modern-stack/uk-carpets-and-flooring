module.exports = graphql =>
  graphql(`
    {
      allPrismicSku {
        edges {
          node {
            id
            data {
              name {
                html
                text
              }
              price
              product {
                document {
                  data {
                    name {
                      html
                      text
                    }
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
        }
      }
    }
  `).then($ => {
    const { allPrismicSku } = $.data
    let byProductType = []

    for (let $ = 0; $ < allPrismicSku.edges.length; $++) {
      const sku = allPrismicSku.edges[$].node
      if (sku.product) {
        if (!byProductType[sku.product.productType.name]) {
          byProductType[sku.product.productType.name] = []
        }
        byProductType[sku.product.productType.name].push(sku)
      }
    }

    return {
      allSkus: $.data.allPrismicSku,
      byProductType,
    }
  })
