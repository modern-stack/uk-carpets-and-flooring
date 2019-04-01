import React, { useState } from 'react'

import { FeetAndInches, Form, Length, Width } from './styled'

export default ({ setTotal }) => {
  const [width, setWidth] = useState(13.1)
  const [length, setLength] = useState(0)

  return (
    <FeetAndInches>
      <label>Length: </label>
      <div />
      <label>Width: </label>
      <Form>
        <Length
          type="number"
          min="0"
          max="5"
          step={0.5}
          onChange={$ => {
            setLength($.target.value)
            setTotal(width * $.target.value)
          }}
          placeholder={'Enter a Length'}
          value={length}
        />
      </Form>
      <div />

      <Form>
        <Width
          onChange={$ => {
            // setWidth($.target.value)
            setTotal($.target.value * length)
          }}
          placeholder={'Enter a Width'}
        >
          {[13.1, 16.4].map(m => {
            return <option selected={m === width}>{m}</option>
          })}
        </Width>
      </Form>
    </FeetAndInches>
  )
}
