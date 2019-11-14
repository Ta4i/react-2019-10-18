import {NavLink} from 'react-router-dom'
import React from 'react'

const RestaurantsList = ({restaurants}) => (
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

export default RestaurantsList
