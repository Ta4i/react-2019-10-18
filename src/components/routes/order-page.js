import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Typography, notification} from 'antd'

import Cart from '../cart'
import {clearCart} from '../../store/ac'
import {selectCartDishesCount} from '../../store/selectors'

class OrderPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clientName: '',
      clientPhone: '',
      formIsSended: false,
    }

    this.handleClientNameKeyPress = this.handleKeyPress.bind(this, 'clientName')
    this.handleClientPhoneKeyPress = this.handleKeyPress.bind(
      this,
      'clientPhone'
    )
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  render() {
    if (this.state.formIsSended) {
      return <Redirect to="/order/complete" />
    }

    return (
      <div style={{padding: '10px'}}>
        <form onSubmit={this.handleFormSubmit}>
          <Typography.Title level={2}>Finish your order!</Typography.Title>
          <Typography.Title level={3}>Check your cart:</Typography.Title>

          <Typography.Title level={4}>Your name:</Typography.Title>
          <input
            type="text"
            value={this.state.clientName}
            onChange={this.handleClientNameKeyPress}
            required
          />

          <Typography.Title level={4}>Your name:</Typography.Title>
          <input
            type="text"
            value={this.state.clientPhone}
            onChange={this.handleClientPhoneKeyPress}
            required
          />

          <br />
          <br />
          <Typography.Title level={3}>Dishes:</Typography.Title>

          <Cart buttonIsHidden />

          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }

  handleKeyPress(fieldName, e) {
    this.setState({
      [fieldName]: e.target.value,
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    if (this.props.dishesCount < 1) {
      notification.error({
        message: 'Ваша корзина пуста',
        description: 'Для завершения заказа выберите хотя бы 1 блюдо',
      })
    } else {
      this.props.clearCart()
      this.setState({
        formIsSended: true,
      })
    }
  }
}

const mapStateToProps = store => ({
  dishesCount: selectCartDishesCount(store),
})

const mapDispatchToProps = {
  clearCart,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPage)
