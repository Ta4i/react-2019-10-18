import React from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from 'antd'
import CartItems from './../cart/cart-items/cart-items'

function OrderPage(props) {
  console.log('OrderPage props', props)
  return (
    <div>
      <CartItems {...props} />
      <NavLink to="/thank-you">
        <Button type="primary" size="large" block>
          Complete order
        </Button>
      </NavLink>
    </div>
  )
}

export default OrderPage
