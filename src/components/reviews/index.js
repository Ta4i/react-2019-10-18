import React from 'react'
import Review from '../review'

function Reviews(props) {
  return (
    <ul>
      {props.reviews.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </ul>
  )
}

export default Reviews
