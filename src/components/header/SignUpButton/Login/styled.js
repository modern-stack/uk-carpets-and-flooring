import styled from 'styled-components'

export const Information = styled.div`
  display: flex;
  background-color: #a6c6b8;
  height: 100%;
  width: 100%;

  @media (max-width: 700px) {
    display: none;
  }
`

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  height: 100%;
  width: 100%;
  margin: 0 120px;
`

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`
