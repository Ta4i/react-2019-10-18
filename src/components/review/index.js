import React from 'react'
import {Comment} from 'antd'
import DisabledRating from '../disabled-rating'

function Review(props) {
  const {review} = props

  return (
    <div>
      <DisabledRating rating={review.rating}/>
      <Comment content={review.text} author={review.user} avatar={require('../../resources/man.svg')}/>
    </div>
  )
}

export default Review