import React from 'react'
import { Bed, Couch, Dining, IconContainer } from './styled'

let Components = []

const BedroomIcon = () => (
  <IconContainer>
    <Bed />
    <label>Bedroom</label>
  </IconContainer>
)

const LivingRoomIcon = () => (
  <IconContainer>
    <Couch />
    <label>Living Room</label>
  </IconContainer>
)

const HallStairsIcon = () => (
  <IconContainer>
    <Dining />
    <label>Hall & Stairs</label>
  </IconContainer>
)

const DiningRoomIcon = () => (
  <IconContainer>
    <Bed />
    <label>Dining Room</label>
  </IconContainer>
)

Components['bedroom'] = BedroomIcon
Components['livingroom'] = LivingRoomIcon
Components['hallstairs'] = HallStairsIcon
Components['diningroom'] = DiningRoomIcon

export default Components
