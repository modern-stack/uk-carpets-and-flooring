// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-stripe`,
    options: {
      objects: [
        'Balance',
        'BalanceTransaction',
        'Product',
        'ApplicationFee',
        'Sku',
        'Subscription',
      ],
      secretKey: 'stripe_secret_key_here',
      downloadFiles: true,
    },
  },
]
