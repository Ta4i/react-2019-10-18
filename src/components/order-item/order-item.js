import React from 'react'
function OrderItem({orderItem}) {
  const {id, amount, name, price} = orderItem

  return (
    <div style={{marginBottom: '10px'}}>
      <div>
        <b>{name}</b>
      </div>
      <div>Amount: {amount}</div>
      <div>Price: {price}$</div>
      <div>Sum: {price * amount}$</div>
    </div>
  )
}

export default OrderItem
