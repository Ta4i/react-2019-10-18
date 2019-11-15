import React, {Fragment} from 'react'
import Restaurant from '../restaurant/restaurant'
import {Col, Row} from 'antd'
import Cart from '../cart/cart'
import RestaurantsNavigation from '../restaurants-navigation/restaurants-navigation'
import {Route} from 'react-router-dom'

function RestaurantPage(props) {
  console.log('RestaurantPage props', props)
  return (
    <>
      <RestaurantsNavigation />
      <Route
        path={'/restaurant/:restaurantId'}
        render={props => {
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
        }}
      />
    </>
  )
}

export default RestaurantPage
