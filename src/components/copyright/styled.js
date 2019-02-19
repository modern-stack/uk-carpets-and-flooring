import styled from 'styled-components'

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 6%;
  position: relative;

  @media (max-width: 700px) {
      flex-direction: column;
      text-align: center;

    & > div {
        margin-bottom: 30px;
        :last-child{
            min-height: 1px;
        }
    }
`

const Policies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

export { Copyright, Policies }
