import React from 'react'
import {Row, Col} from 'antd'
import PropTypes, {instanceOf} from 'prop-types'
import styles from './order.module.css'
import {connect} from 'react-redux'

function Order(props) {
  const {check = {}, menu} = props
  let sum = 0
  menu.forEach(dish => {
    sum = sum + dish.price * (check[dish.id] === undefined ? 0 : check[dish.id])
  })
  return (
    <span>
      {menu.map(dish => (
        <Row type="flex" justify="end" key={dish.id}>
          <Col xs={8} md={8} align="left">
            {dish.name}
          </Col>
          <Col xs={8} md={8}>
            {check[dish.id]}
          </Col>
          <Col xs={8} md={8}>
            {dish.price}
          </Col>
        </Row>
      ))}
      <Row type="flex" justify="center">
        {' '}
        {'Итог: ' + sum}
      </Row>
    </span>
  )
}

const mapStateToProps = (store, ownProps) => {
  return {
    check: store.cart,
  }
}

export default connect(mapStateToProps)(Order)
