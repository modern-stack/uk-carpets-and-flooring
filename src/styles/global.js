import { createGlobalStyle } from 'styled-components'
import { GothamBold } from './fonts'

export default createGlobalStyle`

@font-face {
    font-family: "Gotham";
    font-style: normal;
    font-weight: normal;
    src: url(${GothamBold}) format("ttf");
  }
  `
