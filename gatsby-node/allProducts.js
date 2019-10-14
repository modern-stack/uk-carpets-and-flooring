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
              body {
                ... on PrismicSkuBodyRelatedProducts {
                  slice_type
                  items {
                    product: product1 {
                      slug
                      sku: document {
                        data {
                          name {
                            html
                            text
                          }
                          sku_product: product {
                            document {
                              data {
                                name
                                product_type
                              }
                            }
                          }
                          price
                          
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
