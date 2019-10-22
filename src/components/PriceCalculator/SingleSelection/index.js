import React, { useState, useEffect } from 'react'

import { Selection, Label } from './styled'

export default ({ onChange, price, max = 25 }) => {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    onChange({ amount: (quantity * price) / 100, quantity })
  }, [quantity])

  return (
    <div>
      <Label>Quantity:</Label>
      <Selection
        type="number"
        min="1"
        max={max}
        step="1"
        value={quantity}
        onChange={$ => setQuantity($.target.value)}
      />
    </div>
  )
}
