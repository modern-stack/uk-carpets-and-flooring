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
              color: 'gold',
            }}
          />
        }
        fullSymbol={<FaStar style={{ color: 'gold' }} />}
      />
      <br />
      <div>5.0</div>
    </div>
    <div>Write a Review</div>
    <div>Add to Wishlist</div>
  </Review>
)
