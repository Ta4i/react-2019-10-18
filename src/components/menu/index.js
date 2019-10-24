import React from 'react'
import Dish from '../dish'

function Menu(props) {
  const {menu} = props
  return (
    <div>
      <h2>Menu</h2>
      {menu.map(dishInfo => (
        <Dish dish={dishInfo} key={dishInfo.id} />
      ))}
    </div>
  )
}

export default Menu
