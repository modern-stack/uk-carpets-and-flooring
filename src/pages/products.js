import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default class Products extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
    }
  }

  getProducts = async () => {
    return fetch('http://localhost:3000/products/list')
      .then(resp => resp.json())
      .then(function(data) {
        return data.data
      })
  }

  async componentDidMount() {
    this.setState({
      products: await this.getProducts(),
    })
  }

  renderProducts = () => {
    if (!this.state.products) return <div>Loading...</div>

    if (this.state.products)
      return this.state.products.map($ => (
        <Link
          to="/product/"
          innerRef={el => {
            this.myLink = el
          }}
          state={{
            pleasant: 'reasonably',
          }}
        >
          {$.name}
        </Link>
      ))
  }

  render() {
    return (
      <Layout>
        <SEO title="Products" />
        <h1>Product Page</h1>

        {this.renderProducts()}
      </Layout>
    )
  }
}
