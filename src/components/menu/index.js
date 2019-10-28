import React from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'
import {dishPattern} from '../dish'

function Menu(props) {
  const {menu} = props
  return (
    <div>
      {menu.map(dishInfo => (
        <Dish dish={dishInfo} key={dishInfo.id} />
      ))}
    </div>
  )
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape(dishPattern)).isRequired,
}

export default Menu
