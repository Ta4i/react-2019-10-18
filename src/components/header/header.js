import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Drawer} from 'antd'

import {fetchDishes} from '../../store/ac'
import Order from '../order'
import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'

function Header(props) {
  // если блюда не загружены - загружаем - делаем 1 раз
  if (props.dishes === null) {
    props.fetchDishes()
  }

  function openCart() {
    setCartIsOpened(true)
  }

  function closeCart() {
    setCartIsOpened(false)
  }

  const [cartIsOpened, setCartIsOpened] = useState(false)
  return (
    <header className={styles.header}>
      <Logo />
      <CartBadge amount={0} onClick={openCart} />

      <Drawer
        title="Good in your cart"
        placement="right"
        closable={false}
        onClose={closeCart}
        visible={cartIsOpened}
      >
        <Order />
      </Drawer>
    </header>
  )
}

const putStateToProps = store => ({
  dishes: store.dishes,
})

const putActionsToProps = {
  fetchDishes,
}

export default connect(
  putStateToProps,
  putActionsToProps
)(Header)
