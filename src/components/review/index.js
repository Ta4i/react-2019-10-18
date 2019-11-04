import React from 'react'

function Review(props) {
  const {review} = props

  return (
    <li>
      <span>{review.user}</span> - {review.text}
    </li>
  )
}

export default Review
