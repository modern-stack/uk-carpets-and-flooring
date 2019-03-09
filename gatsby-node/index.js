const templates = require(`./templates`)
const allPages = require('./allPages')
const pageQuery = require('./page-query')
const allProducts = require('./allProducts')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { allContentfulPage } = await allPages(graphql)
  const { allContentfulSku } = await allProducts(graphql)

  const pages = []

  allContentfulPage.edges.map($ => {
    pages.push(
      new Promise(async resolve => {
        const { id, template } = $.node

        const context = await pageQuery({ graphql, id })

        console.log('Running >>>>', template)

        return resolve(
          templates[template]
            ? templates[template]({
                node: $.node,
                products: allContentfulSku,
                context,
                createPage,
              })
            : templates['page']($.node, context, createPage)
        )
      })
    )
  })

  return Promise.all(pages)
}
