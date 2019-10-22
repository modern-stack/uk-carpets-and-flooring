import React, { useState, useEffect } from 'react'
import Counter from '../../Counter'
import { Metres, Select } from './styled'

export default ({ onChange, price, max = 25 }) => {
  const [length, setLength] = useState(0)
  const [width, setWidth] = useState(4)

  useEffect(() => {
    onChange({
      amount: (parseInt(length) * parseInt(width) * price) / 1000,
      quantity: 1,
      description: `${length}(L) X ${width}(W)`,
    })
  }, [width, length])

  const renderList = max => {
    return Array.from(Array(max)).map((e, i) => (
      <option value={i + 1}>{`${i + 1}`}</option>
    ))
  }

  return (
    <React.Fragment>
      <Metres>
        <label>Length(Metres): </label>
        <Select onChange={$ => setLength($.target.value)}>
          {renderList(max)}
        </Select>
      </Metres>
      <Metres>
        <label>Width(Metres): </label>
        <Select onChange={$ => setWidth($.target.value)}>
          <option value={4}>{`${4}`}</option>
          <option value={5}>{`${5}`}</option>
        </Select>
      </Metres>
    </React.Fragment>
  )
}
