import React from 'react'
import {List, Typography} from 'antd'

function Reviews(props) {
  const {reviews} = props

  return (
    <List
      header={<strong>Reviews</strong>}
      footer={<strong>Total: {reviews.length}</strong>}
      bordered
      dataSource={reviews}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>{item.user}</Typography.Text>
          {': '}
          {item.text}
        </List.Item>
      )}
    />
  )
}

export default Reviews
