import React from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'

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
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      ingredients: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
}

export default Menu
