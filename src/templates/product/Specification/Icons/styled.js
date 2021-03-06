import styled from 'styled-components'
import { FaBed, FaCouch } from 'react-icons/fa'
import { GiStairs } from 'react-icons/gi'

const Bed = styled(FaBed)`
  display: flex;
  justify-content: center;
  color: white;
  background: #c7002b;
  width: 100%;
  font-size: 24px;
  padding: 10px 0 30px 0;
`

const Couch = styled(FaCouch)`
  display: flex;
  justify-content: center;
  color: white;
  background: #c7002b;
  width: 100%;
  font-size: 24px;
  font-size: 24px;
  padding: 10px 0 30px 0;
`

const Stairs = styled(GiStairs)`
  display: flex;
  justify-content: center;
  color: white;
  background: #c7002b;
  width: 100%;
  font-size: 24px;
  padding: 10px 0 30px 0;
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
    bottom: 8px;
  }
`

export { Bed, Couch, Stairs, IconContainer }
