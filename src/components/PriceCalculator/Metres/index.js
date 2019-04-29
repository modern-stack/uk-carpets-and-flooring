import React, { useState, useEffect } from 'react'
import Counter from '../../Counter'
import { Metres } from './styled'

export default () => {
  const [length, setLength] = useState(0)
  const [width, setWidth] = useState(4)

  // handleChange = (type, value) => {
  //   const obj = { ...this.state }
  //   obj[type] = value

  //   this.props.setPrice(obj.length * obj.width)

  //   this.setState({
  //     ...obj,
  //   })
  // }

  return (
    <React.Fragment>
      <Metres>
        <label>Length: </label>

        <label>Width: </label>
        <Counter
          min={4}
          max={5}
          // onChange={e => this.handleChange('width', e)}
        />
      </Metres>
      <Metres>
        <label>Length: </label>

        <label>Width: </label>
        <Counter
          min={4}
          max={5}
          onChange={e => this.handleChange('width', e)}
        />
      </Metres>
    </React.Fragment>
  )
}
