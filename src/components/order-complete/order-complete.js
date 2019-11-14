import React from 'react'
import {Result, Button} from 'antd'

const OrderComplete = props => {
  const {
    match: {
      params: {orderId},
    },
  } = props

  return (
    <Result
      status="success"
      title="Successfully Purchased!"
      subTitle={`Order id: ${orderId}. Your order will be deliver as soon as possible.`}
      extra={[
        <Button key="buy">Back to main page</Button>,
        <Button key="review">Leave review</Button>,
      ]}
    />
  )
}

export default OrderComplete
