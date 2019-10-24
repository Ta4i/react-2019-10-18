import React from 'react'
import Review from '../review'

function Reviews(props) {
  const {reviews} = props
  return (
    <div>
      {reviews.map(reviewItem => (
        <Review review={reviewItem} key={reviewItem.id} />
      ))}
    </div>
  )
}

export default Reviews
