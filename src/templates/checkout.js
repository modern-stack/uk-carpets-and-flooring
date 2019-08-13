import React from 'react'

import SEO from '../components/seo'
import PrismicComponents from '../components/Prismic'
import CheckoutForm from '../components/CheckoutForm'
import Modal from '../components/Modal'

export default ({ pageContext }) => {
  return (
    <React.Fragment>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <React.Fragment>
        {pageContext.prismicPage.data.body.map($ => {
          const Component = PrismicComponents[$.slice_type]
          return Component ? <Component {...$} /> : null
        })}

        <Modal>
          <CheckoutForm />
        </Modal>
      </React.Fragment>
    </React.Fragment>
  )
}
