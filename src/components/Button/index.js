import styled from 'styled-components'

const Button = styled.div`
  font-family: Gotham-Medium;
  color: white;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border: none;
  width: 100%;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }

  :active {
    transform: translateY(4px);
    border: none;
  }
`
const Primary = styled(Button)`
  font-family: Gotham-Medium;
  background: #c7002b;

  :disabled {
    color: black;
    background: lightgray;
  }
`

const Secondary = styled(Button)`
  font-family: Gotham-Medium;
  background: black;
`

const Tertiary = styled(Button)`
  font-family: Gotham-Medium;
  background: white;
  border: 1px solid black;
  color: black;
  border-radius: 5px;
`

export { Primary, Secondary, Tertiary }
