const templates = require(`./templates`)
const allPages = require('./allPages')
const pageQuery = require('./page-query')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { allContentfulPage } = await allPages(graphql)

  const pages = []

  allContentfulPage.edges.map($ => {
    pages.push(
      new Promise(async resolve => {
        const { id, template } = $.node

        const context = await pageQuery({ graphql, id })

        return resolve(
          templates[template]
            ? templates[template]({
                node: $.node,
                graphql,
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
