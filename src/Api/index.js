export default {
  Stripe: (type, func, $, method = 'POST') => {
    return fetch(`http://localhost:3001/${type}/${func}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify($),
    })
  },
}
