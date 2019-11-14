import React from 'react'
import {restaurants} from '../../fixtures'
import {NavLink} from 'react-router-dom'

function RestaurantList(props) {
  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>
          <NavLink
            to={'/restaurant/' + restaurant.id}
            activeStyle={{color: 'red'}}
          >
            {restaurant.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default RestaurantList
