import Button from 'antd/es/button'
import cx from 'classnames'
import React from 'react'

import styles from './cart.module.css'
import './cart.css'
import {NavLink} from 'react-router-dom'
import CartItems from './cart-items/cart-items'
import {connect} from 'react-redux'
import {selectOrderedDishes} from '../../store/selectors/index'

function Cart({className, orderedDishes}) {
  const {dishes} = orderedDishes
  if (dishes.length === 0) {
    return null
  }

  return (
    <div className={cx(styles.cart, className)}>
      <CartItems />
      <NavLink to="/order">
        <Button type="primary" size="large" block>
          Order
        </Button>
      </NavLink>
    </div>
  )
}

const mapStateToProps = state => ({
  orderedDishes: selectOrderedDishes(state),
})

export default connect(mapStateToProps)(Cart)
