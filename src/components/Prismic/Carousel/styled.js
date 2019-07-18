import styled from 'styled-components'

const DesktopContainer = styled.div`
  display: block;
  position: relative;
  height: 80vh;

  @media (max-width: 700px) {
    display: none;
  }
`

const Carousel = styled.div`
  display: block;
`

export { Carousel, DesktopContainer, MobileContainer }
