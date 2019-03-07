const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return Promise.all([require('./createProductPages')({ createPage, graphql })])
}
