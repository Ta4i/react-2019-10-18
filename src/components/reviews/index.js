import React from 'react'
import Review from './review-item'

function Reviews(props) {
  const {reviews} = props

  return (
    <div>
      {reviews.map(review => (
        <Review data={review} key={review.id} />
      ))}
    </div>
  )
}

export default Reviews
