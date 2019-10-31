import React from 'react'
import {Button} from 'antd'
import OrderCard from './order-card'
import styles from './order.module.css'

const Order = props => {
  const {restaurants, orderData} = props
  const dishList = restaurants
    .map(item =>
      item.menu.map(dish => ({
        id: dish.id,
        name: dish.name,
        price: dish.price,
      }))
    )
    .flat()
  const orderList = dishList
    .filter(item => Object.keys(orderData).includes(item.id))
    .map(item => ({
      name: item.name,
      price: item.price,
      amount: orderData[item.id],
      id: item.id,
    }))

  return (
    <div className={styles.wrapper}>
      {orderList.map(item => (
        <OrderCard dish={item} key={item.id} />
      ))}
      <Button>Go to payment</Button>
      {/* <p>Total price: {orderList.length ? orderList.map(item => item.price * item.amount) : 0}</p> */}
      {/* <p>Total amount: {orderList.length ? orderList.reduce((a, {amount}) => a + amount) : 0}</p> */}
    </div>
  )
}

export default Order
