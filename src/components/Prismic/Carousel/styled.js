import styled from 'styled-components'

const DesktopContainer = styled.div`
  display: block;
  position: relative;
  height: 100%;

  @media (max-width: 700px) {
    display: none;
  }
`

const MobileContainer = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: block;
    position: relative;
    height: 100%;
  }
`

const Carousel = styled.div`
  display: block;
`

export { Carousel, DesktopContainer, MobileContainer }
