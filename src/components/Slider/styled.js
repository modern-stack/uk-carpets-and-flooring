import styled from 'styled-components'

const Slider = styled.div`
  display: grid;
  grid-auto-flow: ${$ => $.oritentation};
  grid-column-gap: 6px;
  overflow: auto;
  height: 100%;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 700px) {
    grid-auto-flow: column;
    overflow: auto;
  }
`

const Conatainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    flex-direction: row;
    align-items: center;
  }
`

const IconContainer = styled.div`
  div:first-child {
    display: block;

    @media (max-width: 700px) {
      display: none;
    }
  }

  div:last-child {
    display: none;

    @media (max-width: 700px) {
      display: block;
    }
  }
`

export { Conatainer, Slider, IconContainer }
