import styled from 'styled-components'

const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 30px 0 20px;

  span {
    background: #fff;
    padding: 0 10px;

    @media (max-width: 700px) {
      padding: 0 2px;
    }
  }
`

const SubTitle = styled.div`
  font-family: Gotham-Book;
  text-align: center;
  display: flex;

  div {
    flex: 1;

    @media (max-width: 700px) {
      :first-child,
      :last-child {
        display: none;
      }
    }
  }
`

export { ProductHeader, Title, SubTitle }
