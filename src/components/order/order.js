import React from 'react'
import {Typography} from 'antd'
import {connect} from 'react-redux'
import OrderItem from '../order-item'

function Order(props) {
  const {cartDishList} = props
  console.log(cartDishList)
  return (
    <div>
      <Typography.Title level={2}>Order</Typography.Title>

      {Object.keys(cartDishList).map(dishId => (
        <OrderItem key={dishId} item={[dishId, cartDishList[dishId]]} />
      ))}
    </div>
  )
}

const mapStateToProps = store => {
  return {
    cartDishList: store.cart,
  }
}

export default connect(mapStateToProps)(Order)
