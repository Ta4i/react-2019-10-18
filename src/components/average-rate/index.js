import React from 'react'
import {Rate} from 'antd'

function AverageRate(props) {
  const {reviews} = props

  const rawRating =
    reviews.reduce((sum, {rating}) => {
      return sum + rating
    }, 0) / reviews.length

  return <Rate disabled defaultValue={rawRating} />
}

export default AverageRate
