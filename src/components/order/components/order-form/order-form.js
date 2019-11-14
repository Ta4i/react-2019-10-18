import React from 'react'
import {Form, Input, Card} from 'antd'

import styles from './order-form.module.css'

const OrderForm = () => (
  <Card title="Please enter your contact details" className={styles.wrapper}>
    <Form>
      <Form.Item label="Name:">
        <Input />
      </Form.Item>
      <Form.Item label="Phone Number:">
        <Input />
      </Form.Item>
      <Form.Item label="Address:">
        <Input placeholder="Street" />
        <Input placeholder="House" />
        <Input placeholder="Flat" />
      </Form.Item>
    </Form>
  </Card>
)

export default OrderForm
