import React from 'react'
import {Rate, Typography} from 'antd'

function Review(props) {
  const {data} = props

  return (
    <div style={{margin: '20px 0'}}>
      <Typography.Text strong>{data.user}</Typography.Text>
      <br />
      <Rate value={data.rating} disabled />
      <br />
      <Typography.Text>{data.text}</Typography.Text>
    </div>
  )
}

export default Review
