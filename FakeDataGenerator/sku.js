const faker = require('faker')
const { api, generateRandomNumber } = require('./helpers')

function run(product) {
  const promises = []

  for (var i = 0; i < generateRandomNumber(100); i++) {
    promises.push(
      api
        .post('skus/create', {
          product,
          attributes: { color: faker.commerce.color() },
          price: 1500,
          currency: 'gbp',
          inventory: { type: 'finite', quantity: 500 },
          image: faker.image.imageUrl(400, 400, 'people'),
        })
        .then($ => $.id)
    )
  }
  return Promise.all(promises).then($ => $.map($ => $))
}

module.exports = run
