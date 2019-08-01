import styled from 'styled-components'
import { FaBed, FaCouch, FaLinkedinIn } from 'react-icons/fa'

const Bed = styled(FaBed)`
  display: flex;
  justify-content: center;
  color: white;
  background: #c7002b;
  width: 100%;
  font-size: 24px;
`

const Couch = styled(FaCouch)`
  display: flex;
  justify-content: center;
  color: white;
  background: #c7002b;
  width: 100%;
  font-size: 24px;
`

const Dining = styled(FaLinkedinIn)`
  display: flex;
  justify-content: center;
  color: white;
  background: #c7002b;
  width: 100%;
  font-size: 24px;
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  position: relative;
  margin: 6px;
  width: 100%;

  label {
    position: absolute;
    color: white;
    font-size: 10px;
    bottom: 2px;
  }
`

export { Bed, Couch, Dining, IconContainer }
