import styled from 'styled-components'

const Breadcrumb = styled.ul`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  padding: 0;

  li {
    list-style: none;
    color: black;

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

    a,
    link,
    visited,
    focus,
    hover,
    active {
      text-decoration: none;
      color: black;
    }

    :not(:last-child):after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      background: transparent;
      border-top: 3px solid gray;
      border-right: 3px solid gray;
      box-shadow: 0 0 0 grey;
      -webkit-transition: all 200ms ease;
      transition: all 200ms ease;
      margin: 0 16px;
      top: 50%;
      -webkit-transform: translate3d(0, -50%, 0) rotate(45deg);
      -ms-transform: translate3d(0, -50%, 0) rotate(45deg);
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
