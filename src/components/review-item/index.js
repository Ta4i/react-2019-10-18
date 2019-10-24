import React from 'react'
import {List, Typography, Rate} from 'antd'

function ReviewItem(props) {
  const {user, text, rating} = props.review
  return (
    <List.Item>
      <Typography.Text level={4}>{user}</Typography.Text>
      <Rate disabled defaultValue={rating} />
      <Typography.Text>{text}</Typography.Text>
    </List.Item>
  )
}

export default ReviewItem
