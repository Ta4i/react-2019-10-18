import React, {Component} from 'react'
import {Typography} from 'antd'

class OrderCompletePage extends Component {
  render() {
    return (
      <div>
        <Typography.Title level={2}>
          Your order has been sended!
        </Typography.Title>
        <Typography.Title level={3}>Thank you:</Typography.Title>
      </div>
    )
  }
}

export default OrderCompletePage
