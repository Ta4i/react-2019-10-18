import React from 'react'
import Review from '../review'
import Dish from '../dish/dish'
import Restaurant from '../restaurant'

function Reviews(props) {
  const {reviews} = props

  return (
    <div>
      {reviews.map(review => (<Review review={review}/>))}
    </div>
  )
}

export default Reviews
