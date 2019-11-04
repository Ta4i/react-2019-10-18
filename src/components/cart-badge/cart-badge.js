import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button, Dropdown} from 'antd'
import './cart-badge.css'
import {connect} from 'react-redux'
import DropList from '../droplist'

function mapStateToProps(state) {
  return {
    cart: state.cart,
    menu: state.menu,
    restaurants: state.restaurants,
    totalAmount: state.cart.totalAmount,
    totalPrice: state.cart.totalPrice,
  }
}

function CartBadge(props) {
  const {cart, menu} = props
  return (
    <div>
      <Dropdown overlay={DropList({cart}, {menu})}>
        <Badge count={props.totalAmount} className={'cart-button-container'}>
          <Button
            icon="shopping-cart"
            size="large"
            type="primary"
            className="cart-button"
          />
        </Badge>
      </Dropdown>
    </div>
  )
}

CartBadge.defaultProps = {
  amount: 0,
  dishId: '',
}

CartBadge.propTypes = {
  amount: PropTypes.number,
  dishId: PropTypes.string,
}

export default connect(mapStateToProps)(CartBadge)
