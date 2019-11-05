import React from 'react'
import Dish, {DishComponent} from '../dish'
import PropTypes from 'prop-types'

function Menu(props) {
  const {menu} = props
  return (
    <div>
      {menu.map(dishId => (
        <Dish dishId={dishId} key={dishId} />
      ))}
    </div>
  )
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Menu
