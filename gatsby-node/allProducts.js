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
              lengths
              width
              description
              thickness
              price
              color
              pile
              species
              gloss
              edge
              residential_warranty
              commercial_warranty
              width
              backing
              suitability
              icons
              featuredimage {
                _4_3 {
                  localFile {
                    childImageSharp {
                      fluid(quality: 100, maxHeight: 1280, maxWidth: 960) {
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
                localFile {
                  childImageSharp {
                    fluid(quality: 100, maxHeight: 960, maxWidth: 1280) {
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
                        price
                        featuredimage {
                          localFile {
                            childImageSharp {
                              fluid(
                                quality: 100
                                maxHeight: 960
                                maxWidth: 1280
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
                  id
                  data {
                    name
                    product_type
                    featured_image {
                      localFile {
                        childImageSharp {
                          fluid(quality: 100, maxHeight: 700, maxWidth: 350) {
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
    console.log('$ >>>>', $)
    const { allPrismicSku } = $.data
    let byProductType = []

    for (let $ = 0; $ < allPrismicSku.edges.length; $++) {
      const sku = allPrismicSku.edges[$].node

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
