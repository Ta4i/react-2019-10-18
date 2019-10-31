import React from 'react'
import {Card, Typography} from 'antd'
const {Text} = Typography

function Review(props) {
  const {review} = props

  return (
    <div>
      <Card title={review.user}>
        <Text>"Description: "{review.text}</Text>
        <br />
        <Text>"Rate: "{review.rating}</Text>
      </Card>
    </div>
  )
}

export default Review
