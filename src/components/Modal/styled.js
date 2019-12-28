import styled from 'styled-components'

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  height: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

  .overlay {
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    position: relative;
    background: white;
    width: 75%;
    height: 75%;

    @media (max-width: 700px) {
      width: 100%;
      height: 100%;
    }
  }
`

const CloseButton = styled.div`
  position: absolute;
  z-index: 9999;
  cursor: pointer;
  right: 0px;
  top: 0px;
`

export { Modal, CloseButton }
