import styled from 'styled-components'

const Section = styled.div``
const Title = styled.h3``
const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 0.7em;
  padding: 8px 0;
  border-bottom: 1px solid gray;

  div {
    :first-child {
      font-weight: 600;
    }

    @media (min-width: 700px) {
      width: 100%;
    }
  }
`

export { Section, Title, ListItem }
