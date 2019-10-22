import styled from 'styled-components'

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: ${$ => ($.open ? 0 : 100)};
`

export { Overlay }
