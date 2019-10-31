import React, {Component} from 'react'
import {Card, Typography, Row, Col} from 'antd'
import styles from '../dish/dish.module.css'
import {connect} from 'react-redux'

class Order extends Component {
  render() {
    const {order} = this.props
    if (0 && order) {
      return order.map(item => (
        <Card className={styles.productDetailedOrderCard}>
          <Row type="flex" justify="space-between">
            <Col xs={16} md={16} lg={20} align="left">
              <Typography.Title level={4} className={styles.title}>
                {item.name}
              </Typography.Title>
              <div className={styles.price}>{item.price} $</div>
            </Col>
            <Col xs={8} md={6} lg={4} align="right">
              <div className={styles.counter}>
                <div className={styles.count} data-automation-id="AMOUNT">
                  {item.count}
                </div>
              </div>
            </Col>
            <Col xs={8} md={6} lg={4} align="right">
              <div className={styles.counter}>
                <div className={styles.count} data-automation-id="AMOUNT">
                  {item.count * item.price}
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      ))
    } else {
      return (
        <Typography.Title level={4} className={styles.title}>
          Корзина пуста
        </Typography.Title>
      )
    }
  }
}

const mapStateToProps = store => ({
  order: store.cart,
  totalPrice: Object.values(store.cart).reduce(
    (acc, item) => acc + item.count * item.price,
    0
  ),
})

export default connect(mapStateToProps)(Order)
