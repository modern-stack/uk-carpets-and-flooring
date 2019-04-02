import styled from 'styled-components'

const Breadcrumb = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;

  & > div {
    position: relative;

    :not(:last-child):after {
      content: '';
      position: absolute;
      width: 1.5vmin;
      height: 1.5vmin;
      background: transparent;
      border-top: 0.5vmin solid gray;
      border-right: 0.5vmin solid gray;
      box-shadow: 0 0 0 gray;
      transition: all 200ms ease;
      right: -50%;
      top: 50%;

      transform: translate3d(0, -50%, 0) rotate(45deg);
    }

    :last-child {
      color: red;
    }
  }
`

export { Breadcrumb }
