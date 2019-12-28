import styled from 'styled-components'

export const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .form-item {
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;
    width: 100%;
  }

  .forgotten {
    text-align: right;
    padding: 0;
    margin: 0;
  }

  input {
    padding: 5px 0 5px 0;
    border-left: 0px solid;
    border-top: 0px solid;
    border-right: 0px solid;
    outline: none;
  }

  .cta {
    display: flex;
    align-items: center;
    padding: 30px 0;
    width: 100%;
    justify-content: center;
  }
`
