import styled from 'styled-components'

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 18px;
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

export { Steps, Step, Content, StepsContainer }
