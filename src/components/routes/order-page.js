import React from 'react'
import {Button} from 'antd'
import Cart from '../cart/cart'

function OrderPage(props) {
  console.log('OrderPage props', props)
  return (
    <div>
      <Cart />
      <Button type="primary" size="large" block>
        Complete order
      </Button>
    </div>
  )
}

export default OrderPage
