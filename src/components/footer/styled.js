import styled from 'styled-components'

const Footer = styled.div`
  padding: 5% 10%;
  background: ${props => props.theme.branding.darkshade};
  display: flex;
  color: ${props => props.theme.branding.lightshade};
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  & > div {
    max-width: 20%;

    @media only screen and (max-width: 600px) {
      max-width: 100%;
    }
  }
`

export { Footer }
