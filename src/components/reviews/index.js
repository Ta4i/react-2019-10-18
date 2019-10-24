import React from 'react'
import Review from '../review'

function Reviews(props) {
  const {reviews} = props

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  )
}

export default Reviews
