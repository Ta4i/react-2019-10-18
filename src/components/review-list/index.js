import React from 'react'
import {List} from 'antd'
import ReviewItem from '../review-item'

function ReviewList(props) {
  const {reviews} = props
  return (
    <List
      header="All Reviews"
      bordered
      dataSource={reviews}
      renderItem={item => <ReviewItem key={item.id} review={item} />}
    />
  )
}

export default ReviewList
