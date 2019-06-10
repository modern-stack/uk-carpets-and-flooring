import styled from 'styled-components'

const LoadingOverlay = styled.div`
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: ${$ => ($.isVisible ? 'flex' : 'none')};
  text-align: center;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.7);
  color: white;
`

const Content = styled.div`
  display: grid;
  gird-template-column: 1fr;
`

export { LoadingOverlay, Content }
