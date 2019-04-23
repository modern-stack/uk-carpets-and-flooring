export default {
  stripe: (type, func, $) => {
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
