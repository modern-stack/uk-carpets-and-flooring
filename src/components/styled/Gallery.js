import styled from 'styled-components'

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const GalleryItem = styled.div`
  width: 33%;
  border: 3px solid white;
  posiiton: absolute;
`

export { Gallery, GalleryItem }
