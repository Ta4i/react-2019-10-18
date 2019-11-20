import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Button, Input} from 'antd'
import CartItems from './../cart/cart-items/cart-items'
import {useDispatch} from 'react-redux'
import {addActiveUser} from '../../store/ac/index'

function OrderPage(props) {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <CartItems {...props} />
      <Input
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <NavLink to="/thank-you">
        <Button onClick={confirmOrder} type="primary" size="large" block>
          Complete order
        </Button>
      </NavLink>
    </div>
  )

  function confirmOrder() {
    dispatch(addActiveUser(name))
  }
}

export default OrderPage
