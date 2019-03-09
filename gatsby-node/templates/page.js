const path = require(`path`)

module.exports = (node, context, createPage) => {
  const { slug, template } = node

  return new Promise(resolve => {
    createPage({
      path: `${slug}`,
      component: path.resolve(`./src/templates/${template.toLowerCase()}.js`),
      context: {
        ...node,
        ...context,
      },
    })

    return resolve()
  })
}
