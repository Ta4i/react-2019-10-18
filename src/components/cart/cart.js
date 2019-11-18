import Button from 'antd/es/button'
import cx from 'classnames'
import React, {useContext} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import styles from './cart.module.css'
import CartRow from './cart-row'
import CartItem from './cart-item'
import {connect} from 'react-redux'
import './cart.css'
import {selectOrderedDishes} from '../../store/selectors'
import {NavLink} from 'react-router-dom'
import {AppLocaleContext} from '../../contexts'

function Cart({className, orderedDishes}) {
  const lang = useContext(AppLocaleContext)
  const {dishes, totalPrice} = orderedDishes
  if (dishes.length === 0) {
    return null
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

      <CartRow leftContent={lang.subTotal} rightContent={`${totalPrice} $`} />
      <CartRow leftContent={lang.deliveryCosts} rightContent={lang.free} />
      <CartRow leftContent={lang.total} rightContent={`${totalPrice} $`} />
      <NavLink to={'/order'} activeStyle={{display: 'none'}}>
        <Button type="primary" size="large" block>
          {lang.order}
        </Button>
      </NavLink>
    </div>
  )
}

const mapStateToProps = state => ({
  orderedDishes: selectOrderedDishes(state),
})

export default connect(mapStateToProps)(Cart)
