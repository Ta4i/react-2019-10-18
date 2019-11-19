import Button from 'antd/es/button'
import cx from 'classnames'
import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import styles from './cart.module.css'
import CartRow from './cart-row'
import CartItem from './cart-item'
import {connect} from 'react-redux'
import './cart.css'
import {selectOrderedDishes} from '../../store/selectors'
import {NavLink, withRouter} from 'react-router-dom'

function Cart({className, orderedDishes, location}) {
  console.log('location', location)
  const {dishes, totalPrice} = orderedDishes
  if (dishes.length === 0) {
    return null
  }
  const restaurantPageActive = !!location.pathname.match('/restaurant')
  const orderPageActive = !!location.pathname.match('/order')
  let button

  if (restaurantPageActive) {
    button = (
      <NavLink to="/order">
        <Button type="primary" size="large" block>
          Order
        </Button>
      </NavLink>
    )
  } else if (orderPageActive) {
    button = (
      <NavLink to="/thank-you">
        <Button type="primary" size="large" block>
          Complete order
        </Button>
      </NavLink>
    )
  }

  return (
    <div className={cx(styles.cart, className)}>
      <TransitionGroup>
        {dishes.map(({dish, amount, restaurant}) => (
          <CSSTransition
            timeout={500}
            classNames="cart-item-animation"
            key={dish.id}
          >
            <CartItem
              dish={dish}
              amount={amount}
              restaurant={restaurant}
              key={dish.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr />

      <CartRow leftContent="Sub-total" rightContent={`${totalPrice} $`} />
      <CartRow leftContent="Delivery costs" rightContent="FREE" />
      <CartRow leftContent="Total" rightContent={`${totalPrice} $`} />
      {button}
    </div>
  )
}

const mapStateToProps = state => ({
  orderedDishes: selectOrderedDishes(state),
})

export default connect(mapStateToProps)(Cart)
