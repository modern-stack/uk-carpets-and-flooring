import React from 'react'
import Rating from 'react-rating'
import { FaStar } from 'react-icons/fa'

import { Review } from './styled'

export default () => (
  <Review>
    <div>
      <Rating
        emptySymbol={
          <FaStar
            style={{
              color: 'black',
            }}
          />
        }
        fullSymbol={<FaStar style={{ color: 'gold' }} />}
      />
    </div>
    <div>Write a Review</div>
    <div>Add to Wishlist</div>
  </Review>
)
