import React from 'react'
import { Bed, Couch, Dining, IconContainer } from './styled'

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
    <label>Hall and Stairs</label>
  </IconContainer>
)

const DiningRoomIcon = () => (
  <IconContainer>
    <Bed />
    <label>Dining Room</label>
  </IconContainer>
)

export { BedroomIcon, LivingRoomIcon, HallStairsIcon, DiningRoomIcon }
