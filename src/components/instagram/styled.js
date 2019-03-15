import styled from 'styled-components'

const Instagram = styled.div`
  margin: 0 auto;
  padding-top: 0;
`

const Gallery = styled.div`
  display: grid;
  grid-column-gap: 1px;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
  padding: 8px;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
`
const GalleryItem = styled.div`
  display: contents;
`

export { Instagram, Gallery, Title, GalleryItem }
