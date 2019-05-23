import styled from 'styled-components'

const SmallHero = styled.div`
  display: block;
  width: 100%;
  height: 50vh;
  overflow: hidden;

  @media (max-width: 700px) {
    height: 30vh;
  }
`

const Image = styled.div`
  width: 100%;
`

export { SmallHero, Image }
