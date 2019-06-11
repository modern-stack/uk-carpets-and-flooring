import styled from 'styled-components'

const Button = styled.button`
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
  background: #c7002b;
`

const Secondary = styled(Button)`
  background: black;
`

const Tertiary = styled(Button)`
  background: white;
  border: 1px solid black;
  color: black;
  border-radius: 5px;
`

export { Primary, Secondary, Tertiary }
