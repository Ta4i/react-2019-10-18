import React from 'react'
import {Row} from 'antd'
import Dish from '../dish'

function Menu(props) {
  const {menu} = props
  return (
    <Row gutter={[12, 12]}>
      {menu.map(dishInfo => (
        <Dish dish={dishInfo} key={dishInfo.id} />
      ))}
    </Row>
  )
}

export default Menu
