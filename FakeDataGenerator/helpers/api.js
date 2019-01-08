const fetch = require('node-fetch')

function post(type, content) {
  return fetch(`http://localhost:3000/${type}/`, {
    method: 'POST',
    body: JSON.stringify({
      ...content,
    }),
    headers: { 'Content-Type': 'application/json' },
    json: true,
  }).then(async $ => {
    const result = await $.json()
    return result
  })
}

function get(type, slug) {
  return fetch(`http://localhost:3000/${type}/${slug}`, {
    method: 'Get',
  }).then(async $ => {
    const result = await $.json()
    return result
  })
}

module.exports = {
  get,
  post,
}
