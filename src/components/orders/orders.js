import React from 'react'
import {connect} from 'react-redux'
import {Card, Table} from 'antd'

function mapStateToProps(state) {
  return {
    cart: state.cart,
    restaurants: state.restaurants,
  }
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Sum',
    dataIndex: 'sum',
    key: 'sum',
  },
]

function Orders(props) {
  const {cart} = props
  const {restaurants} = props
  const orders = restaurants
    .flatMap(restaurant => restaurant.menu)
    .filter(menu => Object.keys(cart).find(el => el === menu.id))
    .map(menu => ({
      key: menu.id,
      name: menu.name,
      price: menu.price,
      qty: cart[menu.id],
      sum: cart[menu.id] * menu.price,
    }))
  const totalPrice = orders.reduce((acc, item) => {
    return acc + item.sum
  }, 0)

  return (
    <div>
      <Card
        title={`Order list. Total price: ${totalPrice}`}
        style={{width: 400}}
      >
        <Table dataSource={orders} columns={columns} pagination={false} />
      </Card>
    </div>
  )
}

export default connect(mapStateToProps)(Orders)
