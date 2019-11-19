import React from 'react'
import Restaurant from '../restaurant/restaurant'
import RestaurantsNavigation from '../restaurants-navigation/restaurants-navigation'
import {Route} from 'react-router-dom'

function RestaurantPage(props) {
  console.log('RestaurantPage props', props)
  return (
    <>
      <RestaurantsNavigation />
      <Route
        path={'/restaurant/:restaurantId'}
        render={props => {
          return <Restaurant id={props.match.params.restaurantId} />
        }}
      />
    </>
  )
}

export default RestaurantPage
