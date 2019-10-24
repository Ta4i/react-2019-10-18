import React from 'react'
import {Card, Typography, Rate} from 'antd'

const Review = props => {
  const {user, text, rating} = props.data
  return (
    <div>
      <Card title={text}>
        <Rate value={rating} disabled />
        <br />
        <Typography.Text>{user}</Typography.Text>
      </Card>
    </div>
  )
}

export default Review
