const path = require(`path`)

module.exports = (node, context, createPage) => {
  const { slug, template } = node

  console.log('Building page template >>>>>', slug)

  return new Promise(resolve => {
    createPage({
      path: `${slug}`,
      component: path.resolve(`./src/templates/${template.toLowerCase()}.js`),
      context: {
        ...node,
        ...context,
      },
    })

    console.log('resolving page template >>>>>', slug)

    return resolve()
  })
}
