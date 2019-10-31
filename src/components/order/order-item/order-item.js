import React from 'react'
import PropTypes from 'prop-types'
import {Card} from 'antd'

function OrderItem(props) {
  const {
    itemInfo: {name, amount, price},
  } = props

  if (amount === 0) return null

  return (
    <Card size="small">
      <p>Name: {name}</p>
      <p>Amount: {amount}</p>
      <p>Price: {price}</p>
    </Card>
  )
}

OrderItem.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  price: PropTypes.number,
}

export default OrderItem
