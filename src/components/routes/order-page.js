import React, {Component} from 'react'
import Cart from '../cart'
import OrderForm from '../order-form'

class OrderPage extends Component {
  render() {
    return (
      <div>
        <Cart />
        <OrderForm handleUserName={this.props.handleUserName} />
      </div>
    )
  }
}

export default OrderPage
