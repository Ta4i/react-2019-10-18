import React from 'react'
import {Comment} from 'antd'

function Review(props) {
  const {review} = props

  return <Comment author={review.user} content={<p>{review.text}</p>} />
}

export default Review
