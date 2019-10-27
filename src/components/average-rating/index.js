import React from 'react'
import {Rate} from 'antd'
import {calcAverageRating} from '../../utils/utils'

function AverageRating(props) {
  const {reviews} = props

  return (
    <div>
      <Rate
        value={calcAverageRating(reviews.map(item => item.rating))}
        disabled
        allowHalf
      />
    </div>
  )
}

export default AverageRating
