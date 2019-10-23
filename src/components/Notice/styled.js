import styled from 'styled-components'

export const Notice = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  background: black;
  color: white;
  height: ${$ => ($.closed ? 0 : 'auto')};
  visibility: ${$ => ($.closed ? 'hidden' : 'visible')};
  padding: 20px 20px 0px 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  z-index: 9999;
  transition: height 3s ease;
  text-align: center;

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    bottom: 20px;
    text-align: left;
  }
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
  cursor: pointer;
`
