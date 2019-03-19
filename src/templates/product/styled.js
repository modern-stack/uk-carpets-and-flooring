import styled from 'styled-components'

const Header = styled.div`
  min-height: 100px;
`

const MainContent = styled.div`
  background: #f0f0f0;
`

const Product = styled.div`
  display: flex;
  padding: 60px 60px;
  max-height: 500px;
  width: 100%;

  & > div {
    flex: 1;
  }
`
const Slider = styled.div`
  margin: 10px 20px;
`

const ImageContainer = styled.div`
  width: 600px;
  height: 800px;
`

const Details = styled.div`
  background: white;
  padding: 20px;
`

export { Header, MainContent, Product, Details, Slider, ImageContainer }
