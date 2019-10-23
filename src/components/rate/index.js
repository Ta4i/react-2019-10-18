import React from 'react'
import {Rate as RateAntd} from 'antd'

function Rate(props) {
  const {reviews} = props
  let ratingSum = 0

  reviews.forEach(review => {
    ratingSum = ratingSum + review.rating
  })
  const value = ratingSum / reviews.length

  return <RateAntd allowHalf value={value} />
}

export default Rate
