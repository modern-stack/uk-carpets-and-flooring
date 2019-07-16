import styled from 'styled-components'

const Modal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 75%;
    height: 75%;
    background: white;
    margin: 12px;

    @media (max-width: 700px) {
      width: 100%;
      height: 100%;
      margin: 0px;
    }
  }
`

export { Modal }
