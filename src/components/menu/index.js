import React from 'react'
import { Menu, MenuItem, SubMenu } from './styled'

export default () => (
  <Menu>
    <MenuItem>
      <span>Home</span>
    </MenuItem>
    <MenuItem>
      Carpets
      <SubMenu>
        <div>stuff</div>
        <div>more stuff</div>
      </SubMenu>
    </MenuItem>
    <MenuItem>Laminates</MenuItem>
    <MenuItem>Vinyls</MenuItem>
    <MenuItem>Accessories</MenuItem>
  </Menu>
)
