import styled from 'styled-components'

const Banners = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 6px;
  grid-column-gap: 6px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, auto));
  justify-items: center;
  align-items: center;
  position: relative;

  & > div {
    :first-child {
      grid-row: span 2;
    }

    :nth-child(3) {
      grid-row: span 2;
    }
  }

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`

const ContentfulBanners = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  padding: 12px;

  @media (max-width: 700px) {
    height: 100%;
  }
`

export { ContentfulBanners, Banners }
