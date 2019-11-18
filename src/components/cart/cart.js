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
import {NavLink} from 'react-router-dom'

import {Consumer as InterConsumer} from '../../contexts/inter'

function Cart({className, orderedDishes}) {
  const {dishes, totalPrice} = orderedDishes
  if (dishes.length === 0) {
    return null
  }
  return (
    <InterConsumer>
      {language => (
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

          <CartRow
            leftContent={language.subTotal}
            rightContent={`${totalPrice} $`}
          />
          <CartRow
            leftContent={language.deliveryCosts}
            rightContent={language.free}
          />
          <CartRow
            leftContent={language.total}
            rightContent={`${totalPrice} $`}
          />
          <NavLink to={'/order'} activeStyle={{display: 'none'}}>
            <Button type="primary" size="large" block>
              {language.order}
            </Button>
          </NavLink>
        </div>
      )}
    </InterConsumer>
  )
}

const mapStateToProps = state => ({
  orderedDishes: selectOrderedDishes(state),
})

export default connect(mapStateToProps)(Cart)
