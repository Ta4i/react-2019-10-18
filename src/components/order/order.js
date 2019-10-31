import React from 'react'
import {List, Typography} from 'antd'
import {connect} from 'react-redux'
import OrderRow from './order-row'
import OrderTotal from './order-total'

function Order(props) {
  const {items} = props
  const sum = items.reduce((acc, item) => acc + item.price * item.count, 0)
  return (
    <List
      header={<Typography.Title>Order</Typography.Title>}
      footer={<OrderTotal sum={sum} />}
      bordered
      dataSource={items}
      renderItem={item => <OrderRow {...item} />}
    />
  )
}

export default connect(state => {
  const {cart, restaurants} = state
  let items = []
  for (let dishId in cart) {
    const count = cart[dishId] || 0
    restaurants.forEach(restaurant => {
      const item = restaurant.menu.find(dish => dish.id === dishId)
      if (item && count > 0) {
        items.push({
          name: item.name,
          price: item.price,
          count,
        })
      }
    })
  }
  return {items}
})(Order)
