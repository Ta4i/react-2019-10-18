import React from 'react'
import {Typography} from 'antd'
import Review from '../review'

function Reviews(props) {
  const {reviews} = props
  return (
    <div>
      <Typography.Title level={3}>Reviews</Typography.Title>
      {reviews.map(item => (
        <Review data={item} key={item.id} />
      ))}
    </div>
  )
}

export default Reviews
