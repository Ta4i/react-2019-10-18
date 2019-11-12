import React from 'react'
import Restaurant from '../restaurant/restaurant'

function RestaurantPage(props) {
  console.log(props)
  return (
    <div>
      <Restaurant id={props.match.params.restaurantId} />
    </div>
  )
}

export default RestaurantPage
