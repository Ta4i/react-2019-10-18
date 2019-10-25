import React from 'react'
import {Card, Typography} from 'antd'
import Review from '../review'
const {Title} = Typography

function Reviews(props) {
  const {reviews} = props

  return (
    <div>
      <Card>
        <Title level={4}>Reviews</Title>
        {reviews.map(reviewInfo => (
          <Review review={reviewInfo} key={reviewInfo.id} />
        ))}
      </Card>
    </div>
  )
}

export default Reviews
