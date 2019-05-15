import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Suggestions, Suggestion, Title, Message } from './styled'

import { useStateValue } from '../../../../../../Context'

export default ({ previousAddresses, suggestions, onSelect, error }) => {
  const [{ order }, dispatch] = useStateValue()

  if (error) return <Message>{error}</Message>

  if (suggestions && !suggestions.length)
    return <Message>No records found</Message>

  return (
    <Suggestions count={1}>
      {previousAddresses && (
        <React.Fragment>
          <Title>Search Results</Title>
          <Suggestion onClick={() => onSelect}>
            <FaMapMarkerAlt />
            69 Pinfold Drove, Eccleston, St Helens, WA10 5BT
          </Suggestion>
          <div>
            <hr />
          </div>
        </React.Fragment>
      )}

      {suggestions && (
        <React.Fragment>
          {suggestions.map($ => (
            <Suggestion onClick={() => onSelect($)}>
              <FaMapMarkerAlt />
              {Object.values($).join(', ')}
            </Suggestion>
          ))}

          <Title>Search Results</Title>
        </React.Fragment>
      )}
    </Suggestions>
  )
}
