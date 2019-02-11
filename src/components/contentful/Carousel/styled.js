import styled from 'styled-components'

const CarouselContainer = styled.div`
  max-width: 100%;
`

const Selectors = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Slide = styled.div`
  position: relative;
  overflow: hidden;
  height: ${props => (props.visible ? '80vh' : 0)};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`

export { CarouselContainer, Slide, Selectors }
