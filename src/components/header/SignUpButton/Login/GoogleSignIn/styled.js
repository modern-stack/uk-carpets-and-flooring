import styled from 'styled-components'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

export const LoginButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const SocialButton = styled.div`
  width: 100%;
  color: white;
  align-items: center;
  justify-content: center;
  margin: 0px 6px;
  display: flex;
  flex: 1 auto;

  background: ${({ background }) => `${background}`};

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }

  @media (max-width: 700px) {
    margin: 10px 0;
  }

  .text {
    text-align: center;
    width: 100%;
  }
`

export const Facebook = styled(FaFacebook)`
  display: flex;
  color: white;
  padding: 6px 6px;
  font-size: 24px;
  font-size: 24px;
`

export const Google = styled(FaGoogle)`
  display: flex;
  color: white;
  padding: 6px 6px;
  font-size: 24px;
  font-size: 24px;
`
