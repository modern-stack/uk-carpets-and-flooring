const templates = require(`./templates`)
const allPages = require('./allPages')
const pageQuery = require('./page-query')
const allProducts = require('./allProducts')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { allPrismicPage } = await allPages(graphql)

  const skus = await allProducts(graphql)
  const pages = []
  allPrismicPage.edges.map($ => {
    pages.push(
      new Promise(async resolve => {
        const { id, data } = $.node
        const context = await pageQuery({ graphql, id })

        const template = data.template

        return resolve(
          templates[template]
            ? templates[template]({
                graphql,
                node: $.node,
                skus,
                context,
                createPage,
              })
            : templates['default']($.node, context, createPage)
        )
      })
    )
  })
  return Promise.all(pages)
}
