import styled from 'styled-components'

const Primary = styled.button`
  background: ${$ => ($.selected ? 'green' : '#c7002b')};
  color: white;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border: none;

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

export { Primary }
