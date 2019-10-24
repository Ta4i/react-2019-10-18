import React from 'react'

function Review(props) {
  const {review} = props
  return (
    <div className={'review reviews-list__item'}>
      <p className={'review__author'}>{review.user}</p>
      <p className={'review__text'}>{review.text}</p>
    </div>
  )
}

export default Review
