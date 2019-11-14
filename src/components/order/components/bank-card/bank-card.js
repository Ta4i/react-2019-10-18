import React from 'react'
import {Card, DatePicker, Input} from 'antd'

import styles from './bank-card.module.css'

const BankCard = () => (
  <div className={styles.wrapper}>
    <Card className={styles.card}>
      <Input placeholder="Number" className={styles.input} size="large" />
      <DatePicker.MonthPicker
        placeholder="Valid thru"
        className={styles.input}
        size="large"
      />
      <Input placeholder="Name" size="large" />
    </Card>
    <Card className={[styles.card, styles['card-back']]}>
      <div className={styles['magnet-line']} />
      <Input
        placeholder="CVV"
        className={styles.cvv}
        type="password"
        size="large"
      />
    </Card>
  </div>
)

export default BankCard
