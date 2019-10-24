import React from 'react'
import {Typography} from 'antd'

function Review(props) {
  const {reviews} = props
  return (
    <div>
      {reviews.map(re => (
        <Typography key={re.id}>
          {re.user}:{re.text}
        </Typography>
      ))}
    </div>
  )
}

export default Review
