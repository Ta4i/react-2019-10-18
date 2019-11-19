import React from 'react'
import {NavLink} from 'react-router-dom'

function Navigation(props) {
  const {restaurants} = props
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

export default Navigation
