import React from 'react'
import Review from './Review'

function Reviews(props) {
  const {reviews} = props
  return (
    <div>
      Reviews:
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  )
}

export default Reviews
