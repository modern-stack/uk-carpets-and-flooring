import styled from 'styled-components'

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 12px;
  height: 80px;

  & > label {
    margin: 0 12px;
  }
`

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 35px;
  width: 35px;
`

export { Profile, ProfileImage }
