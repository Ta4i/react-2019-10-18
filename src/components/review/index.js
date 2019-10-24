import React from 'react'
import {Comment, Rate} from 'antd'

function Review(props) {
  const {review} = props

  return (
    <div>
      <Comment author={review.user} content={review.text} />
      <Rate
        count={5}
        value={review.rating}
        disabled={true}
        style={{color: '#39d7ff', fontSize: '15px'}}
      />
    </div>
  )
}

export default Review
