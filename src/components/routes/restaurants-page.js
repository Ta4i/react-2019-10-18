import React from 'react'
import Restaurant from '../restaurant/restaurant'
import {Col, Layout, Row} from 'antd'
import Cart from '../cart/cart'
import Navigation from '../navigation/navigation'

function RestaurantsPage(props) {
  const {restaurants} = props
  return (
    <>
      <Navigation restaurants={restaurants} />
      <Row>
        <Col span={18}>
          <Restaurant id={props.match.params.restaurantId} />
        </Col>
        <Col span={6}>
          <Cart {...props} />
        </Col>
      </Row>
    </>
  )
}

export default RestaurantsPage
