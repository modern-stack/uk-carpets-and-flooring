import styled from 'styled-components'

const Review = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    padding: 0 8px;
    flex-wrap: wrap;
    display: flex;
    text-align: center;

    &:not(:last-child) {
      border-right: 0.5px solid #ccc;
    }
  }
`

export { Review }
