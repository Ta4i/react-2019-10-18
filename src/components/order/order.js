import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Button, Typography} from 'antd'
import {NavLink} from 'react-router-dom'
import uuid from 'uuid/v4'

import {BankCard, OrderForm, RadioCard, Processing} from './components'

import {selectOrderedDishes} from '../../store/selectors'
import styles from './order.module.css'

const Order = ({orderedDishes}) => {
  const [paymentMethod, setPaymentMethod] = useState(0)
  // const [modal, setModal] = useState(false)
  const {totalPrice} = orderedDishes
  const orderId = uuid()

  return (
    <div className={styles.wrapper}>
      <OrderForm />
      <Typography.Title level={3} className={styles.title}>
        Total price is {totalPrice}$
      </Typography.Title>
      <RadioCard
        title="Choose the payment method"
        variants={['By cash to couries', 'By credit card']}
        value={paymentMethod}
        setValue={setPaymentMethod}
      />
      {paymentMethod ? <BankCard /> : null}
      <NavLink to={'/order/' + orderId}>
        <Button>Confirm {'&'} continue</Button>
      </NavLink>
      {/* <Button onClick={() => setModal(true)}>Confirm {'&'} continue</Button> */}
      {/* <Processing visible={modal} setModal={setModal} /> */}
    </div>
  )
}

const mapStateToProps = state => ({
  orderedDishes: selectOrderedDishes(state),
})

export default connect(mapStateToProps)(Order)
