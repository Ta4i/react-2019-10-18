import React from 'react'
import {Button, Typography} from 'antd'
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

  const objInArrCounter = (arr = [], keys = []) => {
    if (arr.length) {
      if (keys.length > 1) {
        return arr.reduce(
          (prev, curr) => +prev + +curr[keys[0]] * curr[keys[1]],
          0
        )
      }
      return arr.reduce((prev, curr) => +prev + +curr[keys], 0)
    }
    return 0
  }

  if (!orderList.length) {
    return (
      <div className={styles.wrapper}>
        <Typography.Title level={3}>Cart is empty</Typography.Title>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      {orderList.map(item => (
        <OrderCard dish={item} key={item.id} />
      ))}
      {/* <p>Total price: {orderList.length ? orderList.reduce((prev, curr) => +prev + +curr.price * +curr.amount, 0) : 0}</p>
      <p>Total amount: {orderList.length ? orderList.reduce((prev, curr) => +prev + +curr.amount, 0) : 0}</p> */}
      <div className={styles.info}>
        <div>
          <p>Total price: {objInArrCounter(orderList, ['price', 'amount'])}</p>
          <p>Total amount: {objInArrCounter(orderList, ['amount'])}</p>
        </div>
        <Button>Go to payment</Button>
      </div>
    </div>
  )
}

export default Order
