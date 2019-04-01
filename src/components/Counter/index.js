import React, { useState, useEffect } from 'react'
import { Counter } from './styled'

export default ({ min, max, onChange, allowDecimals = true }) => {
  const [count, setCounter] = useState(min || 0, 0)

  const incrementCount = $ => {
    const count = parseFloat($) + 1
    onChange(count)
    setCounter(count)
  }

  const DecrementCount = $ => {
    if ($ - 1 < 0) {
      onChange(0)
      setCounter(0)
    } else {
      if (count > min) {
        const count = $ - 1
        onChange(count)
        setCounter(count)
      }
    }
  }

  const updateCounter = e => {
    if (!allowDecimals) {
      setCounter(Math.round(count))
    } else {
      onChange(e.target.value)
      setCounter(e.target.value)
    }
  }

  return (
    <Counter>
      <button
        type="button"
        onClick={() => DecrementCount(count)}
        disabled={count === min}
      >
        -
      </button>
      <input type="number" value={count} onChange={e => updateCounter(e)} />
      <button
        type="button"
        disabled={count === max}
        onClick={() => incrementCount(count)}
      >
        +
      </button>
    </Counter>
  )
}
