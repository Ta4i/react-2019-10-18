import React from 'react'
import {Rate} from 'antd'

function DisabledRating(props) {
  const rating = props.rating

  return (
    <div>
      <Rate disabled value={rating}/>
    </div>
  )
}

export default DisabledRating
