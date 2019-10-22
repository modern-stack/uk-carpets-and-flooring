import styled from 'styled-components'

export const Notice = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  background: black;
  color: white;
  height: auto;
  padding: 20px;
  border-radius: 25px;
  z-index: 9999;
  transition: height 5s ease-in;
`

export const Content = styled.div`
  padding: 20px;

  a {
    color: white;
    text-decoration: underline;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  border-radius: 25px;
  background: #c7002b;
  color: white;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 10px;
`
