import React, { useState } from 'react'
import { Steps, Step, Content, StepsContainer } from './styled'

import { FaQuestionCircle } from 'react-icons/fa'

export default ({ children }) => {
  const [stage, setStage] = useState(0)

  console.log('>>>', children)

  return (
    <Steps>
      <StepsContainer>
        {children.map(($, i) => (
          <Step isComplete={stage > i}>
            {$.props.icon || <FaQuestionCircle />}
          </Step>
        ))}
      </StepsContainer>
      <Content>
        {React.cloneElement(children[stage], {
          onComplete: () => setStage(stage + 1),
        })}
      </Content>
    </Steps>
  )
}
