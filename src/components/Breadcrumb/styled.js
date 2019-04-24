import styled from 'styled-components'

const Breadcrumb = styled.ul`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  padding: 0;

  li {
    list-style: none;

    position: relative;
    color: gray;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    width: 100%;
    text-align: center;
    flex-grow: 1;
    float: left;
    text-align: center;

    :not(:last-child):after {
      content: '';
      position: absolute;
      width: 1vmin;
      height: 1vmin;
      background: transparent;
      border-top: 0.2em solid gray;
      border-right: 0.2em solid gray;
      box-shadow: 0 0 0 gray;
      transition: all 200ms ease;
      margin: 0 16px;

      top: 50%;

      transform: translate3d(0, -50%, 0) rotate(45deg);
    }

    :last-child {
      a {
        color: red;
      }
    }
  }
`

export { Breadcrumb }
