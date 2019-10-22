import React from 'react'
import { Calculator } from './styled'

import SingleSelection from './SingleSelection'
import MetresSquared from './MetresSquared'

const components = {
  ['Single Selection']: SingleSelection,
  ['Metres Squared']: MetresSquared,
}

export default ({ type, price = 1, onChange }) => {
  const Component = components[type] || components['Metres Squared']
  return (
    <Calculator>
      <Component onChange={onChange} price={price} />
    </Calculator>
  )
}
