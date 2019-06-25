module.exports = ({ graphql, id }) => {
  return graphql(`
    {
      prismicPage(id: { eq: "${id}" }) {
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
                      fluid(quality: 100, maxWidth: 1080) {
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
            ... on PrismicPageBodySmallHero {
              id
              slice_type
              primary {
                title {
                  html
                  text
                }
                sub_title {
                  html
                  text
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
            ... on PrismicPageBodyHeader {
              id
              slice_type
              primary {
                title {
                  html
                  text
                }
                subtitle {
                  html
                  text
                }
              }
            }
          }
        }
      }
    }
  `).then($ => $.data)
}
