module.exports = ({ graphql, id }) => {
  return graphql(`
    {
      contentfulPage(id: { eq: "${id}" }) {
        id
        title
        slug
        template
        content {
          ... on ContentfulCarousel {
            id
            name
            internal {
              type
            }
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
            internal {
              type
            }
            image {
              fluid(quality: 50, maxHeight: 600, maxWidth: 1140) {
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
          ... on ContentfulBanners {
            id
            name
            internal {
              type
              contentDigest
              owner
            }
            banners {
                id
                title
                subtext
                subtitle
                content
                cta
                image {
                  id
                  fluid {
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
                link
                internal {
                  type
                }
              }
          }
          ... on ContentfulProductHeader {
            id
            title
            subTitle
            internal {
              type
            }
          }
          ... on ContentfulProductList {
            id
            type
            internal {
              type
            }
          }
        }
      }
    }
  `).then($ => $.data)
}
