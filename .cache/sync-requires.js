const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/darrenackers/Projects/Personal/uk-carpets-and-flooring/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-checkout-js": hot(preferDefault(require("/Users/darrenackers/Projects/Personal/uk-carpets-and-flooring/src/templates/checkout.js"))),
  "component---src-templates-product-index-js": hot(preferDefault(require("/Users/darrenackers/Projects/Personal/uk-carpets-and-flooring/src/templates/product/index.js"))),
  "component---src-templates-products-index-js": hot(preferDefault(require("/Users/darrenackers/Projects/Personal/uk-carpets-and-flooring/src/templates/products/index.js"))),
  "component---src-templates-home-js": hot(preferDefault(require("/Users/darrenackers/Projects/Personal/uk-carpets-and-flooring/src/templates/home.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/darrenackers/Projects/Personal/uk-carpets-and-flooring/src/pages/404.js"))),
  "component---src-pages-callback-js": hot(preferDefault(require("/Users/darrenackers/Projects/Personal/uk-carpets-and-flooring/src/pages/callback.js"))),
  "component---src-pages-orders-js": hot(preferDefault(require("/Users/darrenackers/Projects/Personal/uk-carpets-and-flooring/src/pages/orders.js")))
}

