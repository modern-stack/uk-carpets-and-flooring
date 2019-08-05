import styled from 'styled-components'

const Review = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (max-width: 700px) {
    width: 100%;
  }

  & > div {
    flex-wrap: wrap;
    display: flex;
    text-align: center;
  }
`

export { Review }
