import React from 'react'
import Review from '../review'

function Reviews(props) {
  const {reviews} = props
  return (
    <div>
      {reviews.map(info => (
        <Review review={info} key={info.id} />
      ))}
    </div>
  )
}

export default Reviews
