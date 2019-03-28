import styled from 'styled-components'

const ProductFilter = styled.div`
  padding: 0px 20px;
  margin-right: 20px;

  /* @media (max-width: 700px) {
    position: fixed;
    height: 80%;
    background: lightgray;

    bottom: 40px;
    right: 0;
    left: 0;
    margin: 0px 16px;
    z-index: 9999;
    overflow-y: scroll;

    body:not(&) {
      position: fixed;
    }
  } */
`

const Title = styled.div``

const SubTitle = styled.div``

const Selected = styled.div`
  width: 8px;
  height: 8px;
  position: relative;
  background: white;
  overflow: hidden;
  padding: 3px;
  border: 1px solid black;
  margin-right: 20px;

  :after {
    content: '';
    background: ${$ => ($.selected ? 'black' : 'white')};
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
  }
`

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 20px 0px;
  border-bottom: 1px solid grey;

  & > div {
    padding: 10px 0;
  }
`

const Option = styled.div`
  display: flex;
`

const OptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`

export {
  ProductFilter,
  Title,
  SubTitle,
  Selection,
  Selected,
  OptionHeader,
  Option,
}
