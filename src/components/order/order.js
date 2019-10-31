import React from 'react'
import {connect} from 'react-redux'

import OrderItem from '../order-item'
import {searchInArrayById} from '../../helpers/searchInArray'

function Order({dishes, cart}) {
  const orderItems = []
  let totalSum = 0
  for (const item in cart) {
    const dish = searchInArrayById(dishes, item)
    const orderItem = {
      id: item,
      amount: cart[item],
      name: dish.name,
      price: dish.price,
    }
    orderItems.push(<OrderItem key={item} orderItem={orderItem} />)
    totalSum += dish.price * cart[item]
  }

  return (
    <div>
      <div>{orderItems}</div>
      <div>
        <b>
          <u>Total Sum:</u> {totalSum}$
        </b>
      </div>
    </div>
  )
}

const putStateToProps = store => ({
  dishes: store.dishes,
  cart: store.cart,
})

export default connect(putStateToProps)(Order)
