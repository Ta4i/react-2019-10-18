import React from 'react'
import Review from '../review'
import {Typography} from 'antd'
import './index.sass'
function ReviewsList(props) {
  const {reviews} = props
  return (
    <div className={'reviews-list'}>
      <Typography.Title level={4}>{'Reviews list'}</Typography.Title>
      {reviews.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  )
}

export default ReviewsList
