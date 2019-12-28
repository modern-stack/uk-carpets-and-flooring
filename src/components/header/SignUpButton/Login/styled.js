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

  @media (max-width: 700px) {
    margin: 0 20px;
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`

export const CreateAccount = styled.div`
  padding: 30px 0;
`

export const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 12px;
`

export const SubTitle = styled.div`
  font-size: 1rem;
  text-align: center;
  margin: 12px;
`
