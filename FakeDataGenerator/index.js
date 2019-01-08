const faker = require('faker')
const generateProducts = require('./product')
const generateSkus = require('./sku')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

;(async () => {
  const products = await generateProducts()

  console.log('Done!')

  await sleep(2000)

  products.forEach($ => generateSkus($))
})()
