import React, { useState, useEffect } from 'react'
import Counter from '../../Counter'
import { Metres, Select } from './styled'

export default ({ onChange, price, max = 10 }) => {
  const [length, setLength] = useState(0)
  const [width, setWidth] = useState(4)

  useEffect(() => {
    console.log('>>>>>', length, width)
    onChange((length * width * price) / 100)
  }, [width, length])

  const renderList = max => {
    return (
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          {Array.from(Array(max)).map((e, i) => (
            <a value={i + 1}>{`${i + 1}`}</a>
          ))}
        </div>
      </div>
    )
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
