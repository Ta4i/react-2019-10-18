import React from 'react'
import {Table} from 'antd'
import {connect} from 'react-redux'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Total',
    dataIndex: 'sumPrice',
    key: 'sumPrice',
  },
]

const mapStateToProps = state => {
  return {
    cart: state.cart,
    restaurants: state.restaurants,
  }
}

function Order(props) {
  const {cart, restaurants} = props
  const orders = restaurants
    .flatMap(restaurant => restaurant.menu)
    .filter(
      menu => Object.keys(cart).indexOf(menu.id) !== -1 && cart[menu.id] > 0
    )
    .map(menu => ({
      key: menu.id,
      name: menu.name,
      price: menu.price,
      amount: cart[menu.id],
      sumPrice: cart[menu.id] * menu.price,
    }))
  const totalPrice = orders.reduce((acc, item) => {
    return acc + item.sumPrice
  }, 0)
  return (
    <div>
      <Table dataSource={orders} columns={columns} pagination={false} />
      <span>Total price: {totalPrice}</span>
    </div>
  )
}

export default connect(mapStateToProps)(Order)
