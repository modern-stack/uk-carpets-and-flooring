const faker = require('faker')
const { api, generateRandomNumber } = require('./helpers')

function run() {
  const promises = []

  for (var i = 0; i < generateRandomNumber(100); i++) {
    promises.push(
      api
        .post('products/create', {
          name: faker.commerce.productName(),
          type: 'good',
          attributes: ['color'],
        })
        .then($ => $.id)
    )
  }

  return Promise.all(promises).then($ => $.map($ => $))
}

module.exports = run
