import React from 'react'
import {Rate} from 'antd'

function AverageRating(props) {
  const {restaurant} = props
  let rating = 0
  let arrRating = []
  for (let i = 0; i < restaurant.length; i++) {
    arrRating.push(restaurant[i].rating)
  }
  rating = Math.round(
    arrRating.reduce((acc, c) => acc + c, 0) / arrRating.length
  )
  return <Rate value={rating} />
}

export default AverageRating
