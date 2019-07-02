import React, { useState } from 'react'
import { Steps, Step, Content, StepsContainer, StepBar } from './styled'

import { FaQuestionCircle } from 'react-icons/fa'

export default ({ children }) => {
  const [stage, setStage] = useState(0)

  const Component = React.cloneElement(children[stage])

  let Cta = null

  if (Component.props.cta) Cta = Component.props.cta

  return (
    <Steps>
      <StepsContainer>
        {children.map(($, i) => (
          <Step isComplete={stage === i}>
            {$.props.icon || <FaQuestionCircle />}
          </Step>
        ))}
      </StepsContainer>
      <div />
      <Content>{Component}</Content>
      <StepBar>{Cta && <Cta onComplete={() => setStage(stage + 1)} />}</StepBar>
    </Steps>
  )
}
