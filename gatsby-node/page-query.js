module.exports = ({ graphql, id }) => {
  return graphql(`
    {
      prismicPage(id: { eq: "Prismic__Page__XN6q5xAAAOk6prku" }) {
        id
        slugs
        data {
          name {
            html
            text
          }
          slug {
            text
          }
          template
          body {
            ... on PrismicPageBodyImageGallery {
              id
              slice_type
              items {
                title {
                  html
                  text
                }
                description {
                  html
                }
                gallery_image {
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
            ... on PrismicPageBodyBannerGallery {
              id
              slice_type
              items {
                title {
                  html
                  text
                }
                subcontent {
                  html
                  text
                }
                content {
                  html
                  text
                }
                cta {
                  html
                  text
                }
                link {
                  link_type
                  url
                  target
                }
                image {
                  localFile {
                    childImageSharp {
                      fluid(quality: 100, maxHeight: 720, maxWidth: 1280) {
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
  `).then($ => {
    console.log('>>>>', $)
    return $.data
  })
}
