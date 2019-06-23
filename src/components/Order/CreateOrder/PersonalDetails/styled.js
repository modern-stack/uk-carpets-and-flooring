import styled from 'styled-components'

const PersonalDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    margin: 12px 0px;
  }
`

const ProfileImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 50%;
`

export { PersonalDetails, ProfileImage }
