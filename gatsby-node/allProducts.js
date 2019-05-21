module.exports = graphql =>
  graphql(`
    {
      allPrismicSku {
        edges {
          node {
            data {
              name {
                html
                text
              }
              price
              featuredimage {
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
              body {
                slice_type
                items {
                  product1 {
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
                              fluid(
                                quality: 100
                                maxHeight: 1280
                                maxWidth: 1920
                              ) {
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

      console.log('sku >>>', sku.data.product.document[0].data.product_type)
      if (sku.data.product) {
        if (!byProductType[sku.data.product.document[0].data.product_type]) {
          byProductType[sku.data.product.document[0].data.product_type] = []
        }
        byProductType[sku.data.product.document[0].data.product_type].push(sku)
      }
    }

    return {
      allSkus: $.data.allPrismicSku,
      byProductType,
    }
  })
