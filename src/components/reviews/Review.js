import React from 'react'
import './Review.css'
import {Typography, Rate} from 'antd'

function Review(props) {
  const {review} = props
  return (
    <div className="Review">
      <div className="Review-header">
        <Typography.Title level={4}>{review.user}</Typography.Title>
        <Rate disabled={true} value={review.rating} />
      </div>
      <Typography.Text>{review.text}</Typography.Text>
    </div>
  )
}

export default Review
