import React from 'react'
import {List} from 'antd'
import styles from './order.css'

const data = [
  {
    title: 'Dish01',
  },
  {
    title: 'Dish02',
  },
]

function Order(props) {
  return (
    <List
      className="cart-list"
      itemLayout="horizontal"
      header="Cart"
      footer="Total: 10$"
      bordered
      size="small"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
          />
          <div className="cart-list__info cart-list__price">content</div>
          <div className="cart-list__info cart-list__quantity">content</div>
          <div className="cart-list__info cart-list__total">content</div>
        </List.Item>
      )}
    />
  )
}

export default Order
