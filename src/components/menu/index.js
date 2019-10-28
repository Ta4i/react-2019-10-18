import React from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'
import {dishType} from '../../types'

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
  menu: PropTypes.arrayOf(dishType).isRequired,
}

export default Menu
