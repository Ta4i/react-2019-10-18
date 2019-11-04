import React from 'react'
import {connect} from 'react-redux'
import * as styles from './order.module.css'
import {Row, Col, Typography, List} from 'antd'

class Order extends React.Component {
  render() {
    const order = this.constructOrder()
    const total = this.calcTotal(order)

    return (
      <Row type="flex" justify="center">
        <Col xs={24} md={12} className={styles.orderContainer}>
          {!this.isCartEmpty() && (
            <List
              header={this.renderHeader()}
              footer={this.renderFooter(total)}
              bordered
              dataSource={order}
              renderItem={item => (
                <List.Item style={{justifyContent: 'space-between'}}>
                  <Typography.Text>{item.product}</Typography.Text>
                  <Typography.Text>
                    ${item.price} &times; {item.amount}
                  </Typography.Text>
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    )
  }

  constructOrder() {
    const dishes = []

    // create array of dishes from all available restaurants
    this.props.restaurants.forEach(item => {
      dishes.push(...item.menu)
    })

    return Object.keys(this.props.cart).map(id => {
      const dish = dishes.find(dish => dish.id === id)

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

  renderHeader() {
    return (
      <Typography.Paragraph strong style={{marginBottom: 0}}>
        Your order
      </Typography.Paragraph>
    )
  }

  renderFooter(total) {
    return (
      <Typography.Paragraph
        strong
        style={{textAlign: 'right', marginBottom: 0}}
      >
        Total: ${total}
      </Typography.Paragraph>
    )
  }
}

const mapStateToProps = store => ({
  cart: store.cart,
  restaurants: store.restaurants,
})

export default connect(mapStateToProps)(Order)
export {Order as OrderComponent}
