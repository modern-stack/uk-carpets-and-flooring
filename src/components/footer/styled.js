import styled from 'styled-components'

const Footer = styled.div`
  font-size: 12px;
  background-color: #3e3e3e;
  color: white;
  display: flex;
  flex: space-between;
  padding: 5% 2%;
  position: relative;
  height: 100%;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 5% 2%;

    & > div {
      padding: 50px 0;

      &:not(:last-child) {
        border-bottom: 0.1px solid white;
      }
    }
  }

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }
`

const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 700px) {
    display: flex;
    justify-content: space-around;
  }
`

const BuiltBy = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
  font-size: 1rem;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  & > div {
    align-content: center;
    display: flex;

    :last-child {
      border-bottom: 1px solid white;
      color: white;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${$ => $.flexdirection || 'row'};
  position: relative;
  align-content: center;
  padding: 0 2%;
  float: left;
  justify-content: center;

  &:not(:last-child) {
    border-right: 0.5px solid #ccc;

    @media (max-width: 700px) {
      border: 0;
    }
  }

  @media (max-width: 700px) {
    border: 0;
    padding: 0 10%;
  }
`

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  padding: 0 6%;
  font-size: 0.6vw;
  font-weight: 900;
  column-row-gap: 4px;
  grid-column-gap: 25px;

  & > div {
    display: flex;
    flex: 1;
  }

  @media (max-width: 700px) {
    font-size: 3vw;
    grid-template-columns: 1fr 1fr;
    border: 0;
    padding: 0 10%;
    width: 100%;
    grid-row-gap: 12px;
  }
`

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 4px;
`

export { Footer, Content, Links, Title, Social, BuiltBy }
