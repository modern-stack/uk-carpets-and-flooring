import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  width: 100%
  justify-content: space-between;
  flex-direction: column;

  &:first-child {
    grid-row: span 2;
  }
`

export { Container, Content, Overlay }
