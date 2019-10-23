import React from 'react'
import {List, Typography} from 'antd'

function Reviews(props) {
  const {reviews} = props
  return (
    <List
      bordered
      dataSource={reviews.map(review => review.text)}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  )
}

export default Reviews
