import React from 'react'
import {connect} from 'react-redux'
import * as styles from './order.module.css'
import {Row, Col, Typography} from 'antd'

class Order extends React.Component {
  render() {
    const order = this.constructOrder()
    const total = this.calcTotal(order)

    return (
      <Row type="flex" justify="center">
        <Col xs={24} md={12} className={styles.orderContainer}>
          {!this.isCartEmpty() && (
            <Typography.Title level={2}>Your order</Typography.Title>
          )}

          <div>
            {order.map(item => (
              <div key={item.id} className={styles.orderRow}>
                <span>{item.product}</span>
                <span>
                  ${item.price} &times; {item.amount}
                </span>
              </div>
            ))}
          </div>

          {!this.isCartEmpty() && (
            <Typography.Paragraph strong style={{textAlign: 'right'}}>
              Total: ${total}
            </Typography.Paragraph>
          )}
        </Col>
      </Row>
    )
  }

  constructOrder() {
    return Object.keys(this.props.cart).map(id => {
      const dish = this.props.menu.find(dish => dish.id === id)

      return {
        id: dish.id,
        product: dish.name,
        price: dish.price,
        amount: this.props.cart[id],
      }
    })
  }

  calcTotal(order) {
    return order.reduce((acc, item) => acc + item.amount * item.price, 0)
  }

  isCartEmpty() {
    return Object.keys(this.props.cart).length === 0
  }
}

const mapStateToProps = store => ({
  cart: store.cart,
  menu: store.restaurants[0].menu,
})

export default connect(mapStateToProps)(Order)
export {Order as OrderComponent}
