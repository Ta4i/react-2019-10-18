import React from 'react'
import {connect} from 'react-redux'
import {Card, Descriptions, Typography} from 'antd'
const {Text} = Typography

function Order(props) {
  const {menu, cart} = props

  const showOrder = !!Object.entries(cart).length
  let order = createOrderObj(cart, menu)

  return (
    showOrder && (
      <Card>
        <Descriptions title="Order" column={1} bordered>
          {order.map(item => (
            <Descriptions.Item
              label={
                item.name + ' - ' + item.price + '$, ' + item.amount + ' pc.'
              }
              key={item.id}
            >
              {item.amount * item.price} $
            </Descriptions.Item>
          ))}

          <Descriptions.Item label={'Total - ' + getOrderTotal(order) + ' pc.'}>
            <Text strong underline>
              {getOrderSum(order)} $
            </Text>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    )
  )
}

function createOrderObj(cart, menu) {
  let order = []

  for (let id in cart) {
    let menuItem = menu.find(menuEntry => menuEntry.id === id)
    order.push({...menuItem, amount: cart[id]})
  }

  return order
}

function getOrderTotal(order) {
  return order.reduce((sum, item) => (sum += item.amount), 0)
}

function getOrderSum(order) {
  return order.reduce((sum, item) => (sum += item.amount * item.price), 0)
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Order)
