import styled from 'styled-components'

const Steps = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  div:last-child {
    grid-column: span 2;
  }

  margin: 12px 18px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

const Step = styled.div`
  display: flex;
  color: ${$ => ($.isComplete ? 'black' : 'lightgray')};
  font-size: 20px;
`

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Content = styled.div`
  display: flex;
  width: 100%;
`

const StepBar = styled.div`
  background: green;
`

export { Steps, Step, Content, StepsContainer, StepBar }
