import React, {useEffect} from 'react'
import Dish from '../dish'
import {PropTypes} from 'prop-types'

function Menu(props, {fetchMenu}) {
  const foo = () => {
    fetchMenu && fetchMenu()
  }
  useEffect(foo, [])
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
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Menu
