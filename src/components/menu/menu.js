import React from 'react'
import Dish, {DishComponent} from '../dish'
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
  menu: PropTypes.arrayOf(DishComponent.propTypes.dish).isRequired,
}

export default Menu
