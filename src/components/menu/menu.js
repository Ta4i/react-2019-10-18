import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Dish from '../dish'

function Menu(props) {
  const {menu, someTestFunc} = props
  const foo = () => {
    someTestFunc && someTestFunc()
  }
  useEffect(foo, [])
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
