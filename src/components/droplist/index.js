import React from 'react'
import {Menu, Col, Row} from 'antd'

function DropList({cart}, {menu}) {
  const DropList = menu
    .filter(menu =>
      Object.keys(cart).find(key => key === menu.id && cart[key] !== 0)
    )
    .map(menu => (
      <div>
        <li key={menu.id}>
          <Row>
            <Col span={8}>{menu.name}</Col>
            <Col span={8}>{cart[menu.id]}</Col>
            <Col span={8}>{cart[menu.id] * menu.price} </Col>
          </Row>
        </li>
      </div>
    ))
  if (!cart.totalPrice) {
    return <strong>Total price: 0</strong>
  } else {
    return (
      <Menu style={{width: '500px'}}>
        <Row>
          <Col span={8}>
            <strong>Name</strong>
          </Col>
          <Col span={8}>
            <strong>Amount</strong>
          </Col>
          <Col span={8}>
            <strong>Price</strong>
          </Col>
          <Menu.Item>{DropList}</Menu.Item>
        </Row>
        <strong>Total price: </strong>
        {cart.totalPrice}
      </Menu>
    )
  }
}

export default DropList
