import React from 'react'
import {Rate} from 'antd'

function Rating(props) {
  const {reviews} = props
  let rating = getRating(reviews)

  return (
    <div>
      <Rate allowHalf defaultValue={rating} />
    </div>
  )
}

function getRating(reviews) {
  let sum = 0
  reviews.forEach(review => (sum += +review.rating))
  return sum / reviews.length
}

export default Rating
