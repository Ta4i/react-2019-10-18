import React from 'react'
import Restaurant from '../restaurant/restaurant'
import {Col, Row} from 'antd'
import Cart from '../cart/cart'

function RestaurantPage(props) {
  //console.log('RestaurantPage props', props)
  return (
    <Row>
      <Col span={18}>
        <Restaurant id={props.match.params.restaurantId} />
      </Col>
      <Col span={6}>
        <Cart />
      </Col>
    </Row>
  )
}

export default RestaurantPage
