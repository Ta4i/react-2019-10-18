import React from 'react'
import {Rate} from 'antd'

function Rating(props) {
  const {review} = props
  let sum = 0
  for (var i = 0; i < review.length; i++) {
    sum += review[i].rating
  }
  return (
    <div>
      <Rate
        default
        allowHalf
        defaultValue={sum / review.length}
        key={review.id}
      />
    </div>
  )
}
export default Rating
