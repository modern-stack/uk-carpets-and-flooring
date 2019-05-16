import styled from 'styled-components'

const EditAddress = styled.div`
  display: flex;
  width: 100%;
`

const Search = styled.div`
  width: 100%;

  & > div {
    display: flex;
    width: 100%;
  }
`

const Input = styled.input`
  padding: 12px;
  margin: 12px;
`

export { EditAddress, Search, Input }
