import React from 'react'
import {Rate} from 'antd'

function RateRest(props) {
  const {reviews} = props
  let sum = 0
  let avgRate = 0
  let key = 0
  reviews.forEach(review => {
    sum = sum + review.rating
    key = key + review.id
  })
  avgRate = sum / reviews.length
  return (
    <div>
      <Rate allowHalf defaultValue={avgRate} key={key} />
    </div>
  )
}

export default RateRest
