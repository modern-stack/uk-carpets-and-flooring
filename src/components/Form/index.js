import React from 'react'
import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #ffffff;
  box-shadow: inset 0 1px 2px 0 rgba(201, 202, 200, 0.5);
  border: 1px solid ${props => (props.validationFailed ? 'red' : 'transparent')};
`

export const ErrorMessage = styled.div`
  color: red;
`
