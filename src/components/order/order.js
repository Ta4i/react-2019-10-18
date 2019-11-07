import React from 'react'
import {Card, Row, Col} from 'antd'
import {connect} from 'react-redux'
import styles from './order.module.css'

const Order = props => {
  return (
    <Card title={'Order'} className={styles.orderCard}>
      {Object.keys(props.orderItems).map(dishId => {
        const {name, price, amount, totalPrice} = props.orderItems[dishId]
        return (
          <Row
            type="flex"
            justify="space-between"
            key={dishId}
            className={styles.item}
          >
            <Col span={12}>
              <b>{name}</b>
            </Col>
            <Col span={12} className={styles.itemRight}>
              ${price} x {amount}={totalPrice}
            </Col>
          </Row>
        )
      })}
      <Row type="flex" justify="space-between" className={styles.totalPrice}>
        <Col>Total Price:</Col>
        <Col className={styles.itemRight}>${props.totalPriceAll}</Col>
      </Row>
    </Card>
  )
}

const mapStateToProps = (store, ownProps) => {
  console.log(store.order)
  return {
    orderItems: store.order,
    totalPriceAll: Object.values(store.order).reduce((acc, item) => {
      return acc + item.totalPrice
    }, 0),
  }
}

export default connect(mapStateToProps)(Order)
export {Order as OrderComponent}
