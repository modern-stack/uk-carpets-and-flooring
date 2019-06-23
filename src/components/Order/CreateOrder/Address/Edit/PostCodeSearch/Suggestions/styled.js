import styled from 'styled-components'

const Suggestions = styled.div`
  @keyframes fadeOut {
    from {
      max-height: 0px;
      opacity: 0;
    }
    to {
      max-height: 100px;
      opacity: 100;
    }
  }

  @keyframes fadeIn {
    from {
      max-height: 100px;
      opacity: 100;
    }
    to {
      max-height: 0px;
      opacity: 0;
    }
  }

  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  animation-name: ${$ => (!!$.count ? 'fadeOut' : 'fadeIn')};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  margin: 10px;

  svg {
    margin: 0 5px;
  }
`

const Suggestion = styled.div`
  display: flex;
  padding: 4px;
  justify-content: left;
  text-align: left;
`

const Title = styled.label`
  padding: 10px;
  text-align: left;
`

const Message = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

export { Message, Suggestions, Suggestion, Title }
