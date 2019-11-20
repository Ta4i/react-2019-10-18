import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import CartRow from './../cart-row'
import CartItem from './../cart-item'
import {connect} from 'react-redux'
import './../cart.css'
import {selectOrderedDishes} from '../../../store/selectors'

function CartItems({orderedDishes}) {
  const {dishes, totalPrice} = orderedDishes
  if (dishes.length === 0) {
    return null
  }

  return (
    <>
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
    </>
  )
}

const mapStateToProps = state => ({
  orderedDishes: selectOrderedDishes(state),
})

export default connect(mapStateToProps)(CartItems)
